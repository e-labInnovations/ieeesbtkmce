<?php

//Add custom sections and settings to the Admin Customizer
class IEEESBTKMCE_Customizer {
    public function __construct() {
        add_action('customize_register', array($this, 'register_customize_sections'));
    }

    public function register_customize_sections($wp_customize) {
        //Init section
        $this->social_details_section($wp_customize);
        $this->footer_section($wp_customize);
    }

    //Social Details Sections, Settings and Controls
    private function social_details_section($wp_customize) {

        //New Section Panel
        $wp_customize->add_section('ieeesbtkmce_social_details_section', array(
            'title'         => 'Social Details',
            'priority'      => 160,
            'description'   => __('Add social accounts usernames', 'ieeesbtkmce')
        ));

        //Facebook
        $wp_customize->add_setting('ieeesbtkmce_facebook', array(
            'default'           => '',
            'sanitize_callback' => array($this, 'sanitize_custom_text')
        ));

        $wp_customize->add_control(new WP_Customize_Control($wp_customize, 'ieeesbtkmce_facebook_control', array(
            'label'     => 'Facebook Username',
            'section'   => 'ieeesbtkmce_social_details_section',
            'settings'  => 'ieeesbtkmce_facebook',
            'type'      => 'text'
        )));

        //Twitter
        $wp_customize->add_setting('ieeesbtkmce_twitter', array(
            'default'           => '',
            'sanitize_callback' => array($this, 'sanitize_custom_text')
        ));

        $wp_customize->add_control(new WP_Customize_Control($wp_customize, 'ieeesbtkmce_twitter_control', array(
            'label'     => 'Twitter Username',
            'section'   => 'ieeesbtkmce_social_details_section',
            'settings'  => 'ieeesbtkmce_twitter',
            'type'      => 'text'
        )));

        //Instagram
        $wp_customize->add_setting('ieeesbtkmce_instagram', array(
            'default'           => '',
            'sanitize_callback' => array($this, 'sanitize_custom_text')
        ));

        $wp_customize->add_control(new WP_Customize_Control($wp_customize, 'ieeesbtkmce_instagram_control', array(
            'label'     => 'Instagram Username',
            'section'   => 'ieeesbtkmce_social_details_section',
            'settings'  => 'ieeesbtkmce_instagram',
            'type'      => 'text'
        )));

        //LinkedIn
        $wp_customize->add_setting('ieeesbtkmce_linkedin', array(
            'default'           => '',
            'sanitize_callback' => array($this, 'sanitize_custom_text')
        ));

        $wp_customize->add_control(new WP_Customize_Control($wp_customize, 'ieeesbtkmce_linkedin_control', array(
            'label'     => 'linkedIn Username',
            'section'   => 'ieeesbtkmce_social_details_section',
            'settings'  => 'ieeesbtkmce_linkedin',
            'type'      => 'text'
        )));

        //Youtube
        $wp_customize->add_setting('ieeesbtkmce_youtube', array(
            'default'           => '',
            'sanitize_callback' => array($this, 'sanitize_custom_text')
        ));

        $wp_customize->add_control(new WP_Customize_Control($wp_customize, 'ieeesbtkmce_youtube_control', array(
            'label'     => 'YouTube Username',
            'section'   => 'ieeesbtkmce_social_details_section',
            'settings'  => 'ieeesbtkmce_youtube',
            'type'      => 'text'
        )));

    }

    

    //Footer Sections, Settings and Controls
    private function footer_section($wp_customize) {

        //New Section Panel
        $wp_customize->add_section('ieeesbtkmce-footer-section', array(
            'title'         => 'Footer',
            'priority'      => 160,
            'description'   => __('The Footer section.', 'ieeesbtkmce')
        ));

        //Credit Text
        $wp_customize->add_setting('ieeesbtkmce-footer-credt-text', array(
            'default'           => get_bloginfo('title'),
            'sanitize_callback' => array($this, 'sanitize_custom_text')
        ));

        $wp_customize->add_control(new WP_Customize_Control($wp_customize, 'ieeesbtkmce-footer-credt-text-control', array(
            'label'     => 'Credit Text',
            'section'   => 'ieeesbtkmce-footer-section',
            'settings'  => 'ieeesbtkmce-footer-credt-text',
            'type'      => 'text'
        )));

        //Address
        $wp_customize->add_setting('ieeesbtkmce-address', array(
            'default'           => '',
            'sanitize_callback' => array($this, 'sanitize_custom_html_text')
        ));

        $wp_customize->add_control(new WP_Customize_Control($wp_customize,'ieeesbtkmce-address-control', array(
            'label'     => 'Address',
            'section'   => 'ieeesbtkmce-footer-section',
            'settings'  => 'ieeesbtkmce-address',
            'type'      => 'textarea'
        )));

        //Logo
        $wp_customize->add_setting('ieeesbtkmce-footer-logo', array(
            'default' => '',
            'type' => 'theme_mod',
            'capabilty' => 'edit_theme_options',
            'sanitize_callback' => array($this, 'sanitize_custom_url')
        ));

        $wp_customize->add_control(new WP_Customize_Image_Control($wp_customize, 'ieeesbtkmce-footer-logo-control', array(
            'label' => 'Footer Logo',
            'section' => 'ieeesbtkmce-footer-section',
            'settings' => 'ieeesbtkmce-footer-logo',
            // 'width' => 380,
            // 'height' => 150
        )));

        //Description
        $wp_customize->add_setting('ieeesbtkmce-footer-description', array(
            'default'           => '',
            'sanitize_callback' => array($this, 'sanitize_custom_html_text')
        ));

        $wp_customize->add_control(new WP_Customize_Control($wp_customize,'ieeesbtkmce-footer-description-control', array(
            'label'     => 'Description',
            'section'   => 'ieeesbtkmce-footer-section',
            'settings'  => 'ieeesbtkmce-footer-description',
            'type'      => 'textarea'
        )));

    }

    //Sanitize Functions
    public function sanitize_custom_option($input) {
        return ($input === "No") ? "No" : "Yes";
    }

    public function sanitize_custom_text($input) {
        return filter_var($input, FILTER_SANITIZE_STRING);
    }

    public function sanitize_custom_url($input) {
        return filter_var($input, FILTER_SANITIZE_URL);
    }

    public function sanitize_custom_html_text($input) {
        $allowed_tags = array(
            'a' => array(
                'href' => true,
                'title' => true
            ),
            'br' => array()
        );
    
        return wp_kses($input, $allowed_tags);
    }
    
}
  

?>