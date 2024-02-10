<?php

global $wp;
$title = wp_title( '|', false, 'right' ) . get_bloginfo('name');
$description = get_bloginfo('name') . " - " . get_bloginfo('description');
$keywords = '';
$image = get_site_icon_url();
$url = home_url($wp->request);
$tags = false;

if (is_singular()) {
  $title = get_the_title();
  $description = has_excerpt()?get_the_excerpt():wp_trim_words(get_the_content(), 10);
  $tags = get_the_tags();
  if(has_post_thumbnail()) {
    $image = get_the_post_thumbnail_url(get_the_ID());
  }
  $url = get_permalink(); 
}

if($tags) {
  foreach( $tags as $tag ) {
    $keywords = $keywords . $tag->name . ', '; 
  }
}

?>

<!DOCTYPE html>
<html <?php language_attributes(); ?>>

<head>
    <meta charset="<?php bloginfo('charset') ?>" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />

    <meta name="title" content="<?php echo $title ?>">
    <meta name="description" content="<?php echo $description ?>" />
    <meta name="keywords" content="<?php print_r($keywords) ?>" />


    <!-- Social: Twitter -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="<?php echo $title ?>" />
    <meta name="twitter:description" content="<?php echo $description ?>" />
    <meta property="twitter:image:src" content="<?php echo $image ?>" />
    <meta name="twitter:site" content="@<?php echo get_theme_mod("ieeesbtkmce_twitter", ""); ?>" />

    <!-- Social: Facebook / Open Graph -->
    <meta property="og:url" content="<?php echo $url ?>" />
    <meta property="og:title" content="<?php echo $title ?>" />
    <meta property="og:image" content="<?php echo $image ?>" />
    <meta property="og:description" content="<?php echo $description ?>" />
    <meta property="og:site_name" content="<?php echo get_bloginfo('name') ?>" />

    <!-- wp_head : start -->
    <?php wp_head(); ?>
    <!-- wp_head : end -->
</head>