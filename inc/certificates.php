<?php

function register_certificates_post_type() {
    $labels = array(
        'name'               => _x('Certificates', 'post type general name', 'ieeesbtkmce'),
        'singular_name'      => _x('Certificate', 'post type singular name', 'ieeesbtkmce'),
        'menu_name'          => __('Certificates', 'ieeesbtkmce'),
        'name_admin_bar'     => __('Certificate', 'ieeesbtkmce'),
        'add_new'            => __('Add New', 'ieeesbtkmce'),
        'add_new_item'       => __('Add New Certificate', 'ieeesbtkmce'),
        'new_item'           => __('New Certificate', 'ieeesbtkmce'),
        'edit_item'          => __('Edit Certificate', 'ieeesbtkmce'),
        'view_item'          => __('View Certificate', 'ieeesbtkmce'),
        'all_items'          => __('All Certificates', 'ieeesbtkmce'),
        'search_items'       => __('Search Certificates', 'ieeesbtkmce'),
        'not_found'          => __('No certificates found', 'ieeesbtkmce'),
        'not_found_in_trash' => __('No certificates found in Trash', 'ieeesbtkmce'),
    );

    $args = array(
        'labels'             => $labels,
        'public'             => true,
        'publicly_queryable' => true,
        'show_ui'            => true,
        'show_in_menu'       => true,
        'show_in_rest'       => true,
        'query_var'          => true,
        'rewrite'            => array( 'slug' => 'certificates' ),
        'capability_type'    => 'post',
        'has_archive'        => true,
        'hierarchical'       => false,
        'menu_position'      => null,
        'supports'           => array('title', 'editor'),
        'menu_icon'          => 'dashicons-awards',
        'publicly_queryable' => false
    );

    register_post_type( 'certificates', $args );
}
add_action('init', 'register_certificates_post_type');


// Add custom HTML below the post editor on the edit post screen
function add_custom_html_below_editor($post) {
  if ($post->post_type === 'certificates') {
    $certificate_template_url = get_post_meta($post->ID, 'certificate_template', true);
    ?>
<div id="wp-content-wrap" class="wp-core-ui wp-editor-wrap html-active has-dfw">
  <div id="wp-content-editor-container" class="wp-editor-container"></div>
</div>
<?php
  }
}
add_action('edit_form_after_editor', 'add_custom_html_below_editor');

function ieeesbtkmce_certificates_meta() {
  add_meta_box(
      'certificate-details',        // $id
      'Certificate Details',        // $title
      'show_certificate_details',   // $callback
      'certificates',               // $page
      'side',                       // $context
      'high'                        // $priority
  );
}
// add_action('add_meta_boxes', 'ieeesbtkmce_certificates_meta');
function show_certificate_details() {
  ?>
<input type="number" name="wpse_value" value="">

<?php
 }










add_action('init', function() {
    add_rewrite_rule('certificate-download/([a-z0-9-]+)[/]?$', 'index.php?certificate-download=$matches[1]', 'top' );
} );

add_filter('query_vars', function( $query_vars ) {
    $query_vars[] = 'certificate-download';
    return $query_vars;
} );

add_action('template_include', function( $template ) {
    if ( ! get_query_var('certificate-download') ) {
        return $template;
    }
    return IEEESBTKMCE_THEME_PATH . '/inc/certificate-download.php';

} );