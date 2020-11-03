<template>
  <div class="carousel-card">
    <div>
      <img :src="cardImg" />
    </div>
    <div>
      Content
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
    }
  }
};
</script>
