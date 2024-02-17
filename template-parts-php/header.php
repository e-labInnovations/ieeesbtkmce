<nav class="dark">
    <div class="main-wrapper">
        <a href="<?php echo get_home_url(); ?>" class="flex items-center space-x-3 rtl:space-x-reverse">
            <svg class="logo">
                <use xlink:href="/icons.svg#icon-logo"></use>
            </svg>

            <span class="self-center whitespace-nowrap text-2xl font-semibold">
            </span>
        </a>

        <button id="hamburger-menu-button" type="button"
            class="inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm text-gray-500 md:hidden">
            <span class="sr-only">Open main menu</span>
            <svg id="icon-open" class="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                viewBox="0 0 17 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M1 1h15M1 7h15M1 13h15"></path>
            </svg>
            <svg id="icon-close" xmlns="http://www.w3.org/2000/svg" class="hidden h-5 w-5 fill-gray-500"
                viewBox="0 0 16 16">
                <path
                    d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
            </svg>
        </button>

        <?php wp_nav_menu([
          "menu" => "primary",
          "theme_location" => "primary",
          "container_class" => "hidden w-full md:block md:w-auto",
          "container_id" => "navbar-dropdown",
          "walker" => new Header_Menu_Walker(),
        ]); ?>
    </div>
</nav>