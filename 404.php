<?php
get_header(null, array('mode' => 'dark')); ?>

<style>
@-moz-keyframes rocket-movement {
  100% {
    -moz-transform: translate(1200px, -600px);
  }
}

@-webkit-keyframes rocket-movement {
  100% {
    -webkit-transform: translate(1200px, -600px);
  }
}

@keyframes rocket-movement {
  100% {
    transform: translate(1200px, -600px);
  }
}


@-moz-keyframes move-astronaut {
  100% {
    -moz-transform: translate(-160px, -160px);
  }
}

@-webkit-keyframes move-astronaut {
  100% {
    -webkit-transform: translate(-160px, -160px);
  }
}

@keyframes move-astronaut {
  100% {
    -webkit-transform: translate(-160px, -160px);
    transform: translate(-160px, -160px);
  }
}

@-moz-keyframes rotate-astronaut {
  100% {
    -moz-transform: rotate(-720deg);
  }
}

@-webkit-keyframes rotate-astronaut {
  100% {
    -webkit-transform: rotate(-720deg);
  }
}

@keyframes rotate-astronaut {
  100% {
    -webkit-transform: rotate(-720deg);
    transform: rotate(-720deg);
  }
}

@-moz-keyframes glow-star {
  40% {
    -moz-opacity: 0.3;
  }

  90%,
  100% {
    -moz-opacity: 1;
    -moz-transform: scale(1.2);
  }
}

@-webkit-keyframes glow-star {
  40% {
    -webkit-opacity: 0.3;
  }

  90%,
  100% {
    -webkit-opacity: 1;
    -webkit-transform: scale(1.2);
  }
}

@keyframes glow-star {
  40% {
    -webkit-opacity: 0.3;
    opacity: 0.3;
  }

  90%,
  100% {
    -webkit-opacity: 1;
    opacity: 1;
    -webkit-transform: scale(1.2);
    transform: scale(1.2);
    border-radius: 999999px;
  }
}

.bg-purple {
  background: url(<?php echo IEEESBTKMCE_THEME_URL . '/assets/images/bg-404.png' ?>);
  background-repeat: repeat-x;
  background-size: cover;
  background-position: left top;
  overflow: hidden;
}

.objects img {
  z-index: 15;
  pointer-events: none;
}

.object_rocket {
  z-index: 20;
  position: absolute;
  transform: translateX(-50px);
  top: 75%;
  pointer-events: none;
  animation: rocket-movement 200s linear infinite both running;
}

.object_moon {
  position: absolute;
  top: 12%;
  left: 25%;
}


.object_astronaut {
  animation: rotate-astronaut 200s infinite linear both alternate;
}

.image-404 {
  position: relative;
  z-index: 25;
  pointer-events: none;
}

.glowing_stars .star {
  position: absolute;
  border-radius: 100%;
  background-color: #fff;
  width: 3px;
  height: 3px;
  opacity: 0.3;
  will-change: opacity;
}

.glowing_stars .star:nth-child(1) {
  top: 80%;
  left: 25%;
  animation: glow-star 2s infinite ease-in-out alternate 1s;
}

.glowing_stars .star:nth-child(2) {
  top: 20%;
  left: 40%;
  animation: glow-star 2s infinite ease-in-out alternate 3s;
}

.glowing_stars .star:nth-child(3) {
  top: 25%;
  left: 25%;
  animation: glow-star 2s infinite ease-in-out alternate 5s;
}

.glowing_stars .star:nth-child(4) {
  top: 75%;
  left: 80%;
  animation: glow-star 2s infinite ease-in-out alternate 7s;
}

.glowing_stars .star:nth-child(5) {
  top: 90%;
  left: 50%;
  animation: glow-star 2s infinite ease-in-out alternate 9s;
}

footer {
  margin-top: 0px !important;
}
</style>

<main class="bg-purple h-screen w-full">

  <div class="bg-repeat bg-contain bg-left-top w-full h-full flex flex-col pt-16"
    style="background: url(<?php echo IEEESBTKMCE_THEME_URL . '/assets/images/overlay_stars.svg' ?>);">
    <div class="flex flex-col w-full gap-6 items-center my-auto">
      <img class="image-404" src="<?php echo IEEESBTKMCE_THEME_URL . '/assets/images/404.svg' ?>" width="300px">
      <a href="<?php echo get_home_url(); ?>"
        class="my-8 px-8 py-1 transition ease-in-out outline outline-1 text-white outline-white hover:bg-black/50">HOME</a>
    </div>

    <div class="objects">
      <img class="object_rocket" src="<?php echo IEEESBTKMCE_THEME_URL . '/assets/images/rocket.svg' ?>" width="40px">
      <div class="earth-moon">
        <img class="object_moon" src="<?php echo IEEESBTKMCE_THEME_URL . '/assets/images/moon.svg' ?>" width="80px">
      </div>
      <div class="md:top-2/3 z-30 absolute top-3/4 right-1/4 will-change-transform"
        style="animation: move-astronaut 50s infinite linear both alternate;">
        <img class="object_astronaut" src="<?php echo IEEESBTKMCE_THEME_URL . '/assets/images/astronaut.svg' ?>"
          width="140px">
      </div>
    </div>
    <div class="glowing_stars">
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>

    </div>

  </div>
</main>
<script>
</script>

<?php get_footer(); ?>