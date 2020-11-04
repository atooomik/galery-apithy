<template>
  <div class="max-w-6xl mx-auto">
    <the-header />
    <Nuxt class="pt-16" />
    <the-footer />
  </div>
</template>

<script>
import TheHeader from "~/components/TheHeader.vue";
import TheFooter from "~/components/TheFooter.vue";
export default {
  components: {
    TheHeader,
    TheFooter,
  },
};
</script>
