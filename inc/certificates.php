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

        <div id="ieeesbtkmce-admin-certificate-edit"></div>

        <div class="p-4 w-full bg-white rounded shadow-md">
            <label for="fileInput" class="block text-sm font-medium text-gray-700">Select a file:</label>
            
            <div class="mt-1 flex items-center" id="plupload-browse-button" >
                <input type="button"name="fileInput" class="hidden">
                <div class="flex-1">
                    <div class="relative">
                        <button type="button" class="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300">
                            Choose Certificate Template (PDF)
                        </button>
                        <input type="text" id="certificate_template" name="certificate_template" value="<?php echo esc_url($certificate_template_url); ?>" readonly class="absolute inset-0 w-full h-full opacity-0" aria-hidden="true">
                    </div>
                </div>
            </div>
        </div>

        <div class="p-6">
        <pre id="php-code"></pre>
        <button
          id="export-button"
          class="rounded border border-blue-500 bg-transparent px-4 py-2 font-semibold text-blue-700 hover:border-transparent hover:bg-blue-500 hover:text-white"
        >
          Export
        </button>
      </div>

      <div
        class="flex items-center justify-between gap-3 rounded-lg bg-gray-200 p-4"
      >
        <div class="flex items-center">
          <label for="fontColor" class="mr-4">Font Color:</label>
          <input
            type="color"
            id="fontColor"
            class="h-8 w-40 rounded-md border border-gray-400"
          />
        </div>

        <div class="flex items-center">
          <label for="fontSize" class="mr-4">Font Size:</label>
          <input
            type="number"
            id="fontSize"
            class="w-40 rounded-md border border-gray-400 p-2"
          />
        </div>

        <input
          type="text"
          placeholder="Text"
          class="w-full rounded-md border border-gray-400 p-2"
        />

        <button
          class="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-600"
        >
          Bold
        </button>

        <button
          class="rounded bg-green-500 px-4 py-2 font-bold text-white hover:bg-green-600"
        >
          Export
        </button>
      </div>

      <div id="canvas_container" class="w-full relative">
        <canvas id="pdf-renderer" class="w-full  absolute top-0 left-0 border-red-700 border-2"></canvas>
        <canvas id="drawable-canvas" class="w-full  absolute top-0 left-0 border-blue-700 border-2"></canvas>
      </div>

        <?php
    }
}
add_action('edit_form_after_editor', 'add_custom_html_below_editor');

// function save_certificate_template_meta_box($post_id) {
//     if (isset($_POST['certificate_template'])) {
//         update_post_meta($post_id, 'certificate_template', esc_url($_POST['certificate_template']));
//     }
// }
// add_action('save_post', 'save_certificate_template_meta_box');










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