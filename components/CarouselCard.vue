<template>
  <div class="carousel-card" id="parent">
    <img
      class="absolute w-full h-full object-cover"
      src="../assets/images/road.jpg"
    />
    <div class="hover-text">
      <p v-text="title"></p>
      <p v-text="content"></p>
    </div>
  </div>
</template>

<script>
export default {
  name: "CarouselCard",
  props: {
    cardImg: {
      type: String,
      default: ""
    },
    title: {
      type: String,
      default: ""
    },
    content: {
      type: String,
      default: ""
    }
  }
};
</script>
