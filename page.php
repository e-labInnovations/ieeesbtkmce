<?php
get_header(null, array('mode' => 'light')); ?>

<main class="container pt-[72px] mx-auto px-4 xl:px-14">
  <h1 class="font-poppins text-4xl md:mt-24 md:mb-16 mt-12 mb-4 font-semibold text-primary-800 md:text-[4rem]">
    <?php the_title() ?>
  </h1>

  <?php
        if(have_posts()) {
          while (have_posts()) {
            the_post();
            the_content();
          }
        }
    ?>

</main>

<?php get_footer(); ?>