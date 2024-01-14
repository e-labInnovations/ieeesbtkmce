<?php

if (isset($attributes['eventId']) && !($attributes['eventId'] == 'undefined')) {
    $event = new WP_Query(array(
        'post_type' => 'events',
        'p'         => $attributes['eventId']
    ));

    while($event->have_posts()) {
        $event->the_post();
?>
<div
    class="slide flex flex-col first:pl-0 last:pr-0 sm:px-2"
    style="width: 290.667px"
>
    <a href="<?php the_permalink() ?>">
        <?php if(has_post_thumbnail()) { ?>
            <img src="<?php the_post_thumbnail_url('major-event-thumb'); ?>" alt="<?php the_title(); ?>" class="h-full w-full object-cover" />
        <?php } else { ?>
            <img src="<?php echo get_stylesheet_directory_uri() . '/assets/images/major-event-thumb.png' ?>" alt="" class="h-full w-full object-cover" />
        <?php } ?>
    </a>
    <div
    class="flex h-full w-full items-end justify-between gap-2 px-4 py-2"
    >
    <div class="flex h-full flex-col self-start">
        <h3
        class="mb-2 font-poppins text-base font-normal text-black"
        >
        <?php the_title(); ?>
        </h3>
        <p
        class="line-clamp-2 font-poppins text-base font-light text-gray-500"
        >
            <?php if (has_excerpt()) {
                echo get_the_excerpt();
            } else {
                echo wp_trim_words(get_the_content(), 20);
            } ?>
        </p>
    </div>
    <a
        href="<?php the_permalink() ?>"
        class="mb-3"
    >
        <svg
        class="w-7 rounded border-2 border-primary-800 fill-primary-800 lg:w-10"
        viewBox="0 0 40 40"
        >
        <path
            d="m14.39,27.48c-0.25,0.25 -0.58,0.39 -0.93,0.39c-0.36,0 -0.69,-0.14 -0.94,-0.38c-0.25,-0.25 -0.39,-0.59 -0.39,-0.94c0,-0.35 0.14,-0.69 0.39,-0.94l10.84,-10.83l-7.33,0c-0.35,0 -0.68,-0.14 -0.93,-0.39c-0.25,-0.25 -0.39,-0.58 -0.39,-0.93c0,-0.36 0.14,-0.69 0.39,-0.94c0.25,-0.25 0.58,-0.39 0.93,-0.39l10.52,0c0.35,0 0.69,0.14 0.94,0.39c0.24,0.25 0.38,0.58 0.38,0.94l0,10.51c0,0.35 -0.14,0.69 -0.38,0.94c-0.25,0.24 -0.59,0.38 -0.94,0.38c-0.35,0 -0.69,-0.14 -0.94,-0.38c-0.24,-0.25 -0.38,-0.59 -0.38,-0.94l0,-7.32l-10.84,10.83"
        />
        </svg>
    </a>
    </div>
</div>

<?php
    wp_reset_postdata();
    }
}
// print_r($attributes['eventId']);