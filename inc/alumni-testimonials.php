<?php

function register_alumni_testimonials_post_type() {
    $labels = array(
        'name'               => _x('Alumni Testimonials', 'post type general name', 'textdomain'),
        'singular_name'      => _x('Alumni Testimonial', 'post type singular name', 'textdomain'),
        'menu_name'          => _x('Alumni Testimonials', 'admin menu', 'textdomain'),
        'name_admin_bar'     => _x('Alumni Testimonial', 'add new on admin bar', 'textdomain'),
        'add_new'            => _x('Add New', 'alumni testimonial', 'textdomain'),
        'add_new_item'       => __('Add New Alumni Testimonial', 'textdomain'),
        'new_item'           => __('New Alumni Testimonial', 'textdomain'),
        'edit_item'          => __('Edit Alumni Testimonial', 'textdomain'),
        'view_item'          => __('View Alumni Testimonial', 'textdomain'),
        'all_items'          => __('All Alumni Testimonials', 'textdomain'),
        'search_items'       => __('Search Alumni Testimonials', 'textdomain'),
        'parent_item_colon'  => __('Parent Alumni Testimonials:', 'textdomain'),
        'not_found'          => __('No alumni testimonials found.', 'textdomain'),
        'not_found_in_trash' => __('No alumni testimonials found in Trash.', 'textdomain'),
    );

    $args = array(
        'labels'             => $labels,
        'public'             => true,
        'publicly_queryable' => true,
        'show_ui'            => true,
        'show_in_menu'       => true,
        'show_in_rest'       => true,
        'query_var'          => true,
        'rewrite'            => array('slug' => 'alumni-testimonials'),
        'capability_type'    => 'post',
        'has_archive'        => true,
        'hierarchical'       => false,
        'menu_position'      => null,
        'supports'           => array('title', 'editor', 'thumbnail'),
        'menu_icon'          => 'dashicons-groups', // Choose an icon from Dashicons: https://developer.wordpress.org/resource/dashicons/
        'menu_icon'          => 'data:image/svg+xml;base64,' . base64_encode('<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#a7aaad" viewBox="0 0 16 16"><path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4.414a1 1 0 0 0-.707.293L.854 15.146A.5.5 0 0 1 0 14.793zm7.194 2.766a1.688 1.688 0 0 0-.227-.272 1.467 1.467 0 0 0-.469-.324l-.008-.004A1.785 1.785 0 0 0 5.734 4C4.776 4 4 4.746 4 5.667c0 .92.776 1.666 1.734 1.666.343 0 .662-.095.931-.26-.137.389-.39.804-.81 1.22a.405.405 0 0 0 .011.59c.173.16.447.155.614-.01 1.334-1.329 1.37-2.758.941-3.706a2.461 2.461 0 0 0-.227-.4zM11 7.073c-.136.389-.39.804-.81 1.22a.405.405 0 0 0 .012.59c.172.16.446.155.613-.01 1.334-1.329 1.37-2.758.942-3.706a2.466 2.466 0 0 0-.228-.4 1.686 1.686 0 0 0-.227-.273 1.466 1.466 0 0 0-.469-.324l-.008-.004A1.785 1.785 0 0 0 10.07 4c-.957 0-1.734.746-1.734 1.667 0 .92.777 1.666 1.734 1.666.343 0 .662-.095.931-.26z"/></svg>')
    );

    register_post_type('alumni_testimonials', $args);
}

add_action('init', 'register_alumni_testimonials_post_type');

function ieeesbtkmce_alumni_testimonials_change_title_text($title, $post){
    if  ($post->post_type == 'alumni_testimonials') {
        $title = 'Add Alumni Name';
    }
  
    return $title;
}
  
add_filter('enter_title_here', 'ieeesbtkmce_alumni_testimonials_change_title_text', 20 , 2);

function ieeesbtkmce_alumni_testimonials_wp_editor_settings( $settings, $editor_id ) {
    if ( $editor_id === 'content' && get_current_screen()->post_type === 'alumni_testimonials' ) {
        $settings['tinymce']   = false;
        $settings['quicktags'] = false;
        $settings['media_buttons'] = false;
    }

    return $settings;
}

add_filter( 'wp_editor_settings', 'ieeesbtkmce_alumni_testimonials_wp_editor_settings', 10, 2 );

function alumni_testimonials_meta_boxes() {
    add_meta_box(
        'alumni_batch',
        'Batch',
        'alumni_batch_callback',
        'alumni_testimonials',
        'normal',
        'default'
    );

    add_meta_box(
        'alumni_current_position',
        'Current Position',
        'alumni_current_position_callback',
        'alumni_testimonials',
        'normal',
        'default'
    );
}

function alumni_batch_callback($post) {
    $alumni_batch = get_post_meta($post->ID, 'alumni_batch', true);
    ?>
    <label for="alumni_batch">Batch:</label>
    <input type="text" id="alumni_batch" name="alumni_batch" value="<?php echo esc_attr($alumni_batch); ?>">
    <?php
}

function alumni_current_position_callback($post) {
    $alumni_current_position = get_post_meta($post->ID, 'alumni_current_position', true);
    ?>
    <label for="alumni_current_position">Current Position:</label>
    <input type="text" id="alumni_current_position" name="alumni_current_position" value="<?php echo esc_attr($alumni_current_position); ?>">
    <?php
}

function save_alumni_testimonials_meta_fields($post_id) {
    if (defined('DOING_AUTOSAVE') && DOING_AUTOSAVE) return;

    if (isset($_POST['alumni_batch'])) {
        update_post_meta($post_id, 'alumni_batch', sanitize_text_field($_POST['alumni_batch']));
    }

    if (isset($_POST['alumni_current_position'])) {
        update_post_meta($post_id, 'alumni_current_position', sanitize_text_field($_POST['alumni_current_position']));
    }
}

add_action('add_meta_boxes', 'alumni_testimonials_meta_boxes');
add_action('save_post', 'save_alumni_testimonials_meta_fields');

// function filter_alumni_testimonials_json( $data, $post, $context ) {
//     $alumni_batch = get_post_meta( $post->ID, 'alumni_batch', true );
//     $alumni_current_position = get_post_meta( $post->ID, 'alumni_current_position', true );
    
//     if($alumni_batch) {
//         $data->data['alumni_batch'] = $alumni_batch;
//     }
//     if($alumni_current_position) {
//         $data->data['alumni_current_position'] = $alumni_current_position;
//     }
    
//     return $data;
// }
// add_filter( 'rest_prepare_alumni_testimonials', 'filter_alumni_testimonials_json', 10, 3 );

//Custom API for Major Event editor html
function alumni_testimonials_api() {
    register_rest_route('alumni_testimonials/v1', 'all', array(
        'method'    => WP_REST_SERVER::READABLE,
        'callback'  => 'getAll',
        'permission_callback' => function () {
            return '__return_true';
        }
    ));

    function getAll($data) {
        $args = array(
            'post_type'      => 'alumni_testimonials',
            'posts_per_page' => -1,
        );

        $alumni_testimonials = get_posts($args);

        $result = array();

        foreach ($alumni_testimonials as $testimonial) {
            $id               = $testimonial->ID;
            $title            = $testimonial->post_title;
            $content          = $testimonial->post_content;
            $batch            = get_post_meta($testimonial->ID, 'alumni_batch', true);
            $current_position = get_post_meta($testimonial->ID, 'alumni_current_position', true);
            $thumbnail        = get_the_post_thumbnail_url($testimonial->ID, 'alumni-testimonials-thumb');

            $result[] = array(
                'id'                => $id,
                'name'              => $title,
                'content'           => $content,
                'batch'             => $batch,
                'current_position'  => $current_position,
                'img'               => $thumbnail,
            );
        }

        return $result;
    }    
}

add_action('rest_api_init', 'alumni_testimonials_api');
