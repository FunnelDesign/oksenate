const A11Y_TOGGLE_SELECTOR = 'button#accessibility_settings_toggle';
const ICON_SELECTOR = '.accessibility_settings_toggle_icon';

function updateAccessibilityTriggerA11y(triggerButton) {
	if (!triggerButton) {
		return;
	}

	// Reason: The icon is decorative; the button itself needs the spoken label.
	if (!triggerButton.getAttribute('aria-label')) {
		triggerButton.setAttribute('aria-label', 'Accessibility settings');
	}

	const triggerIcon = triggerButton.querySelector(ICON_SELECTOR);
	if (triggerIcon) {
		triggerIcon.setAttribute('alt', '');
		triggerIcon.setAttribute('aria-hidden', 'true');
	}
}

export default function initAccessibilityWidgetA11y() {
	const triggerButton = document.querySelector(A11Y_TOGGLE_SELECTOR);
	updateAccessibilityTriggerA11y(triggerButton);

	// Reason: Third-party widget can re-render the trigger after initial page load.
	if (!document.body.dataset.senateAccessibilityObserver) {
		const observer = new MutationObserver(function () {
			const updatedTriggerButton = document.querySelector(A11Y_TOGGLE_SELECTOR);
			updateAccessibilityTriggerA11y(updatedTriggerButton);
		});

		observer.observe(document.body, { childList: true, subtree: true });
		document.body.dataset.senateAccessibilityObserver = 'true';
	}
}
Hello.