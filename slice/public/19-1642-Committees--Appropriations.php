<!DOCTYPE html>
<html>
<?php $title = '19-1642-Committees--Appropriations'; ?>
<?php include 'tpl/includes/head.inc'; ?>
<body class="page">
<div class="pageWr">
  <?php include 'tpl/blocks/sHeader.inc'; ?>
  <div class="pageIn">

    <section class="section section_bg-color_f section_inner-v-centered">

      <div class="section__sNav">

        <div class="bContainer">
          <a href="#" class="link link_cl_a link_back">back</a>
          <div class="breadcrumb">
            <a href="#">Committees</a>
            <span>Appropriations</span>
          </div>

          <?php include 'tpl/blocks/bShare.inc'; ?>
        </div>

      </div>

      <div class="section__v-inner section__v-inner_d">
        <div class="bContainer">

          <div class="bTitle bTitle_wSub_a bTitle_gap_a">
            <h1>Appropriations</h1>
            <div class="bTitle__sub">
              <p>Select a subcommittee from the dropdown for more information.</p>
            </div>
          </div>

          <div class="bSelect bSelect_a bSelect_size_a">
            <div class="form-item form-type-select">
              <select class="form-select" id="edit-permanent-state">
                  <option value="" selected="selected" data-select2-id="10">State</option><option value="Alabama" data-select2-id="22">Alabama</option><option value="Alaska" data-select2-id="23">Alaska</option><option value="Arizona" data-select2-id="24">Arizona</option><option value="Arkansas" data-select2-id="25">Arkansas</option><option value="California" data-select2-id="26">California</option><option value="Colorado" data-select2-id="27">Colorado</option><option value="Connecticut" data-select2-id="28">Connecticut</option><option value="Delaware" data-select2-id="29">Delaware</option><option value="District of Columbia" data-select2-id="30">District of Columbia</option><option value="Florida" data-select2-id="31">Florida</option><option value="Georgia" data-select2-id="32">Georgia</option><option value="Hawaii" data-select2-id="33">Hawaii</option><option value="Idaho" data-select2-id="34">Idaho</option><option value="Illinois" data-select2-id="35">Illinois</option><option value="Indiana" data-select2-id="36">Indiana</option><option value="Iowa" data-select2-id="37">Iowa</option><option value="Kansas" data-select2-id="38">Kansas</option><option value="Kentucky" data-select2-id="39">Kentucky</option><option value="Louisiana" data-select2-id="40">Louisiana</option><option value="Maine" data-select2-id="41">Maine</option><option value="Maryland" data-select2-id="42">Maryland</option><option value="Massachusetts" data-select2-id="43">Massachusetts</option><option value="Michigan" data-select2-id="44">Michigan</option><option value="Minnesota" data-select2-id="45">Minnesota</option><option value="Mississippi" data-select2-id="46">Mississippi</option><option value="Missouri" data-select2-id="47">Missouri</option><option value="Montana" data-select2-id="48">Montana</option><option value="Nebraska" data-select2-id="49">Nebraska</option><option value="Nevada" data-select2-id="50">Nevada</option><option value="New Hampshire" data-select2-id="51">New Hampshire</option><option value="New Jersey" data-select2-id="52">New Jersey</option><option value="New Mexico" data-select2-id="53">New Mexico</option><option value="New York" data-select2-id="54">New York</option><option value="North Carolina" data-select2-id="55">North Carolina</option><option value="North Dakota" data-select2-id="56">North Dakota</option><option value="Ohio" data-select2-id="57">Ohio</option><option value="Oklahoma" data-select2-id="58">Oklahoma</option><option value="Oregon" data-select2-id="59">Oregon</option><option value="Pennsylvania" data-select2-id="60">Pennsylvania</option><option value="Rhode Island" data-select2-id="61">Rhode Island</option><option value="South Carolina" data-select2-id="62">South Carolina</option><option value="South Dakota" data-select2-id="63">South Dakota</option><option value="Tennessee" data-select2-id="64">Tennessee</option><option value="Texas" data-select2-id="65">Texas</option><option value="Utah" data-select2-id="66">Utah</option><option value="Vermont" data-select2-id="67">Vermont</option><option value="Virginia" data-select2-id="68">Virginia</option><option value="Washington" data-select2-id="69">Washington</option><option value="West Virginia" data-select2-id="70">West Virginia</option><option value="Wisconsin" data-select2-id="71">Wisconsin</option><option value="Wyoming" data-select2-id="72">Wyoming</option>
              </select>
            </div>

              <div class="form-item form-type-select">
                  <select class="form-select" id="edit-local-state" >
                      <option value="" selected="selected" data-select2-id="10">State</option><option value="Alabama" data-select2-id="22">Alabama</option><option value="Alaska" data-select2-id="23">Alaska</option><option value="Arizona" data-select2-id="24">Arizona</option><option value="Arkansas" data-select2-id="25">Arkansas</option><option value="California" data-select2-id="26">California</option><option value="Colorado" data-select2-id="27">Colorado</option><option value="Connecticut" data-select2-id="28">Connecticut</option><option value="Delaware" data-select2-id="29">Delaware</option><option value="District of Columbia" data-select2-id="30">District of Columbia</option><option value="Florida" data-select2-id="31">Florida</option><option value="Georgia" data-select2-id="32">Georgia</option><option value="Hawaii" data-select2-id="33">Hawaii</option><option value="Idaho" data-select2-id="34">Idaho</option><option value="Illinois" data-select2-id="35">Illinois</option><option value="Indiana" data-select2-id="36">Indiana</option><option value="Iowa" data-select2-id="37">Iowa</option><option value="Kansas" data-select2-id="38">Kansas</option><option value="Kentucky" data-select2-id="39">Kentucky</option><option value="Louisiana" data-select2-id="40">Louisiana</option><option value="Maine" data-select2-id="41">Maine</option><option value="Maryland" data-select2-id="42">Maryland</option><option value="Massachusetts" data-select2-id="43">Massachusetts</option><option value="Michigan" data-select2-id="44">Michigan</option><option value="Minnesota" data-select2-id="45">Minnesota</option><option value="Mississippi" data-select2-id="46">Mississippi</option><option value="Missouri" data-select2-id="47">Missouri</option><option value="Montana" data-select2-id="48">Montana</option><option value="Nebraska" data-select2-id="49">Nebraska</option><option value="Nevada" data-select2-id="50">Nevada</option><option value="New Hampshire" data-select2-id="51">New Hampshire</option><option value="New Jersey" data-select2-id="52">New Jersey</option><option value="New Mexico" data-select2-id="53">New Mexico</option><option value="New York" data-select2-id="54">New York</option><option value="North Carolina" data-select2-id="55">North Carolina</option><option value="North Dakota" data-select2-id="56">North Dakota</option><option value="Ohio" data-select2-id="57">Ohio</option><option value="Oklahoma" data-select2-id="58">Oklahoma</option><option value="Oregon" data-select2-id="59">Oregon</option><option value="Pennsylvania" data-select2-id="60">Pennsylvania</option><option value="Rhode Island" data-select2-id="61">Rhode Island</option><option value="South Carolina" data-select2-id="62">South Carolina</option><option value="South Dakota" data-select2-id="63">South Dakota</option><option value="Tennessee" data-select2-id="64">Tennessee</option><option value="Texas" data-select2-id="65">Texas</option><option value="Utah" data-select2-id="66">Utah</option><option value="Vermont" data-select2-id="67">Vermont</option><option value="Virginia" data-select2-id="68">Virginia</option><option value="Washington" data-select2-id="69">Washington</option><option value="West Virginia" data-select2-id="70">West Virginia</option><option value="Wisconsin" data-select2-id="71">Wisconsin</option><option value="Wyoming" data-select2-id="72">Wyoming</option>
                  </select>
              </div>
          </div>

        </div>
      </div>

    </section>

    <section class="section section_ind_f section_bg-color_b">

      <div class="bContainer">
        <div class="senators senators_col senators_dark">

          <div class="senators__items">
                  <span class="senators__item">
                  <span class="senators__imgWrap">
                      <span class="senators__img" style="background-image: url('../dist/images/tmp/senators-img-3.jpg')"></span>
                    </span>

                    <span class="senators__name">
                     Sen. Casey Murdock
                    </span>
                    <span class="senators__position">
                      Chairman
                    </span>

                  </span>

            <a href="#" class="senators__item">
                    <span class="senators__imgWrap">
                      <span class="senators__img" style="background-image: url('../dist/images/tmp/senators-img-4.jpg')"></span>
                    </span>

              <span class="senators__name">
                     Sen. Roland Pederson
                    </span>
              <span class="senators__position">
                     Vice Chairman
                    </span>

            </a>

          </div>

          <div class="senators__all">

            <h2>Appropriations <br>
              Members</h2>

            <div class="senators__btnWrap">
              <a href="#" class="btn">see all members</a>
            </div>


          </div>

        </div>
      </div>

    </section>

    <section class="section section_ind_c section_bg-color_c">

      <div class="bContainer">
        <div class="pageIn__ico">
          <img src="../dist/images/titleIco/title-ico-1.png" srcset="../dist/images/titleIco/title-ico-1-2x.png 2x" alt="">
        </div>
        <h2>Subcommittee Events</h2>
        
        <div class="bTiles bTiles_ev">

          <div class="bTiles__items">
            <a href="#" class="bTiles__item">
              <span class="bTiles__date">
                Thur. Nov. 7, 2019 |  9:00am
              </span>
              <span class="bTiles__title">
                Public Safety and Judiciary Subcommittee Budget Hearings
              </span>
              <span class="bTiles__sub">
                Third Meeting
              </span>
              <span class="bTiles__btnWrap">
                <span class="bTiles__btn btn btn_b btn_b_live">
                  <span><span>•</span> live now</span> room 511-a
                </span>
              </span>

            </a>

            <a href="#" class="bTiles__item">
              <span class="bTiles__date">
                Tues. Nov. 12, 2019 |  9:00am
              </span>
              <span class="bTiles__title">
                Public Safety and Judiciary Subcommittee Budget Hearings
              </span>
              <span class="bTiles__sub">
                Fourth Meeting
              </span>
              <span class="bTiles__btnWrap">
                  <span class="bTiles__btn btn btn_b">
                    <span><span>•</span></span> room 511-a
                </span>
              </span>

            </a>

            <a href="#" class="bTiles__item">
              <span class="bTiles__date">
               Fri. Nov. 15, 2019 |  9:00am
              </span>
              <span class="bTiles__title">
                Oversight Committee for the Legislative Office of Fiscal Transparency (LOFT)
              </span>
              <span class="bTiles__sub">
               Third Meeting
              </span>
              <span class="bTiles__btnWrap">
                 <span class="bTiles__btn btn btn_b">
                  <span><span>•</span></span> room 535
                </span>
              </span>

            </a>

            <a href="#" class="bTiles__item">
              <span class="bTiles__date">
              Thur. Nov. 17, 2019 |  9:00am
              </span>
              <span class="bTiles__title">
                Public Safety and Judiciary Subcommittee Budget Hearings
              </span>
              <span class="bTiles__sub">
              Third Meeting
              </span>
              <span class="bTiles__btnWrap">
                <span class="bTiles__btn btn btn_b">
                  <span><span>•</span></span> room 511-a
                </span>
              </span>

            </a>

            <a href="#" class="bTiles__item">
              <span class="bTiles__date">
              Tues. Nov. 19, 2019 |  9:00am
              </span>
              <span class="bTiles__title">
               Public Safety and Judiciary Subcommittee Budget Hearings

              </span>
              <span class="bTiles__sub">
              Fourth Meeting
              </span>
              <span class="bTiles__btnWrap">
                 <span class="bTiles__btn btn btn_b">
                  <span><span>•</span></span> room 511-a
                </span>
              </span>

            </a>

            <a href="#" class="bTiles__item">
              <span class="bTiles__date">
               Fri. Nov. 15, 2019 |  9:00am
              </span>
              <span class="bTiles__title">
                Oversight Committee for the Legislative Office of Fiscal Transparency (LOFT)
              </span>
              <span class="bTiles__sub">
               Third Meeting
              </span>
              <span class="bTiles__btnWrap">
                 <span class="bTiles__btn btn btn_b">
                  <span><span>•</span></span> room 535
                </span>
              </span>

            </a>
          </div>

        </div>
      </div>

    </section>


  </div>
  <?php include 'tpl/blocks/sFooter.inc'; ?>
</div>
</body>
</html>
