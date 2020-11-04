<template>
  <footer class="w-full p-4 bg-ui-contrast">
    <div class="flex flex-col justify-center items-center">
      <img
        class="w-10 h-10 mx-4"
        src="~/assets/images/gallery.svg"
        alt="Logo de marca"
      />
      <p class="my-2 text-ui-textContrast">2020 | Pic'Story.</p>
    </div>

    <div
      class="flex flex-col items-center md:flex-row md:flex-wrap md:justify-center"
    >
      <div class="flex my-2 text-center text-ui-textContrast text md:mx-4">
        <fa-icon class="mx-2 text-xl" :icon="['fas', 'map-marked-alt']" />
        <p>Casa 4, Pueblo Paleta, Kanto</p>
      </div>
      <div class="flex my-2 text-center text-ui-textContrast md:mx-4">
        <fa-icon class="mx-2 text-xl" :icon="['fas', 'phone-square-alt']" />
        <p>55 87355234</p>
      </div>
      <div class="flex my-2 text-center text-ui-textContrast md:mx-4">
        <fa-icon class="mx-2 text-xl" :icon="['fas', 'envelope']" />
        <p>hola@picstory.io</p>
      </div>
      <div class="flex my-2 text-center text-ui-textContrast md:mx-4">
        <fa-icon class="mx-2 text-xl" :icon="['fab', 'facebook-square']" />
        <p>Picstory Crew</p>
      </div>
      <div class="flex my-2 text-center text-ui-textContrast md:mx-4">
        <fa-icon class="mx-2 text-xl" :icon="['fab', 'discord']" />
        <p>@picstorycrew</p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "TheFooter"
};
</script>
