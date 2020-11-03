<template>
  <footer class="w-full p-4 bg-gray-300">
    <div class="flex flex-col justify-center items-center">
      <img
        class="w-10 h-10 mx-4"
        src="~/assets/images/gallery.svg"
        alt="Logo de marca"
      />
      <p class="my-2">2020 | Pic'Story.</p>
    </div>
    <p class="my-4 text-center">Contácto</p>

    <div class="flex flex-col items-center lg:flex-row lg:justify-center">
      <div class="flex my-2 text-center lg:mx-4">
        <fa-icon class="mx-2 text-xl text-azul" :icon="['fas', 'envelope']" />
        <p>hola@picstory.io</p>
      </div>
      <div class="flex my-2 text-center lg:mx-4">
        <fa-icon class="mx-2 text-xl" :icon="['fas', 'map-marked-alt']" />
        <p>Avenida 234, Amitiville</p>
      </div>
      <div class="flex my-2 text-center lg:mx-4">
        <fa-icon class="mx-2 text-xl" :icon="['fab', 'facebook-square']" />
        <p>Picstory Crew</p>
      </div>
      <div class="flex my-2 text-center lg:mx-4">
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
