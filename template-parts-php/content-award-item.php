<?php
$awardDateTime = get_post_meta( get_the_ID(), 'award_date', true );
$dateTime = new DateTime($awardDateTime);
$awardYear = $dateTime->format('Y');
$currentColor = $args['color'];

?>

<a href="<?php echo get_the_permalink(); ?>" class="flex w-full gap-4">
  <div class="flex aspect-square h-28 w-28 items-center justify-center rounded-3xl bg-white shadow-lg">
    <svg class="h-4/6 w-4/6" style="color: <?php echo $currentColor; ?>">
      <use xlink:href="/icons.svg#icon-award-star"></use>
    </svg>
  </div>
  <div class="flex h-full flex-col py-2">
    <h4 class="font-poppins text-black"><?php echo $awardYear ?></h4>
    <p class="font-poppins font-light text-black">
      <?php echo get_the_title(); ?>
    </p>
    <p class="font-poppins font-extralight leading-none text-black line-clamp-2">
      <?php echo get_the_excerpt(); ?>
    </p>
  </div>
</a>