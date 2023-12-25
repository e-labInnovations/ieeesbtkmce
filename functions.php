<?php

function ieeesbtkmce_load_assets() {
  // The core GSAP library
  wp_enqueue_script('gsap-js', 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.3/gsap.min.js', array(), false, true);
  // ScrollTrigger - with gsap.js passed as a dependency
  wp_enqueue_script('gsap-st', 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.3/ScrollTrigger.min.js', array('gsap-js'), false, true);
  // wp_enqueue_script('ieeesbtkmce-mainjs', get_theme_file_uri('/build/index.js'), array('wp-element'), '1.0', true);

  wp_enqueue_style('google-font', 'https://fonts.googleapis.com/css2?family=Oswald:wght@700&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap', array(), '1.0', 'all');
  wp_enqueue_style('bootstrap-icons', 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.2/font/bootstrap-icons.min.css', array(), '1.0', 'all');
  wp_enqueue_style('ieeesbtkmce-maincss', get_theme_file_uri('/build/index.css'));
}
add_action('wp_enqueue_scripts', 'ieeesbtkmce_load_assets');

function ieeesbtkmce_add_support() {
  add_theme_support('title-tag');
  add_theme_support('post-thumbnails');
  $logo_defaults = array(
    'height'               => 64,
    'width'                => 228,
    'flex-height'          => true,
    'flex-width'           => true,
    'header-text'          => array( 'site-title', 'site-description' ),
    'unlink-homepage-logo' => true, 
  );
  add_theme_support('custom-logo', $logo_defaults);
  add_theme_support('editor-style');
  add_editor_style(array('https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400&display=swap', 'build/index.css'));
  add_action('customize_register', '__return_true' );
}
add_action('after_setup_theme', 'ieeesbtkmce_add_support');

//Menu
function ieeesbtkmce_menus() {
  $locations = array(
    'primary' => "Main Menu",
    'footer1' => "Quick links",
    'footer2' => "Membership"
  );

  register_nav_menus($locations);
}
add_action('init', 'ieeesbtkmce_menus');

function register_blocks() {
  register_block_type(dirname(__FILE__) . "/build/blocks/test");
  register_block_type(dirname(__FILE__) . "/build/blocks/banner");
  register_block_type(dirname(__FILE__) . "/build/blocks/counter");
  register_block_type(dirname(__FILE__) . "/build/blocks/counter-item");
  register_block_type(dirname(__FILE__) . "/build/blocks/about-us");
  register_block_type(dirname(__FILE__) . "/build/blocks/header");
  register_block_type(dirname(__FILE__) . "/build/blocks/footer");
  register_block_type(dirname(__FILE__) . "/build/blocks/latest-news");
  register_block_type(dirname(__FILE__) . "/build/blocks/services");
  register_block_type(dirname(__FILE__) . "/build/blocks/services-item");
}
add_action('init', 'register_blocks');

//Custom menu walker class
require_once get_stylesheet_directory() . '/inc/walker.php';