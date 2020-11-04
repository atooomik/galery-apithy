<template>
  <div class="container">
    <div class="carousel">
      <span class="arrow prev">
        <fa-icon
          class="text-3xl text-ui-brand"
          :icon="['fas', 'caret-square-left']"
        />
      </span>

      <div class="carousel-wrapper">
        <div
          v-for="(item, i) in colection"
          id="parent"
          :key="i"
          class="cards"
          @click="emitValue(item)"
        >
          <img
            class="w-full h-full object-cover"
            :src="`https://picsum.photos/id/${item.id}/300/300.webp`"
            alt="Fotografia miniatura"
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
        <fa-icon
          class="text-3xl text-ui-brand"
          :icon="['fas', 'caret-square-right']"
        />
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "CarouselWrapper",
  data: () => ({
    showModal: false,
    api: "https://picsum.photos/v2/list?limit=15",
    colection: [],
    selectedImg: "",
  }),
  mounted() {
    this.controlSlider();
    this.getLibrary();
  },
  methods: {
    getLibrary() {
      fetch(this.api)
        .then((response) => {
          if (response.status === 200) return response.json();
        })
        .then((data) => {
          this.colection = data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    controlSlider() {
      /*
      El carousel que se construyo para el proyecto, funciona a partir de la manipulación de la propiedad transform/translate, creando asi un desplazamiento sobre el eje interno X.
      */
      const slider = document.querySelector(".carousel-wrapper");
      const prev = document.querySelector(".prev");
      const next = document.querySelector(".next");
      let direction;
      /*
      Este movimiento se dispara al escuchar el evento click de los botones previamente maquetados y se utiliza una variable "direction" para orientar el sentido del movimiento y asi poder recalcular cuales son los primeros y ultimos elementos del carousel, de esta forma se logra el comportamiento ciclico esperado.
      */
      prev.addEventListener("click", function () {
        if (direction === -1) {
          slider.appendChild(slider.firstElementChild);
          direction = 1;
        }

        slider.style.transform = "translate(-240px)";
      });

      next.addEventListener("click", function () {
        direction = -1;

        slider.style.transform = "translate(240px)";
      });
      /*
      Considerando al evento como un objeto, evaluamos su propiedad name, para crear una condicional estricta que dispare el movimiento en el unico caso deseado, evitando asi que haya un conflicto con otros "transitionend" que esten en el target del elemento padre, como estuvo sucediendo con el opacity.
      */
      slider.addEventListener("transitionend", function (e, o) {
        if (e.propertyName === "transform") {
          if (direction === -1) {
            slider.appendChild(slider.firstElementChild);
          } else if (direction === 1) {
            slider.prepend(slider.lastElementChild);
          }

          slider.style.transition = "none";
          slider.style.transform = "translate(0)";
          setTimeout(function () {
            slider.style.transition = "all 1s";
          });
        }
      });
    },
    /*
      Esta funcion tiene dos tareas muy importantes, se establece un parametro que va servir para recuperar el objeto del index que estamos "seleccionando, y manda ese objeto al componente superior, quien necesita estos datos para pintarlos en otro componente"
      */
    emitValue(url) {
      this.selectedImg = url;
      this.$emit("deploy", this.selectedImg);
    },
  },
};
</script>
