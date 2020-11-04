<template>
  <div class="container">
    <div class="carousel">
      <span class="arrow prev">
        prev
      </span>

      <div class="carousel-wrapper">
        <div
          class="cards"
          id="parent"
          v-for="(item, i) in colection"
          :key="i"
          @click="emitValue(item)"
        >
          <img
            class="w-full h-full object-cover"
            :src="`${item.download_url}`"
            alt=""
          />
          <div class="hover-text">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Dignissimos quod dolorum rem fuga facere repudiandae voluptas.
            </p>
          </div>
        </div>
      </div>

      <span class="arrow next">
        next
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "CarouselWrapper",
  data: () => ({
    showModal: false,
    api: "https://picsum.photos/v2/list",
    colection: [],
    selectedImg: ""
  }),
  mounted() {
    this.controlSlider();
    this.getLibrary();
  },
  methods: {
    getLibrary() {
      fetch(this.api)
        .then(response => {
          if (response.status === 200) return response.json();
        })
        .then(data => {
          this.colection = data;
          console.log(this.colection);
        })
        .catch(error => {
          console.log(error);
        });
    },
    controlSlider() {
      const slider = document.querySelector(".carousel-wrapper");
      const prev = document.querySelector(".prev");
      const next = document.querySelector(".next");
      var direction;

      prev.addEventListener("click", function() {
        if (direction === -1) {
          slider.appendChild(slider.firstElementChild);
          direction = 1;
        }
        console.log("click");
        slider.style.transform = `"translate(${slider.style.width}px)"`;
      });

      next.addEventListener("click", function() {
        direction = -1;
        console.log("click");
        slider.style.transform = `"translate(-${slider.style.width}px)"`;
      });

      slider.addEventListener("transitionend", function() {
        if (direction === -1) {
          slider.appendChild(slider.firstElementChild);
        } else if (direction === 1) {
          slider.prepend(slider.lastElementChild);
        }
        console.log("Estoy loco");

        slider.style.transition = "none";
        slider.style.transform = "translate(0)";
        setTimeout(function() {
          slider.style.transition = "all 0.5s";
        });
      });
    },
    emitValue(url) {
      this.selectedImg = url;
      this.$emit("deploy", this.selectedImg);
    }
  }
};
</script>

<style></style>
