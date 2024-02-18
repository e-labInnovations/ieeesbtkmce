<?php

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
      "before_widget" => '',
      "after_widget" => '',
    ]);
  }
  add_action("widgets_init", "ieeestkmce_sidebars");