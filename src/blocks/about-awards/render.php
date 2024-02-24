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

            get_template_part("template-parts-php/content", "award-item", array('color' => $awardColors[$index]));
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