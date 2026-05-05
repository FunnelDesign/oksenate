import {checkInit} from "../helper";

const $ = jQuery;

window.sHeader = class {
	constructor(props = {}) {
		this.name = props.name || `sHeader`;
		this.selector = props.selector || `.${this.name}`;

		checkInit(this.selector, this.name, (item) => {
			this.init($(item));
		});
	}

	init($elm) {
		const componentName = this.name;
		const $searchToggleButton = $elm.find(`.${this.name}__searchBtn`);
		const $searchFormWrapper = $elm.find(`.${this.name}__searchForm`);
		const isSearchInitiallyExpanded = $elm.hasClass(`${this.name}_searchOpen`);

		// Reason: Keep ARIA and focusability in sync without breaking CSS transform animation.
		const syncSearchAccessibilityState = ($targetSearchFormWrapper, isExpanded) => {
			$searchToggleButton.attr('aria-expanded', isExpanded ? 'true' : 'false');
			$targetSearchFormWrapper.attr('aria-hidden', isExpanded ? 'false' : 'true');
			if (isExpanded) {
				$targetSearchFormWrapper.removeAttr('inert');
				return;
			}
			$targetSearchFormWrapper.attr('inert', 'inert');
		};
		const collapseSearchForm = ($targetSearchFormWrapper = $searchFormWrapper) => {
			$elm.removeClass(`${this.name}_searchOpen`);
			syncSearchAccessibilityState($targetSearchFormWrapper, false);
		};

		syncSearchAccessibilityState($searchFormWrapper, isSearchInitiallyExpanded);

		$elm.on('click touch', `.${this.name}__btn-mobile`, (e) => {
			e.preventDefault();
			$elm.toggleClass(`${this.name}_mobileMenu`);
			$('body').toggleClass(`mobileMenu-open`);

			collapseSearchForm($searchFormWrapper);

			const isExpanded = $elm.hasClass(`${this.name}_mobileMenu`);
			$(e.currentTarget).attr('aria-expanded', isExpanded ? 'true' : 'false');
			//adding Aria attribute to reflect either menu expanded or collapsed
		});

		$elm.on('click touch', `.${this.name}__searchBtn`, (e) => {
			e.preventDefault();
			$elm.toggleClass(`${this.name}_searchOpen`);

			$elm.removeClass(`${this.name}_mobileMenu`);
			$('body').removeClass(`mobileMenu-open`);

			const isExpanded = $elm.hasClass(`${this.name}_searchOpen`);
			const $clickedSearchFormWrapper = $(e.currentTarget).siblings(`.${this.name}__searchForm`).first();
			const $targetSearchFormWrapper = $clickedSearchFormWrapper.length ? $clickedSearchFormWrapper : $searchFormWrapper;
			syncSearchAccessibilityState($targetSearchFormWrapper, isExpanded);
			window.requestAnimationFrame(() => {
				const isExpandedAfterAllHandlers = $elm.hasClass(`${this.name}_searchOpen`);
				syncSearchAccessibilityState($targetSearchFormWrapper, isExpandedAfterAllHandlers);
			});
			//adding Aria attribute to reflect whether the Search form is expanded or collapsed
			$elm.find(`.${this.name}__btn-mobile`).attr('aria-expanded', 'false');

			if (isExpanded) {
				$elm.find('.f-search input.form-search').focus();
			}

		});
		$(document).on('focusin', `.bShare.section__bShare button, .bShare.section__bShare a, .bShare.section__bShare [role="button"]`, () => {
			if (!$elm.hasClass(`${this.name}_searchOpen`)) return;
			// Reason: Keep focused share buttons visible when keyboard users move behind the search overlay.
			collapseSearchForm($searchFormWrapper);
		});

		addPadding();
		addAccessibilityCookie();

		$(window).on('resize', () => {
			addPadding();
		});

		$elm.on('click touch', `.bMessage__close`, () => {
			addPadding();
		});

		initKeyboardNavigation();

		$(document).on('drupalViewportOffsetChange.toolbar', function (event, offsets) {
			$elm.css('top', offsets.top);
		});

		function initKeyboardNavigation() {
			const topLevelExpandedSelector = `.${componentName}__menu-wrap > ul.menu > li.menu-item--expanded`;
			const keyboardOpenClass = `hover`;

			$elm.find(topLevelExpandedSelector).each((_, listItemElement) => {
				const $listItem = $(listItemElement);
				const $submenu = $listItem.children(`ul.menu`).first();
				const $trigger = $listItem.children(`a, span`).first();

				if (!$submenu.length || !$trigger.length) return;

				// Reason: Some menu items are rendered as <span>, so we make them focusable keyboard triggers.
				if ($trigger.is(`span`)) {
					$trigger.attr({
						'tabindex': '0',
						'role': 'button'
					});
				}

				$trigger.attr({
					'aria-haspopup': 'true',
					'aria-expanded': 'false'
				});

				$listItem.on(`focusin`, () => {
					openSubmenu($listItem, $trigger, keyboardOpenClass);
				});

				$listItem.on(`focusout`, (focusEvent) => {
					const hasFocusedDescendant = listItemElement.contains(focusEvent.relatedTarget);
					if (hasFocusedDescendant) return;
					closeSubmenu($listItem, $trigger, keyboardOpenClass);
				});

				$trigger.on(`keydown`, (keyboardEvent) => {
					const keyCode = keyboardEvent.key;
					if ([` `, `Spacebar`, `Enter`, `ArrowDown`, `ArrowUp`, `Escape`].indexOf(keyCode) === -1) return;

					keyboardEvent.preventDefault();

					if (keyCode === `Escape`) {
						closeSubmenu($listItem, $trigger, keyboardOpenClass);
						$trigger.trigger(`focus`);
						return;
					}

					openSubmenu($listItem, $trigger, keyboardOpenClass);

					if (keyCode === `ArrowUp`) {
						focusSubmenuLink($submenu, `last`);
						return;
					}

					focusSubmenuLink($submenu, `first`);
				});

				$submenu.on(`keydown`, `a`, (keyboardEvent) => {
					const keyCode = keyboardEvent.key;
					if ([`ArrowDown`, `ArrowUp`, `Home`, `End`, `Escape`].indexOf(keyCode) === -1) return;

					const $submenuLinks = $submenu.find(`a:visible`);
					if (!$submenuLinks.length) return;

					keyboardEvent.preventDefault();
					const currentLinkIndex = $submenuLinks.index(keyboardEvent.currentTarget);
					let targetLinkIndex = currentLinkIndex;

					if (keyCode === `Escape`) {
						closeSubmenu($listItem, $trigger, keyboardOpenClass);
						$trigger.trigger(`focus`);
						return;
					}

					if (keyCode === `ArrowDown`) {
						targetLinkIndex = (currentLinkIndex + 1) % $submenuLinks.length;
					}

					if (keyCode === `ArrowUp`) {
						targetLinkIndex = (currentLinkIndex - 1 + $submenuLinks.length) % $submenuLinks.length;
					}

					if (keyCode === `Home`) {
						targetLinkIndex = 0;
					}

					if (keyCode === `End`) {
						targetLinkIndex = $submenuLinks.length - 1;
					}

					$submenuLinks.eq(targetLinkIndex).trigger(`focus`);
				});
			});
		}

		function openSubmenu($listItem, $trigger, keyboardOpenClass) {
			$listItem.addClass(keyboardOpenClass);
			$trigger.attr('aria-expanded', 'true');
		}

		function closeSubmenu($listItem, $trigger, keyboardOpenClass) {
			$listItem.removeClass(keyboardOpenClass);
			$trigger.attr('aria-expanded', 'false');
		}

		function focusSubmenuLink($submenu, focusPosition) {
			const $submenuLinks = $submenu.find(`a:visible`);
			if (!$submenuLinks.length) return;

			if (focusPosition === `last`) {
				$submenuLinks.last().trigger(`focus`);
				return;
			}

			$submenuLinks.first().trigger(`focus`);
		}

		function addAccessibilityCookie() {
			let $accessibility = $('#accessibility');

			if (!$accessibility.length) return;
			let cookeName = 'accessibility_message_was_shown';

			if ($.cookie(cookeName)) {
				$accessibility.hide();
				addPadding();
			} else {
				$accessibility.show();
				$accessibility.removeClass(`bMessage_hide`);
				$accessibility.on('ev.hide', () => {

					$.cookie('accessibility_message_was_shown', "1", {
						expires: 86400,
						path: '/'
					});

					addPadding();
				});
			}
		}

		function addPadding() {
			let $pageWr = $(`.pageWr`);
			if (!$pageWr.length) return;
			$pageWr.css(`padding-top`, $elm.outerHeight());
		}
	}
};

export default sHeader;



