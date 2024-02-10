<?php 

function custom_rewrite_rules() {
    add_rewrite_rule('^icons\.svg$', 'index.php?custom_icons_route=1', 'top');
  }
  add_action('init', 'custom_rewrite_rules');
  
  function custom_query_vars($vars) {
    $vars[] = 'custom_icons_route';
    return $vars;
  }
  add_filter('query_vars', 'custom_query_vars');
  
  function handle_custom_icons_route() {
    $custom_icons_route = get_query_var('custom_icons_route');
  
    if ($custom_icons_route) {
      $file_path = get_template_directory() . "/build/icons/base-icons.svg";
      if (file_exists($file_path)) {
        header('Content-Type: image/svg+xml');
        echo file_get_contents($file_path);
        exit;
      }
    }
  }
  add_action('template_redirect', 'handle_custom_icons_route');