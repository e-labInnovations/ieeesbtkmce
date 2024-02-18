<?php
/*
Template Name: About Us
*/

get_header(null, array('mode' => 'light')); ?>

<main class="container mx-auto px-4 xl:px-14">
    <h1 class="font-poppins text-5xl md:mt-24 md:mb-16 mt-12 mb-4 font-semibold text-primary-800 sm:text-7xl">
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