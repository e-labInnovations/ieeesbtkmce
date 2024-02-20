<?php
//Register custom blocks
function register_blocks() {
    // register_block_type(IEEESBTKMCE_THEME_PATH . "/build/blocks/test");
    register_block_type(IEEESBTKMCE_THEME_PATH . "/build/blocks/hero");
    register_block_type(IEEESBTKMCE_THEME_PATH . "/build/blocks/counter");
    register_block_type(IEEESBTKMCE_THEME_PATH . "/build/blocks/counter-item");
    register_block_type(IEEESBTKMCE_THEME_PATH . "/build/blocks/about-us");
    register_block_type(IEEESBTKMCE_THEME_PATH . "/build/blocks/header", array(
      'api_version' => 3,
      'attributes'  => array(
        'mode'  => array(
          'type'    => 'string',
          'default' => 'light',
        ),
      )
    ));
    register_block_type(IEEESBTKMCE_THEME_PATH . "/build/blocks/footer");
    register_block_type(IEEESBTKMCE_THEME_PATH . "/build/blocks/latest-news");
    register_block_type(IEEESBTKMCE_THEME_PATH . "/build/blocks/latest-news-item");
    register_block_type(IEEESBTKMCE_THEME_PATH . "/build/blocks/services");
    register_block_type(IEEESBTKMCE_THEME_PATH . "/build/blocks/services-item");
    register_block_type(IEEESBTKMCE_THEME_PATH . "/build/blocks/faq");
    register_block_type(IEEESBTKMCE_THEME_PATH . "/build/blocks/faq-item");
    register_block_type(IEEESBTKMCE_THEME_PATH . "/build/blocks/major-events");
    register_block_type(IEEESBTKMCE_THEME_PATH . "/build/blocks/major-events-item");
    register_block_type(IEEESBTKMCE_THEME_PATH . "/build/blocks/vision-and-mission");
    register_block_type(IEEESBTKMCE_THEME_PATH . "/build/blocks/exuro");
    register_block_type(IEEESBTKMCE_THEME_PATH . "/build/blocks/featured-societies");
    register_block_type(IEEESBTKMCE_THEME_PATH . "/build/blocks/front-gallery");
    register_block_type(IEEESBTKMCE_THEME_PATH . "/build/blocks/alumni-testimonials");

    register_block_type(IEEESBTKMCE_THEME_PATH . "/build/blocks/about-ieee");
    register_block_type(IEEESBTKMCE_THEME_PATH . "/build/blocks/about-tkmce");
    register_block_type(IEEESBTKMCE_THEME_PATH . "/build/blocks/about-ieeesbtkmce");
    register_block_type(IEEESBTKMCE_THEME_PATH . "/build/blocks/about-vision-and-mission");

    register_block_type(IEEESBTKMCE_THEME_PATH . "/build/blocks/footer-contact");
  }
  add_action("init", "register_blocks");
  
  //Add new block categories
  function add_new_block_categories($categories) {
    $categories[] = [
      "slug" => "ieeesbtkmce",
      "title" => "IEEE SB TKMCE THEME",
    ];
  
    return $categories;
  }
  add_filter("block_categories_all", "add_new_block_categories");