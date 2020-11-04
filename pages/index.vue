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

    <carousel-wrapper @deploy="openModal" />
    <div v-if="hasSelection">
      <modal-detail
        :selection="selectedPhoto"
        @closeDetail="hasSelection = false"
      />
    </div>

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
import ModalDetail from "~/components/ModalDetail.vue";
export default {
  name: "Home",
  data: () => ({
    hasSelection: false,
    selectedPhoto: {}
  }),
  components: {
    CarouselWrapper,
    ModalDetail
  },
  methods: {
    /*
      Con esta función recibo el objeto que fue mandado desde la card en CarouselWrapper y lo guardo  en una propiedad que es un objeto originalmente vacio, de esta forma pongo disponible el objeto para los props de la modal, quien al recibirlo puede consumirlo e iterar dentro de el.
      */
    openModal(selectedImg) {
      this.hasSelection = true;
      this.selectedPhoto = selectedImg;
    }
  }
};
</script>
