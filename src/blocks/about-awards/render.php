<section>
  <div class="my-8 flex flex-col gap-6 md:my-16">
    <div class="flex w-full items-center justify-between py-2">
      <h2 class="font-poppins text-3xl text-primary-800">Awards</h2>
      <a href="<?php echo get_post_type_archive_link('awards') ?>"
        class="font-poppins text-gray-500 hover:text-primary-800">View All
      </a>
    </div>
    <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">

      <?php
        $args = array(
          'post_type' => 'awards',
          'post_status' => 'publish',
          'posts_per_page' => 8,
        );
        $the_query = new WP_Query( $args );
        $awardColors = ['#1abc9c', '#3498db', '#9b59b6', '#f1c40f', '#e74c3c', '#e67e22'];
        $index = 0;
        
        if ( $the_query->have_posts() ) {
          while ( $the_query->have_posts() ) {
            $the_query->the_post();

            $awardDateTime = get_post_meta( get_the_ID(), 'award_date', true );
            $dateTime = new DateTime($awardDateTime);
            $awardYear = $dateTime->format('Y');
            $currentColor = $awardColors[$index];
      ?>

      <div class="flex w-full gap-4">
        <div class="flex aspect-square h-28 w-28 items-center justify-center rounded-3xl bg-white shadow-lg">
          <svg class="h-4/6 w-4/6" style="color: <?php echo $currentColor; ?>">
            <use xlink:href="/icons.svg#icon-award-star"></use>
          </svg>
        </div>
        <div class="flex h-full flex-col py-2">
          <h4 class="font-poppins text-black"><?php echo $awardYear ?></h4>
          <p class="font-poppins font-light text-black">
            <?php echo get_the_title(); ?>
          </p>
          <p class="font-poppins font-extralight leading-none text-black line-clamp-2">
            <?php echo get_the_excerpt(); ?>
          </p>
        </div>
      </div>

      <?php
            $index++;
          }
        } else {
          // no posts found
        }
        /* Restore original Post Data */
        wp_reset_postdata();
      ?>
    </div>
  </div>
</section>