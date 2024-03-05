<?php

function remove_ld_json_from_content($content) {
  $content = preg_replace('/<script type="application\/ld\+json">(.*?)<\/script>/s', '', $content);
  return $content;
}
add_filter('the_content', 'remove_ld_json_from_content');

function add_ld_json_to_head() {
  $blocks = parse_blocks( get_the_content( get_the_ID() ) );
  $content_markup = '';
  foreach ( $blocks as $block ) {
    $content_markup .= render_block( $block ); // render_block renders a single block into a HTML string
  }

  // Use a regular expression to find and extract the ld+json script
  preg_match_all('/<script type="application\/ld\+json">(.*?)<\/script>/s', $content_markup, $matches);

  // If matches are found, output each script in the head
  if (!empty($matches[1])) {
    foreach($matches[1] as $match) {
      echo '<script type="application/ld+json">' . $match . '</script>';
    }
  }
}
add_action('wp_head', 'add_ld_json_to_head');