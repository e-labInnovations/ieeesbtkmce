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

function load_editor_assets() {
  // The core GSAP library
  wp_enqueue_script('gsap-js', 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.3/gsap.min.js', array(), false, true);
  // ScrollTrigger - with gsap.js passed as a dependency
  wp_enqueue_script('gsap-st', 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.3/ScrollTrigger.min.js', array('gsap-js'), false, true);
  // wp_enqueue_script('ieeesbtkmce-mainjs', get_theme_file_uri('/build/index.js'), array('wp-element'), '1.0', true);

  wp_enqueue_style('google-font', 'https://fonts.googleapis.com/css2?family=Oswald:wght@700&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap', array(), '1.0', 'all');
  wp_enqueue_style('bootstrap-icons', 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.2/font/bootstrap-icons.min.css', array(), '1.0', 'all');
  // wp_enqueue_style('ieeesbtkmce-maincss', get_theme_file_uri('/build/index.css'));
}
add_action('enqueue_block_assets', 'load_editor_assets');

add_action('enqueue_block_editor_assets', function() {
	wp_enqueue_style(
		'ieeesbtkmce-maincss',
		get_theme_file_uri('/build/index.css'),
		array(),
		filemtime(dirname(__FILE__) . '/build/index.css')
	);
});

//Load SVG Icons file
function echoSVGSpriteFile () {
  $svg_path = get_template_directory() . '/build/icons/base-icons.svg';

  if (file_exists($svg_path)) {
      $svg_content = file_get_contents($svg_path);
      echo '<div style="display: none;">' . $svg_content . '</div>';
  }
}

add_action('wp_body_open', 'echoSVGSpriteFile');


// Load SVG Icons file in the admin panel
function echoAdminSVGSpriteFile() {
  $svg_path = get_template_directory() . '/build/icons/base-icons.svg';

  if (file_exists($svg_path)) {
      $svg_content = file_get_contents($svg_path);
      ?>
      <script type="text/javascript">
          jQuery(document).ready(function($) {
              const div = document.createElement('div');
              div.style.display = 'none';
              div.innerHTML = `<?php echo $svg_content; ?>`;
              document.body.insertBefore(div, document.body.firstChild);
          });
      </script>
      <?php
  }
}

add_action('admin_footer', 'echoAdminSVGSpriteFile');


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

  add_image_size('major-event-thumb', 330, 230, true);
}
add_action('after_setup_theme', 'ieeesbtkmce_add_support');

// register new menus
function ieeesbtkmce_menus() {
  $locations = array(
    'primary' => "Main Menu",
    'footer1' => "Quick links",
    'footer2' => "Membership"
  );

  register_nav_menus($locations);
}
add_action('init', 'ieeesbtkmce_menus');

//Register custom blocks
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
  register_block_type(dirname(__FILE__) . "/build/blocks/faq");
  register_block_type(dirname(__FILE__) . "/build/blocks/faq-item");
  register_block_type(dirname(__FILE__) . "/build/blocks/major-events");
  register_block_type(dirname(__FILE__) . "/build/blocks/major-events-item");
}
add_action('init', 'register_blocks');

//Add new block categories
function add_new_block_categories($categories) {
  $categories[] = array(
    'slug'  => 'ieeesbtkmce',
    'title' => 'IEEE SB TKMCE THEME'
  );

  return $categories;
}
add_filter('block_categories_all', 'add_new_block_categories');

//Custom menu walker class
require_once get_stylesheet_directory() . '/inc/walker.php';

//Customizer
require_once get_stylesheet_directory() . '/inc/customizer.php';
new IEEESBTKMCE_Customizer();

//Custom Post Type
//Events
require_once get_stylesheet_directory() . '/inc/events.php';