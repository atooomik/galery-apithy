<template>
  <div
    class="fixed top-0 right-0 bottom-0 left-0 max-w-6xl w-full h-full mx-auto bg-ui-contrast"
  >
    <div
      class="relative max-w-3xl h-4/5 mt-20 mb-10 mx-4 md:mx-auto rounded-lg overflow-hidden"
    >
      <div
        class="absolute top-0 right-0 z-10 flex justify-center py-2 px-4 bg-ui-brand"
      >
        <button class="text-ui-textContrast" @click="closeDetail">
          <fa-icon class="text-2xl" :icon="['fas', 'times-circle']" />
        </button>
      </div>
      <img
        class="absolute h-full w-full object-cover"
        :src="`https://picsum.photos/id/${selection.id}/500/500.webp`"
        alt="Detalle expandida"
      />
      <div class="absolute bottom-0 w-full bg-ui-brand">
        <p
          class="my-2 text-center text-ui-textContrast"
          v-text="selection.author"
        ></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ModalDetail",
  props: {
    selection: {
      type: Object,
      // eslint-disable-next-line vue/require-valid-default-prop
      default: {},
    },
  },
  methods: {
    closeDetail() {
      this.$emit("closeDetail");
    },
  },
};
</script>
