<nav class="top-0 z-50 border-gray-200 bg-white px-10">
  <div
    class="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between pt-6"
  >
    <a href="<?php echo get_home_url(); ?>" class="flex items-center space-x-3 rtl:space-x-reverse">
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

    <button
      id="hamburger-menu-button"
      type="button"
      class="inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 md:hidden"
    >
      <span class="sr-only">Open main menu</span>
      <svg
        class="h-5 w-5"
        aria-hidden="true"
        fill="none"
        viewBox="0 0 17 14"
      >
        <path
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M1 1h15M1 7h15M1 13h15"
        ></path>
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
  <hr class="mt-6 h-px border-0 bg-gray-200" />
</nav>