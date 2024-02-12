<?php

define("IEEESBTKMCE_THEME_PATH", get_stylesheet_directory());
define("IEEESBTKMCE_THEME_URL", get_stylesheet_directory_uri());
define("DOMAIN", "ieeesbtkmce");
function ieeesbtkmce_load_assets() {
  wp_enqueue_script(
    "gsap-js",
    "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.3/gsap.min.js",
    [],
    false,
    true
  );
  wp_enqueue_script(
    "gsap-st",
    "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.3/ScrollTrigger.min.js",
    ["gsap-js"],
    false,
    true
  );
  wp_enqueue_script(
    "ieeesbtkmce-mainjs",
    get_theme_file_uri("/build/index.js"),
    ["wp-element"],
    "1.0",
    true
  );
  wp_enqueue_script(
    "hammer-js",
    "https://hammerjs.github.io/dist/hammer.min.js",
    [],
    false,
    true
  );
  wp_enqueue_script("d3-js", "https://d3js.org/d3.v6.js", [], false, true);

  wp_enqueue_style(
    "google-font",
    "https://fonts.googleapis.com/css2?family=Oswald:wght@700&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap",
    [],
    "1.0",
    "all"
  );
  wp_enqueue_style(
    "ieeesbtkmce-maincss",
    get_theme_file_uri("/build/index.css")
  );
}
add_action("wp_enqueue_scripts", "ieeesbtkmce_load_assets");

function load_editor_assets() {
  wp_enqueue_script(
    "gsap-js",
    "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.3/gsap.min.js",
    [],
    false,
    true
  );
  wp_enqueue_script(
    "gsap-st",
    "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.3/ScrollTrigger.min.js",
    ["gsap-js"],
    false,
    true
  );
  wp_enqueue_script(
    "hammer-js",
    "https://hammerjs.github.io/dist/hammer.min.js",
    [],
    false,
    true
  );
  wp_enqueue_script("d3-js", "https://d3js.org/d3.v6.js", [], false, true);

  wp_enqueue_style(
    "google-font",
    "https://fonts.googleapis.com/css2?family=Oswald:wght@700&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap",
    [],
    "1.0",
    "all"
  );
  // wp_enqueue_style('ieeesbtkmce-maincss', get_theme_file_uri("/build/index.css"),
  //   [],
  //   filemtime(dirname(__FILE__) . "/build/index.css")
  // );

  wp_localize_script("gsap-js", "themeData", [
    "theme_url" => IEEESBTKMCE_THEME_URL,
  ]);
}
add_action("enqueue_block_assets", "load_editor_assets");

add_action("enqueue_block_editor_assets", function () {
  wp_enqueue_style(
    "ieeesbtkmce-maincss",
    get_theme_file_uri("/build/index.css"),
    [],
    filemtime(dirname(__FILE__) . "/build/index.css")
  );
});
function enqueue_custom_script() {
  // Enqueue script only on the certificate edit page
  global $pagenow;
  if (
    ($pagenow === "post.php" || $pagenow === "post-new.php") &&
    get_post_type() === "certificates"
  ) {
    wp_enqueue_style(
      "ieeesbtkmce-maincss",
      get_theme_file_uri("/build/index.css")
    );

    wp_enqueue_media();
    wp_enqueue_script(
      "pdfjs",
      "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.0.943/pdf.min.js",
      [],
      null,
      true
    );
    wp_enqueue_script(
      "fabricjs",
      "https://unpkg.com/fabric@5.3.0/dist/fabric.min.js",
      [],
      null,
      true
    );
    wp_enqueue_script(
      "certificate-script",
      get_template_directory_uri() . "/assets/js/certificates-admin.js",
      ["jquery", "pdfjs", "fabricjs"],
      null,
      true
    );
    wp_enqueue_script(
      "ieeesbtkmce-mainjs",
      get_theme_file_uri("/build/index.js"),
      ["wp-element", "wp-components", "wp-block-editor"],
      "1.0",
      true
    );
  }
}
add_action("admin_enqueue_scripts", "enqueue_custom_script");

function ieeesbtkmce_add_support() {
  add_theme_support("title-tag");
  add_theme_support("post-thumbnails");

  $logo_defaults = [
    "height" => 64,
    "width" => 228,
    "flex-height" => true,
    "flex-width" => true,
    "header-text" => ["site-title", "site-description"],
    "unlink-homepage-logo" => true,
  ];
  add_theme_support("custom-logo", $logo_defaults);

  add_theme_support("editor-style");
  add_editor_style([
    "https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400&display=swap",
    "build/index.css",
  ]);

  add_action("customize_register", "__return_true");

  add_image_size("major-event-thumb", 330, 230, true);
  add_image_size("alumni-testimonials-thumb", 400, 400, true);
}
add_action("after_setup_theme", "ieeesbtkmce_add_support");

//Register new menus
function ieeesbtkmce_menus() {
  $locations = [
    "primary" => "Main Menu",
    "footer1" => "Quick links",
    "footer2" => "Membership",
  ];

  register_nav_menus($locations);
}
add_action("init", "ieeesbtkmce_menus");

//Register sidebars
function ieeestkmce_sidebars() {
  register_sidebar([
    "id" => "primary",
    "name" => __("Primary Sidebar"),
    "description" => __("A short description of the sidebar."),
    "before_widget" => '<div id="%1$s" class="widget %2$s">',
    "after_widget" => "</div>",
    "before_title" => '<h3 class="widget-title">',
    "after_title" => "</h3>",
  ]);
  register_sidebar([
    "id" => "footer-contacts",
    "name" => __("Footer Contact Us"),
    "description" => __("Footer contact us widgets"),
    "before_widget" => '<div class="grid grid-cols-3">',
    "after_widget" => "</div>",
  ]);
}
add_action("widgets_init", "ieeestkmce_sidebars");

//Custom IEEE SB TKMCE Blocks
require_once IEEESBTKMCE_THEME_PATH . "/inc/ieeesbtkmce-blocks.php";

//Custom menu walker class
require_once IEEESBTKMCE_THEME_PATH . "/inc/walker.php";

//Customizer
require_once IEEESBTKMCE_THEME_PATH . "/inc/customizer.php";
new IEEESBTKMCE_Customizer();

//SVG Sprite
require_once IEEESBTKMCE_THEME_PATH . "/inc/svg-sprite.php";

//MultiPostThumbnails
// require_once IEEESBTKMCE_THEME_PATH . '/inc/multi-post-thumbnails/multi-post-thumbnails.php';

/*** Custom Post Type **/
//Events
require_once IEEESBTKMCE_THEME_PATH . "/inc/events.php";

//Alumni Testimonials
require_once IEEESBTKMCE_THEME_PATH . "/inc/alumni-testimonials.php";

//Societies
require_once IEEESBTKMCE_THEME_PATH . "/inc/societies.php";

//Awards
require_once IEEESBTKMCE_THEME_PATH . "/inc/awards.php";

//Disable Gutenberg / block editor for certain post types
add_filter(
  "use_block_editor_for_post_type",
  "ieeesbtkmce_disable_gutenberg",
  10,
  2
);
function ieeesbtkmce_disable_gutenberg($current_status, $post_type) {
  if ($post_type === "alumni_testimonials") {
    return false;
  }
  return $current_status;
}

//Certificates Page
require_once IEEESBTKMCE_THEME_PATH . "/inc/certificates.php";

function ieeesbtkmce_block_editor_settings($editor_settings, $editor_context) {
  $editor_settings["themeData"] = [
    "theme_url" => IEEESBTKMCE_THEME_URL,
  ];
  return $editor_settings;
}

add_filter(
  "block_editor_settings_all",
  "ieeesbtkmce_block_editor_settings",
  10,
  2
);