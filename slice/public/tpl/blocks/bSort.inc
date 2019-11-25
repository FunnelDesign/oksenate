<div class="bSort">
  <h4>Sort By Date</h4>


  <div class="bHide bHide_a">
    <div class="bHide__cont">

      <div class="bSort__items">
        <?php
        $event_items = [
          ['2019'],
          ['2018'],
          ['2017'],
          ['2016'],
          ['2015'],
          ['2014'],
          ['2013'],
          ['2012'],
          ['2011'],
          ['2010'],
          ['2009'],
          ['2008'],
          ['2007'],
          ['2006'],
          ['2005'],
        ]
        ?>
        <?php foreach ($event_items as $element): ?>

          <div class="bSort__item">
            <div class="bSort__title">
              <?php print $element[0]; ?>
            </div>
            <div class="bSort__body">
              <a href="#">Decemeber</a>
              <a href="#">November</a>
              <a href="#">October</a>
              <a href="#">September</a>
              <a href="#">August</a>
              <a href="#">July</a>
              <a href="#">June</a>
              <a href="#">May</a>
              <a href="#">April</a>
              <a href="#">March</a>
              <a href="#" class="bef-link-active">February</a>
              <a href="#">January</a>
            </div>
          </div>

        <?php endforeach; ?>


      </div>

    </div>
    <div class="bHide__moreWr">
      <a class="bHide__more" data-ev="toggleClass:bHide:open" href="#">
        <span class="bHide__moreOpen">show more</span>
        <span class="bHide__moreClose">show less</span>
      </a>
    </div>
  </div>
</div>