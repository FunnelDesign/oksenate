<header class="sHeader">

   <div class="bMessage" id="accessibility">
     <a href="#" data-ev="hide:bMessage" class="bMessage__close"></a>
     <div class="bContainer">
        <p>In order to provide equal access and equal opportunity to people with diverse abilities, this site has been
          designed with full accessibility in mind. <a href="#">Click here to view.</a>
        </p>
      </div>
   </div>

    <div class="sHeader__top desktop-only">
      <div class="bContainer">
        <div class="logo sHeader__logo">
          <a href="#">
            <img src="../dist/images/logo.png" alt="logo">
            Oklahoma Senate
          </a>
        </div>
        <div class="navLinks">
          <a href="" class="navLinks__link navLinks__link_live">
            Live Proceedings
          </a>
          <a href="" class="navLinks__link">
            Find My Senator
          </a>
          <a href="" class="navLinks__link">
            Track a Bill
          </a>
        </div>
      </div>
    </div>

    <div class="sHeader__bottom">
      <div class="bContainer">
        <a href="#" data-ev="toggleClass:sHeader:mobileMenu;removeClass:sHeader:searchOpen" class="sHeader__btn-mobile">
          <span></span>
        </a>

        <div class="logo sHeader__logo mobile-only">
          <a href="#">
            <img src="../dist/images/logo.png" alt="logo">
            Oklahoma Senate
          </a>
        </div>

        <div class="sHeader__navWrap">

          <nav class="sHeader__nav">
            <div class="sHeader__menu-wrap">
              <ul class="menu">
                <li>
                  <a href="#">Senators</a>
                  <ul class="menu">
                    <li><a href="#">Lorem ips</a></li>
                    <li class="menu-item--active-trail"><a href="#">Lorem ips</a></li>
                    <li><a href="#">Lorem</a>

                      <ul class="menu">
                        <li><a href="#">Lorem ips</a></li>
                        <li class="menu-item--active-trail"><a href="#">Lorem ips</a></li>
                        <li><a href="#">Lorem ips</a>
                        </li>
                      </ul>

                    </li>
                  </ul>
                </li>
                <li><a href="#">Legislation & Bills</a></li>
                <li class="menu-item--active-trail">
                  <a href="#">Education</a>
                  <ul class="menu">
                    <li><a href="#">Lorem ips</a></li>
                    <li class="menu-item--active-trail"><a href="#">Lorem ips</a></li>
                    <li><a href="#">Lorem</a>

                      <ul class="menu">
                        <li><a href="#">Lorem ips</a></li>
                        <li class="menu-item--active-trail"><a href="#">Lorem ips</a></li>
                        <li><a href="#">Lorem ips</a>
                        </li>
                      </ul>

                    </li>
                  </ul>
                </li>
                <li><a href="#">Committees</a></li>
                <li><a href="#">Calendar</a></li>
                <li><a href="#">Press & Media</a></li>
                <li><a href="#">Contacts</a></li>
              </ul>
            </div>
          </nav>

          <div class="navLinks mobile-only">
            <a href="" class="navLinks__link navLinks__link_live">
              Live Proceedings
            </a>
            <a href="" class="navLinks__link">
              Find My Senator
            </a>
            <a href="" class="navLinks__link">
              Track a Bill
            </a>
          </div>

        </div>

        <div class="sHeader__search">
          <a href="#" data-ev="toggleClass:sHeader:searchOpen;removeClass:sHeader:mobileMenu" class="sHeader__searchBtn"></a>

          <div class="sHeader__searchForm">
<!--            <div class="form f-search">-->
<!--              <div class="form-item">-->
<!--                <input type="text" class="form-text" placeholder="search here"/>-->
<!--              </div>-->
<!--              <div class="form-actions">-->
<!--                <input type="submit" class="form-submit" value="search">-->
<!--                <div class="ajax-progress ajax-progress-throbber"><div class="throbber">&nbsp;</div></div>-->
<!--              </div>-->
<!--            </div>-->

            <div class="form f-search">
              <form action="/search/node" method="get" id="search-block-form" accept-charset="UTF-8">
                <div class="js-form-item form-item js-form-type-search form-type-search js-form-item-keys form-item-keys form-no-label">

                  <input title="Enter the terms you wish to search for." placeholder="search here" data-drupal-selector="edit-keys" type="search" id="edit-keys" name="keys" value="" size="15" maxlength="128" class="form-search">

                </div>
                <div data-drupal-selector="edit-actions" class="form-actions js-form-wrapper form-wrapper" id="edit-actions"><input data-drupal-selector="edit-submit" type="submit" id="edit-submit" value="Search" class="button js-form-submit form-submit">
                </div>

              </form>

            </div>
          </div>
        </div>

      </div>
    </div>
</header>