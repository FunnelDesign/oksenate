<!DOCTYPE html>
<html>
<?php $title = '19-1642-Senator-BlogPost'; ?>
<?php include 'tpl/includes/head.inc'; ?>
<body class="page">
<div class="pageWr">
  <?php include 'tpl/blocks/sHeader.inc'; ?>
  <div class="pageIn">

    <section class="section section_ind_d section_bg-color_c">
      <?php include 'tpl/blocks/bShare-color-a-no-bread.inc'; ?>

      <div class="bContainer">
        <a href="#" class="btn btn_a section__btnBack">
          back to senator treat’s news
        </a>
        
        <div class="bPost">
          <div class="bPost__header">
            <div class="bPost__date">
              Posted February 28, 2019 |  9:00am
            </div>
            <div class="bPost__title">
              <h1>Measure to build aerospace training facility heads to full Senate vote</h1>
            </div>
          </div>
          <div class="bPost__body">
            <p>
              <img src="../dist/images/tmp/blog-post-img-1.jpg" alt="">
            </p>
            <div class="bPost__text">
              <p>A measure to build a statewide aerospace training facility cleared both the Senate Education and the Appropriation and Budget committees this week and is now headed to the Senate floor.</p>
              <p>Senate Bill 432, authored by Sen. Adam Pugh, R-Edmond, authorizes the Oklahoma Department of Career and Technology Education to acquire or lease property for the purpose of creating the statewide aerospace training facility. Under the measure, the State Board would establish admission standards and the curriculum requirements.</p>
            </div>
            <div class="bMedia bMedia_gap_a bAbout__bMedia">

              <a href="#XVsjLNUK-pw" class="bMedia__play-btn bMedia-tile__play-btn">
                <span class="bMedia__preview" style="background-image: url('../dist/images/tmp/video-pre-tmp-1.jpg')"></span>

                <span class="bMedia__previewText">play video</span>
              </a>
              <div class="bMedia__wrap">
                <iframe id="XVsjLNUK-pw" width="560" height="315" src="https://www.youtube.com/embed/XVsjLNUK-pw?rel=0&amp;controls=1&amp;showinfo=0&amp;enablejsapi=1" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
              </div>

              <div class="bPost__caption">
                <strong> Video of Senator Treat</strong>
              </div>
            </div>

            <div class="bPost__text">
              <p>
                Pugh said he filed the legislation after officials at the state’s air force bases voiced a growing need for job candidates with specific skill sets in Oklahoma. Aerospace and aviation is the state’s second largest industry and still growing rapidly, with an annual economic impact of $44 billion and providing 205,000 direct and indirect jobs with an average salary of $73,300.
              </p>
              <p>
                “Creating a state aerospace training facility is a logical and necessary step in continuing to support the rapid expansion of the industry in Oklahoma,” said Pugh. “The increasing visibility of aviation and aerospace in Oklahoma has not gone unnoticed by military officials and aerospace executives, as industry leaders continue to push for broadened job training opportunities to fill hundreds of available jobs in the aviation industry across the state.”
              </p>

            </div>

            <div class="bLightSlider bLightSlider_gap_c">

              <div class="bLightSlider__slider">
                <ul class="bLightSlider__slides">
                  <?php $SliderThumb = array(
                    array("slider-thumb-img-1.jpg"),
                    array("creek_council_oak_tree.jpg"),
                    array("slider-thumb-img-1.jpg"),
                    array("slider-thumb-img-1.jpg"),
                    array("slider-thumb-img-1.jpg"),
                    array("slider-thumb-img-1.jpg")
                  )
                  ?>
                  <?php foreach($SliderThumb as $key => $element): ?>
                    <li data-thumb="../dist/images/tmp/<?php print $element[0]; ?>">
                      <img src="../dist/images/tmp/<?php print $element[0]; ?>" />
                    </li>
                  <?php endforeach; ?>
                </ul>
              </div>

              <div class="bPost__caption">
                <strong>Photos From Event</strong>
              </div>

            </div>

            <div class="bPost__text">
              <p>For more information, contact: <br>
                Sen. Pugh: <a href="tel:+(405) 521-5622">(405) 521-5622</a></p>
            </div>

          </div>

          <?php include 'tpl/blocks/bSoc.inc'; ?>
        </div>
      </div>

    </section>

  </div>
  <?php include 'tpl/blocks/sFooter.inc'; ?>

</div>
</body>
</html>
