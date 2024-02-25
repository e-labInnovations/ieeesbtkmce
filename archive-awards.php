<?php
get_header(null, array('mode' => 'light')); ?>

<main class="container pt-[72px] mx-auto px-4 xl:px-14">
  <h1 class="font-poppins text-4xl md:mt-24 md:mb-16 mt-12 mb-4 font-semibold text-primary-800 md:text-[4rem]">
    Awards
  </h1>

  <section>
    <div class="my-8 flex flex-col gap-6 md:my-16">
      <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <?php
        $awardColors = ['#1abc9c', '#3498db', '#9b59b6', '#f1c40f', '#e74c3c', '#e67e22'];
        $index = 0;

        if(have_posts()) {
          while (have_posts()) {
            the_post();
            get_template_part("template-parts-php/content", "award-item", array('color' => $awardColors[$index]));
              $index++;
              $index = $index == 8? 0: $index;
            }
          }
        ?>
      </div>

      <?php get_template_part('template-parts-php/pagination', 'default'); ?>

    </div>
  </section>

</main>

<?php get_footer(); ?>