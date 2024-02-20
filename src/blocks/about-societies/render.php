<section class="societies-slider">
  <div class="my-8 flex flex-col gap-6 md:my-16">
    <div class="flex w-full items-center justify-between py-2">
      <h2 class="font-poppins text-3xl text-primary-800">Societies</h2>
      <div class="flex gap-2">
        <div class="cursor-pointer rounded-full border border-gray-400 bg-white p-3" id="sl-prev">
          <svg class="h-3 w-3 text-gray-400 sm:h-4 sm:w-4" xmlns="http://www.w3.org/2000/svg">
            <use xlink:href="/icons.svg#icon-arrow-left"></use>
          </svg>
        </div>
        <div class="cursor-pointer rounded-full border border-primary-800 bg-white p-3" id="sl-next">
          <svg class="h-3 w-3 text-primary-800 sm:h-4 sm:w-4" xmlns="http://www.w3.org/2000/svg">
            <use xlink:href="/icons.svg#icon-arrow-right"></use>
          </svg>
        </div>
      </div>
    </div>

    <div id="sl-slider-container" class="w-full overflow-hidden">
      <div id="sl-slider" class="flex w-full">
        <?php
// The Query
$args = array(
    'post_type' => 'societies',
    'post_status' => 'publish',
    'posts_per_page' => -1,
);
$the_query = new WP_Query( $args );

// The Loop
if ( $the_query->have_posts() ) {
  while ( $the_query->have_posts() ) {
    $the_query->the_post();


    $societyLogoId = get_post_meta( get_the_ID(), 'society_logo', true );
    $image_url = "";
    if ($societyLogoId) {
      $image_src = wp_get_attachment_image_src( $societyLogoId, 'full' );
      $image_url = $image_src[0]; // this is the image URL
    }
  ?>
        <div class="slide flex w-1/3 flex-col sm:px-4">
          <div class="flex h-full w-full flex-col gap-6 overflow-hidden border border-primary-700 p-6">
            <img src="<?php echo $image_url; ?>" class="h-16 w-fit" alt="<?php echo get_the_title(); ?>" />

            <p class="mb-6 font-poppins text-base font-light text-black">
              <?php
              if ( has_excerpt() ) {
                echo get_the_excerpt();
            } else {
                $content = wp_strip_all_tags(get_the_content());
                $words = str_word_count( $content );
                if ( $words > 60 ) {
                    $content = substr( $content, 0, strpos( $content, ' ', 60 ) );
                    $content = rtrim( $content ) . '...';
                }
                echo $content;
            }
              ?>
            </p>

            <div class="mt-auto flex gap-8">
              <a href="<?php echo get_permalink(); ?>"
                class="w-8/12 rounded p-2 px-5 text-center text-primary-800 no-underline outline outline-1 outline-primary-800 transition-shadow hover:shadow-md hover:shadow-gray-400">Learn
                More</a>
              <div class="relative h-full w-4/12">
                <span class="absolute h-full w-52 rounded-full bg-primary-800"></span>
              </div>
            </div>
          </div>
        </div>
        <?php
  }
} else {
  // no posts found
}
/* Restore original Post Data */
wp_reset_postdata();
?>

      </div>
    </div>
  </div>
</section>