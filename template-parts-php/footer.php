<footer class="w-full mt-8 md:mt-16">
  <div class="bg-primary-800">
    <div class="container mx-auto flex w-full flex-col px-4 py-8 text-white">
      <div class="grid grid-cols-5 gap-8 lg:grid-cols-9">
        <div class="col-span-3 mb-6 md:mb-0">
          <a href="<?php echo get_home_url(); ?>" class="flex items-center">
            <svg class="w-40 h-16 text-white">
              <use xlink:href="/icons.svg#icon-logo"></use>
            </svg>
          </a>
          <p class="mt-6 text-justify font-poppins text-base font-light text-white">
            <?php echo get_theme_mod(
                  "ieeesbtkmce-footer-description",
                  ""
                ); ?>
          </p>
          <div class="flex flex-col justify-between lg:flex-row">
            <a href="<?php echo home_url('/terms-and-conditions'); ?>"
              class="mt-3 font-poppins text-base font-normal text-white lg:mt-6">Terms &amp;
              Conditions</a>
            <a href="<?php echo home_url('/privacy-policy'); ?>"
              class="mt-1 font-poppins text-base font-normal text-white lg:mt-6">Privacy
              Policy</a>
          </div>
        </div>
        <div class="col-span-2 flex flex-col lg:justify-between">
          <div>
            <h2 class="mb-2 font-poppins text-base font-normal text-white lg:mb-4">
              Quick links
            </h2>
            <?php wp_nav_menu([
              "menu" => "footer1",
              "theme_location" => "footer1",
              "menu_class" => "font-poppins text-base font-light text-white",
              "container_class" => "left-animated-menu"
            ]); ?>
          </div>

          <div class="mt-6 flex gap-2 lg:mt-0">
            <a href="https://www.facebook.com/<?php echo get_theme_mod(
              "ieeesbtkmce_facebook",
              ""
            ); ?>" target="_blank">
              <svg class="h-5 w-5 fill-gray-200 transition ease-in-out hover:-translate-y-1">
                <use xlink:href="/icons.svg#icon-facebook"></use>
              </svg>
            </a>
            <a href="https://www.instagram.com/<?php echo get_theme_mod(
              "ieeesbtkmce_instagram",
              ""
            ); ?>" target="_blank">
              <svg class="h-5 w-5 fill-gray-200 transition ease-in-out hover:-translate-y-1">
                <use xlink:href="/icons.svg#icon-instagram"></use>
              </svg>
            </a>
            <a href="https://twitter.com/<?php echo get_theme_mod(
              "ieeesbtkmce_twitter",
              ""
            ); ?>" target="_blank">
              <svg class="h-5 w-5 fill-gray-200 transition ease-in-out hover:-translate-y-1">
                <use xlink:href="/icons.svg#icon-twitter"></use>
              </svg>
            </a>
            <a href="https://www.linkedin.com/company/<?php echo get_theme_mod(
              "ieeesbtkmce_linkedin",
              ""
            ); ?>" target="_blank">
              <svg class="h-5 w-5 fill-gray-200 transition ease-in-out hover:-translate-y-1">
                <use xlink:href="/icons.svg#icon-linkedin"></use>
              </svg>
            </a>
            <a href="https://www.instagram.com/<?php echo get_theme_mod(
              "ieeesbtkmce_collabratec",
              ""
            ); ?>" target="_blank">
              <svg class="h-5 w-5 fill-gray-200 transition ease-in-out hover:-translate-y-1">
                <use xlink:href="/icons.svg#icon-collabratec"></use>
              </svg>
            </a>
          </div>
        </div>
        <div class="col-span-5 lg:col-span-4">
          <div class="grid grid-cols-2">
            <div>
              <h2 class="mb-2 font-poppins text-base font-normal text-white lg:mb-4">
                Membership
              </h2>
              <?php wp_nav_menu([
                  "menu" => "footer2",
                  "theme_location" => "footer2",
                  "container_class" => "left-animated-menu",
                  "menu_class" =>
                    "font-poppins text-base font-light text-white",
                ]); ?>
            </div>
            <div>
              <h2 class="mb-2 font-poppins text-base font-normal text-white lg:mb-4">
                Address
              </h2>
              <p class="font-poppins text-base font-light text-white">
                <?php echo get_theme_mod("ieeesbtkmce-address", ""); ?>
              </p>
            </div>
          </div>
          <hr class="mt-8 h-px border-0 bg-primary-700" />
          <div class="">
            <h2 class="mb-2 mt-4 font-poppins text-base font-normal text-white lg:my-4">
              Contact Us
            </h2>
            <div class="grid grid-cols-3">
              <?php dynamic_sidebar("footer-contacts"); ?>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="w-full bg-gray-200 py-3 text-center font-poppins text-xs font-extralight text-gray-600 lg:px-24">
    <span>© All Rights Reserved on <a href="<?php echo get_home_url(); ?>"> <?php echo get_theme_mod(
  "ieeesbtkmce-footer-credt-text",
  get_bloginfo("title")
); ?> </a></span>
    |
    <span>
      Designed by <a class="text-primary-800" href="">sufail.muhammed</a> and Developed by
      <a class="text-primary-800" href="https://elabins.com">e-lab Innovations</a>
    </span>
  </div>
</footer>