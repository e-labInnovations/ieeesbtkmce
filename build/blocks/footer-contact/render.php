<div class="flex h-full flex-col">
  <h5 class="font-poppins text-base font-[275] text-white">
    <?php echo $attributes['position']; ?>
  </h5>
  <h4 class="mb-4 font-poppins text-base font-light text-white">
    <?php echo $attributes['name']; ?>
  </h4>
  <div class="mt-auto flex items-center gap-2">
    <a href="tel:<?php echo $attributes['phone']; ?>">
      <svg class="h-5 w-6 fill-gray-200 transition ease-in-out hover:-translate-y-1">
        <use xlink:href="/icons.svg#icon-call"></use>
      </svg>
    </a>
    <a href="mailto:<?php echo $attributes['email']; ?>">
      <svg class="h-5 w-6 fill-gray-200 transition ease-in-out hover:-translate-y-1">
        <use xlink:href="/icons.svg#icon-mail"></use>
      </svg>
    </a>
  </div>
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "<?php echo $attributes['name']; ?>",
    "jobTitle": "<?php echo $attributes['position']; ?>",
    "telephone": "<?php echo $attributes['phone']; ?>",
    "email": "<?php echo $attributes['email']; ?>"
  }
  </script>
</div>