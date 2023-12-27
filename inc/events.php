<?php

//Custom Post Type - Events
function register_events_post_type() {
    $labels = array(
        'name'               => _x( 'Events', 'post type general name', 'ieeesbtkmce' ),
        'singular_name'      => _x( 'Event', 'post type singular name', 'ieeesbtkmce' ),
        'menu_name'          => _x( 'Events', 'admin menu', 'ieeesbtkmce' ),
        'name_admin_bar'     => _x( 'Event', 'add new on admin bar', 'ieeesbtkmce' ),
        'add_new'            => _x( 'Add New', 'event', 'ieeesbtkmce' ),
        'add_new_item'       => __( 'Add New Event', 'ieeesbtkmce' ),
        'new_item'           => __( 'New Event', 'ieeesbtkmce' ),
        'edit_item'          => __( 'Edit Event', 'ieeesbtkmce' ),
        'view_item'          => __( 'View Event', 'ieeesbtkmce' ),
        'all_items'          => __( 'All Events', 'ieeesbtkmce' ),
        'search_items'       => __( 'Search Events', 'ieeesbtkmce' ),
        'parent_item_colon'  => __( 'Parent Events:', 'ieeesbtkmce' ),
        'not_found'          => __( 'No events found.', 'ieeesbtkmce' ),
        'not_found_in_trash' => __( 'No events found in Trash.', 'ieeesbtkmce' ),
    );

    $args = array(
        'labels'             => $labels,
        'public'             => true,
        'publicly_queryable' => true,
        'show_ui'            => true,
        'show_in_menu'       => true,
        'show_in_rest'       => true,
        'query_var'          => true,
        'rewrite'            => array( 'slug' => 'events' ),
        'capability_type'    => 'post',
        'has_archive'        => true,
        'hierarchical'       => false,
        'menu_position'      => null,
        'supports'           => array( 'title', 'editor', 'thumbnail', 'excerpt', 'custom-fields' ),
        'menu_icon'          => 'data:image/svg+xml;base64,' . base64_encode('<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#a7aaad" viewBox="0 0 16 16"> <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5m9.954 3H2.545c-.3 0-.545.224-.545.5v1c0 .276.244.5.545.5h10.91c.3 0 .545-.224.545-.5v-1c0-.276-.244-.5-.546-.5M11.5 7a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5z"/> </svg>')
    );

    register_post_type( 'events', $args );
}
add_action('init', 'register_events_post_type');

?>