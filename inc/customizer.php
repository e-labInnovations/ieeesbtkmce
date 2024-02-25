<?php

//Add custom sections and settings to the Admin Customizer
class IEEESBTKMCE_Customizer {
  public function __construct() {
    add_action("customize_register", [$this, "register_customize_sections"]);
  }

  public function register_customize_sections($wp_customize) {
    //Init section
    $this->social_details_section($wp_customize);
    $this->footer_section($wp_customize);
  }

  //Social Details Sections, Settings and Controls
  private function social_details_section($wp_customize) {
    //New Section Panel
    $wp_customize->add_section("ieeesbtkmce_social_details_section", [
      "title" => "Social Details",
      "priority" => 160,
      "description" => __("Add social accounts usernames", "ieeesbtkmce"),
    ]);

    //Facebook
    $wp_customize->add_setting("ieeesbtkmce_facebook", [
      "default" => "",
      "sanitize_callback" => [$this, "sanitize_custom_text"],
    ]);

    $wp_customize->add_control(
      new WP_Customize_Control($wp_customize, "ieeesbtkmce_facebook_control", [
        "label" => "Facebook Username",
        "section" => "ieeesbtkmce_social_details_section",
        "settings" => "ieeesbtkmce_facebook",
        "type" => "text",
      ])
    );

    //Twitter
    $wp_customize->add_setting("ieeesbtkmce_twitter", [
      "default" => "",
      "sanitize_callback" => [$this, "sanitize_custom_text"],
    ]);

    $wp_customize->add_control(
      new WP_Customize_Control($wp_customize, "ieeesbtkmce_twitter_control", [
        "label" => "Twitter Username",
        "section" => "ieeesbtkmce_social_details_section",
        "settings" => "ieeesbtkmce_twitter",
        "type" => "text",
      ])
    );

    //Instagram
    $wp_customize->add_setting("ieeesbtkmce_instagram", [
      "default" => "",
      "sanitize_callback" => [$this, "sanitize_custom_text"],
    ]);

    $wp_customize->add_control(
      new WP_Customize_Control($wp_customize, "ieeesbtkmce_instagram_control", [
        "label" => "Instagram Username",
        "section" => "ieeesbtkmce_social_details_section",
        "settings" => "ieeesbtkmce_instagram",
        "type" => "text",
      ])
    );

    //LinkedIn
    $wp_customize->add_setting("ieeesbtkmce_linkedin", [
      "default" => "",
      "sanitize_callback" => [$this, "sanitize_custom_text"],
    ]);

    $wp_customize->add_control(
      new WP_Customize_Control($wp_customize, "ieeesbtkmce_linkedin_control", [
        "label" => "linkedIn Username",
        "section" => "ieeesbtkmce_social_details_section",
        "settings" => "ieeesbtkmce_linkedin",
        "type" => "text",
      ])
    );

    //Youtube
    $wp_customize->add_setting("ieeesbtkmce_youtube", [
      "default" => "",
      "sanitize_callback" => [$this, "sanitize_custom_text"],
    ]);

    $wp_customize->add_control(
      new WP_Customize_Control($wp_customize, "ieeesbtkmce_youtube_control", [
        "label" => "YouTube Username",
        "section" => "ieeesbtkmce_social_details_section",
        "settings" => "ieeesbtkmce_youtube",
        "type" => "text",
      ])
    );

    //IEEE Collabratec
    $wp_customize->add_setting("ieeesbtkmce_collabratec", [
      "default" => "",
      "sanitize_callback" => [$this, "sanitize_custom_text"],
    ]);

    $wp_customize->add_control(
      new WP_Customize_Control(
        $wp_customize,
        "ieeesbtkmce_collabratec_control",
        [
          "label" => "IEEE Collabratec Username",
          "section" => "ieeesbtkmce_social_details_section",
          "settings" => "ieeesbtkmce_collabratec",
          "type" => "text",
        ]
      )
    );
  }

  //Footer Sections, Settings and Controls
  private function footer_section($wp_customize) {
    //New Section Panel
    $wp_customize->add_section("ieeesbtkmce-footer-section", [
      "title" => "Footer",
      "priority" => 160,
      "description" => __("The Footer section.", "ieeesbtkmce"),
    ]);

    //Credit Text
    $wp_customize->add_setting("ieeesbtkmce-footer-credt-text", [
      "default" => get_bloginfo("title"),
      "sanitize_callback" => [$this, "sanitize_custom_text"],
    ]);

    $wp_customize->add_control(
      new WP_Customize_Control(
        $wp_customize,
        "ieeesbtkmce-footer-credt-text-control",
        [
          "label" => "Credit Text",
          "section" => "ieeesbtkmce-footer-section",
          "settings" => "ieeesbtkmce-footer-credt-text",
          "type" => "text",
        ]
      )
    );

    //Address
    $wp_customize->add_setting("ieeesbtkmce-address", [
      "default" => "",
      "sanitize_callback" => [$this, "sanitize_custom_html_text"],
    ]);

    $wp_customize->add_control(
      new WP_Customize_Control($wp_customize, "ieeesbtkmce-address-control", [
        "label" => "Address",
        "section" => "ieeesbtkmce-footer-section",
        "settings" => "ieeesbtkmce-address",
        "type" => "textarea",
      ])
    );

    /*
    //Logo
    $wp_customize->add_setting("ieeesbtkmce-footer-logo", [
      "default" => "",
      "type" => "theme_mod",
      "capabilty" => "edit_theme_options",
      "sanitize_callback" => [$this, "sanitize_custom_url"],
    ]);

    $wp_customize->add_control(
      new WP_Customize_Image_Control(
        $wp_customize,
        "ieeesbtkmce-footer-logo-control",
        [
          "label" => "Footer Logo",
          "section" => "ieeesbtkmce-footer-section",
          "settings" => "ieeesbtkmce-footer-logo",
          // 'width' => 380,
          // 'height' => 150
        ]
      )
    );
    */

    //Description
    $wp_customize->add_setting("ieeesbtkmce-footer-description", [
      "default" => "",
      "sanitize_callback" => [$this, "sanitize_custom_html_text"],
    ]);

    $wp_customize->add_control(
      new WP_Customize_Control(
        $wp_customize,
        "ieeesbtkmce-footer-description-control",
        [
          "label" => "Description",
          "section" => "ieeesbtkmce-footer-section",
          "settings" => "ieeesbtkmce-footer-description",
          "type" => "textarea",
        ]
      )
    );
  }

  //Sanitize Functions
  public function sanitize_custom_option($input) {
    return $input === "No" ? "No" : "Yes";
  }

  public function sanitize_custom_text($input) {
    return filter_var($input, FILTER_SANITIZE_STRING);
  }

  public function sanitize_custom_url($input) {
    return filter_var($input, FILTER_SANITIZE_URL);
  }

  public function sanitize_custom_html_text($input) {
    $allowed_tags = [
      "a" => [
        "href" => true,
        "title" => true,
      ],
      "br" => [],
    ];

    return wp_kses($input, $allowed_tags);
  }
}

?>