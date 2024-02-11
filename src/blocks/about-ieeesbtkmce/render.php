<section>
    <div class="my-8 flex flex-col gap-6 sm:flex-row md:my-16">
        <div class="flex w-full flex-col gap-6 sm:w-1/2">
            <h2 class="font-poppins text-3xl text-primary-800 sm:hidden">
                About IEEE SB TKMCE
            </h2>
            <img src="<?php echo ( $attributes['image'] && $attributes['image']['url']) ? $attributes['image']['url'] : ( IEEESBTKMCE_THEME_URL . '/assets/images/about-1.jpg') ?>"
                class="w-full rounded-xl" alt="TKM College of Engineering" />
        </div>
        <div class="flex w-full flex-col gap-6 sm:w-1/2">
            <h2 class="hidden font-poppins text-3xl text-primary-800 sm:block">
                About IEEE SB TKMCE
            </h2>

            <p class="font-poppins text-base font-light text-black">
                <?php echo $attributes['content']? $attributes['content'] : '' ?>
            </p>

            <div class="flex gap-2 text-primary-800">
                <a href="https://www.facebook.com/<?php echo get_theme_mod(
              "ieeesbtkmce_facebook",
              ""
            ); ?>" target="_blank">
                    <svg class="h-8 w-8 fill-gray-200 transition ease-in-out hover:-translate-y-1">
                        <use xlink:href="/icons.svg#icon-facebook"></use>
                    </svg>
                </a>
                <a href="https://www.instagram.com/<?php echo get_theme_mod(
              "ieeesbtkmce_instagram",
              ""
            ); ?>" target="_blank"><svg class="h-8 w-8 fill-gray-200 transition ease-in-out hover:-translate-y-1">
                        <use xlink:href="/icons.svg#icon-instagram"></use>
                    </svg>
                </a>
                <a href="https://twitter.com/<?php echo get_theme_mod(
              "ieeesbtkmce_twitter",
              ""
            ); ?>" target="_blank"><svg class="h-8 w-8 fill-gray-200 transition ease-in-out hover:-translate-y-1">
                        <use xlink:href="/icons.svg#icon-twitter"></use>
                    </svg>
                </a>
                <a href="https://www.linkedin.com/in/<?php echo get_theme_mod(
              "ieeesbtkmce_linkedin",
              ""
            ); ?>" target="_blank"><svg class="h-8 w-8 fill-gray-200 transition ease-in-out hover:-translate-y-1">
                        <use xlink:href="/icons.svg#icon-linkedin"></use>
                    </svg>
                </a>
                <a href="https://www.instagram.com/<?php echo get_theme_mod(
              "ieeesbtkmce_collabratec",
              ""
            ); ?>" target="_blank">
                    <svg class="h-8 w-8 fill-gray-200 transition ease-in-out hover:-translate-y-1">
                        <use xlink:href="/icons.svg#icon-collabratec"></use>
                    </svg>
                </a>
            </div>
        </div>
    </div>
</section>