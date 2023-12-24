<nav class="bg-white border-gray-200 px-10">
  <div class="max-w-screen-xl flex flex-wrap mt-6 items-center justify-between mx-auto">

    <a href="#" class="flex items-center space-x-3 rtl:space-x-reverse">
      <?php
      if(function_exists('the_custom_logo')) {
        $custom_logo_id = get_theme_mod('custom_logo');
        $logo = wp_get_attachment_image_src($custom_logo_id, 'full');
      }
      ?>
      <img src="<?php echo $logo[0]; ?>" class="h-12" alt="<?php echo get_bloginfo('name'); ?>" />
      <span class="self-center text-2xl font-semibold whitespace-nowrap">
        <?php
          if(!function_exists('the_custom_logo')) {
            echo get_bloginfo('name');
          } 
        ?>
      </span>
    </a>


    <button id="hamburger-menu-button" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200">
      <span class="sr-only">Open main menu</span>
      <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
      </svg>
    </button>

    <?php
      wp_nav_menu(
        array(
          'menu'            => 'primary',
          'theme_location'  => 'primary',
          'container_class' => 'hidden w-full md:block md:w-auto',
          'container_id'    => 'navbar-dropdown',
          'menu_class'      => 'flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white',
          'walker'          => new Header_Menu_Walker(),
        )
      );
    ?>
  </div>
  <hr class="h-px mt-6 bg-gray-200 border-0">
</nav>