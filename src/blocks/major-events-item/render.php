<?php

$event = new WP_Query(array(
    'post_type' => 'events',
    'p'         => $attributes['eventId']
));

while($event->have_posts()) {
    $event->the_post();
?>

<div class="flex flex-col slide mx-3">
    <?php if(has_post_thumbnail()) { ?>
        <img src="<?php the_post_thumbnail_url('major-event-thumb'); ?>" alt="<?php the_title(); ?>" class="h-full w-full object-cover" />
    <?php } else { ?>
        <img src="https://picsum.photos/330/230" alt="" class="h-full w-full object-cover" />
    <?php } ?>
    <div class="flex w-full justify-between px-4 py-2 gap-2 items-end h-full">
        <div class="flex flex-col self-start h-full">
            <h3 class="text-black font-poppins text-base font-normal mb-2">
                <?php the_title(); ?>
            </h3>
            <p class="text-gray-500 font-poppins text-base font-light line-clamp-2">
                <?php if (has_excerpt()) {
                    echo get_the_excerpt();
                } else {
                    echo wp_trim_words(get_the_content(), 10);
                } ?>
            </p>
        </div>
        <a href="<?php the_permalink() ?>" class="mb-3">
            <svg class="fill-primary-800 w-7 lg:w-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 44 43"
                fill="none">
                <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M40.6175 5.54601C40.6175 4.84437 40.3388 4.17146 39.8426 3.67532C39.3465 3.17918 38.6736 2.90045 37.9719 2.90045H6.22515C5.5235 2.90045 4.85059 3.17918 4.35445 3.67532C3.85831 4.17146 3.57959 4.84437 3.57959 5.54601V37.2928C3.57959 37.9944 3.85831 38.6674 4.35445 39.1635C4.85059 39.6596 5.5235 39.9384 6.22515 39.9384H37.9719C38.6736 39.9384 39.3465 39.6596 39.8426 39.1635C40.3388 38.6674 40.6175 37.9944 40.6175 37.2928V5.54601ZM0.934021 5.54601C0.934021 4.14272 1.49148 2.7969 2.48376 1.80462C3.47604 0.81234 4.82186 0.254883 6.22515 0.254883L37.9719 0.254883C39.3752 0.254883 40.7211 0.81234 41.7133 1.80462C42.7056 2.7969 43.2631 4.14272 43.2631 5.54601V37.2928C43.2631 38.6961 42.7056 40.0419 41.7133 41.0342C40.7211 42.0265 39.3752 42.5839 37.9719 42.5839H6.22515C4.82186 42.5839 3.47604 42.0265 2.48376 41.0342C1.49148 40.0419 0.934021 38.6961 0.934021 37.2928V5.54601ZM16.4212 28.8349C16.1731 29.0833 15.8366 29.223 15.4856 29.2232C15.1345 29.2235 14.7978 29.0843 14.5494 28.8363C14.301 28.5882 14.1614 28.2517 14.1611 27.9007C14.1609 27.5496 14.3001 27.2129 14.5481 26.9645L25.387 16.1283H18.0641C17.7132 16.1283 17.3768 15.9889 17.1287 15.7408C16.8806 15.4928 16.7413 15.1563 16.7413 14.8055C16.7413 14.4547 16.8806 14.1182 17.1287 13.8701C17.3768 13.6221 17.7132 13.4827 18.0641 13.4827H28.5802C28.931 13.4827 29.2675 13.6221 29.5155 13.8701C29.7636 14.1182 29.903 14.4547 29.903 14.8055V25.3216C29.903 25.6724 29.7636 26.0089 29.5155 26.257C29.2675 26.505 28.931 26.6444 28.5802 26.6444C28.2294 26.6444 27.8929 26.505 27.6448 26.257C27.3968 26.0089 27.2574 25.6724 27.2574 25.3216V17.9987L16.4212 28.8349Z" />
            </svg>
        </a>
    </div>
</div>

<?php
wp_reset_postdata();
}
// print_r($attributes['eventId']);