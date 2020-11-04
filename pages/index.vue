<template>
  <div>
    <div class="p-4 text-center text-gray-700">
      <p class="mb-4 text-2xl">
        Bienvenido a <span class="text-ui-brand font-semibold">Pic'Story</span>
      </p>
      <p class="mb-4 text-lg">
        Aqui no solo vas a poder encontrar la mejor biblioteca de fotografías
        profesionales, además podras conocer la ubicación e historia del lugar
        para que lo anotes como parada en tu siguiente viaje.
      </p>
    </div>

    <carousel-wrapper />
    <div class="p-4 text-center text-gray-700">
      <p class="mb-6">
        ¿Deseas que tus fotos sean incluidas en Pic'Story? Visita:
      </p>
      <nuxt-link to="/contribuciones">
        <fa-icon
          class="mx-4 text-3xl text-ui-brand"
          :icon="['fas', 'folder-plus']"
        />
        <p>Contribuciones</p></nuxt-link
      >
    </div>
  </div>
</template>

<script>
import CarouselWrapper from "~/components/CarouselWrapper.vue";
export default {
  name: "Home",
  components: {
    CarouselWrapper
  }
};
</script>
