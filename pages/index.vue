<template>
  <div>
    <div class="intro p-4 text-center text-gray-700">
      <p class="mb-4 text-2xl">Bienvenido a Pic'Story</p>
      <p class="mb-4 text-lg">
        Aqui no solo vas a poder encontrar la mejor biblioteca de fotografías
        profesionales, además podras conocer la ubicación e historia del lugar
        para que lo anotes como parada en tu siguiente viaje.
      </p>
    </div>

    <carousel-wrapper />
    <div class="text-white">
      <p>Deseas que tus fotos sean incluidas en Pic'Story, escribenos</p>
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
