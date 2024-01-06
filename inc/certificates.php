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
        'supports'           => array( 'title'),
        'menu_icon'          => 'dashicons-awards'
    );

    register_post_type( 'certificates', $args );
}
add_action('init', 'register_certificates_post_type');


// Add custom HTML below the post editor on the edit post screen
function add_custom_html_below_editor($post) {
    if ($post->post_type === 'certificates') {
        ?>
        <div class="custom-html-container">
            <p>This is your custom HTML content below the post editor.</p>
            <!-- Add your custom HTML here -->
        </div>
        <?php
    }
}

add_action('edit_form_after_editor', 'add_custom_html_below_editor');


function hide_certificate_editor_meta_boxes() {
    global $post;

    // Replace 'certificates' with the slug of your certificate custom post type
    if ($post->post_type === 'certificates') {
        // Remove "Preview Changes" metabox
        // remove_meta_box('submitdiv', 'certificates', 'side');

        // Remove "Status" metabox
        // remove_meta_box('poststat', 'certificates', 'normal');

        // Remove "Visibility" metabox
        // remove_meta_box('submitdiv', 'certificates', 'side');

        // Remove "Published on" metabox
        // remove_meta_box('timestampdiv', 'certificates', 'normal');
    }
}

add_action('add_meta_boxes', 'hide_certificate_editor_meta_boxes', 20);










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

// function enqueue_pdfjs_script() {
//     // Check if it's the specific admin page you want to load the script on
//     if (is_admin() && isset($_GET['page']) && $_GET['page'] === 'certificates_page') {
//         // Enqueue the PDF.js script
//         wp_enqueue_script('pdfjs', 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.0.943/pdf.min.js', array(), null, true);
//     }
// }

// add_action('admin_enqueue_scripts', 'enqueue_pdfjs_script');