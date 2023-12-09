<?php

function ieeesbtkmce_load_assets() {
  wp_enqueue_script('ieeesbtkmce-mainjs', get_theme_file_uri('/build/index.js'), array('wp-element'), '1.0', true);
  wp_enqueue_style('ieeesbtkmce-maincss', get_theme_file_uri('/build/index.css'));
  wp_enqueue_style('ieeesbtkmce-font', 'https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400&display=swap', array(), '1.0', 'all');
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
}

add_action('after_setup_theme', 'ieeesbtkmce_add_support');

//Menu
function ieeesbtkmce_menus() {
  $locations = array(
      'primary' => "Main Menu",
      'footer1' => "Footer Menu 1",
      'footer2' => "Footer Menu 2"
  );

  register_nav_menus($locations);
}

add_action('init', 'ieeesbtkmce_menus');

//Custom menu walker class
require_once get_stylesheet_directory() . '/inc/walker.php';