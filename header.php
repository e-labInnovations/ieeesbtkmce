<?php get_template_part("template-parts-php/head"); ?>

<body <?php body_class(); ?>>

  <!-- WordPress wp_body_open: start -->
  <?php wp_body_open(); ?>
  <!-- WordPress wp_body_open: end -->

  <?php get_template_part("template-parts-php/header", null, $args); ?>