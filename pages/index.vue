<template>
  <div class="container">
    <div class="carousel bg-orange-400">
      <div class="carousel-wrapper">
        <section class="cards" id="parent">
          <img :src="`/images/cards/arbol.jpg`" alt="" />
          <div class="hover-text">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Dignissimos quod dolorum rem fuga facere repudiandae voluptas.
            </p>
          </div>
        </section>
        <section class="cards" id="parent">
          <img :src="`/images/cards/lago.jpg`" alt="" />
          <div class="hover-text">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Dignissimos quod dolorum rem fuga facere repudiandae voluptas.
            </p>
          </div>
        </section>
        <section class="cards" id="parent">
          <img :src="`/images/cards/muelle.jpg`" alt="" />
          <div class="hover-text">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Dignissimos quod dolorum rem fuga facere repudiandae voluptas.
            </p>
          </div>
        </section>
        <section class="cards" id="parent">
          <img :src="`/images/cards/piedras.jpg`" alt="" />
          <div class="hover-text">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Dignissimos quod dolorum rem fuga facere repudiandae voluptas.
            </p>
          </div>
        </section>
        <section class="cards" id="parent">
          <img :src="`/images/cards/road.jpg`" alt="" />
          <div class="hover-text">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Dignissimos quod dolorum rem fuga facere repudiandae voluptas.
            </p>
          </div>
        </section>
      </div>
      <div class="controls absolute">
        <span class="arrow prev">
          prev
        </span>
        <span class="arrow next">
          next
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import CarouselCard from "~/components/CarouselCard.vue";
export default {
  name: "ProductsCarousel",
  data: () => ({}),
  components: {
    CarouselCard
  },
  methods: {
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
        slider.style.transform = `"translate(${slider.style.width}px)"`;
      });

      next.addEventListener("click", function() {
        direction = -1;
        slider.style.transform = `"translate(-${slider.style.width}px)"`;
      });

      slider.addEventListener("transitionend", function() {
        if (direction === -1) {
          slider.appendChild(slider.firstElementChild);
        } else if (direction === 1) {
          slider.prepend(slider.lastElementChild);
        }

        slider.style.transition = "none";
        slider.style.transform = "translate(0)";
        setTimeout(function() {
          slider.style.transition = "all 0.5s";
        });
      });
    }
  },
  mounted() {
    this.controlSlider();
  }
};
</script>
