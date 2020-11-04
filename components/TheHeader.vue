<template>
  <header
    id="header"
    class="fixed flex justify-between items-center w-full h-16 p-4 z-10 bg-ui-brand"
    :class="{ 'bg-ui-textContrast': scrollState === 'isFarFromTop' }"
  >
    <nuxt-link class="flex items-center" to="/">
      <img
        class="w-10 h-10"
        src="~/assets/images/gallery.svg"
        alt="Logo de la pagina"
      />
      <p
        class="mx-2 text-xl"
        :class="{
          'text-ui-brand': scrollState === 'isFarFromTop',
          'text-ui-textContrast': scrollState === 'isInTop'
        }"
      >
        Pic'Story
      </p>
    </nuxt-link>
    <!--Mobile menu-->
    <button
      class="relative p-2 rounded-lg md:invisible"
      :class="{
        'bg-ui-textContrast': scrollState === 'isInTop',
        'text-ui-brand': scrollState === 'isInTop',
        'bg-ui-brand': scrollState === 'isFarFromTop',
        'text-ui-textContrast': scrollState === 'isFarFromTop'
      }"
      @click="openMenu"
    >
      <fa-icon class="relative z-20" :icon="['fas', 'bars']" />
      <nav class="header-mobile" :class="{ 'is-open': showMenu }">
        <ul>
          <nuxt-link to="/contribuciones">
            <li class="flex items-center my-4 text-ui-textContrast">
              <fa-icon class="mx-4" :icon="['fas', 'sign-in-alt']" />
              <p>Iniciar sesion</p>
            </li>
          </nuxt-link>
          <nuxt-link to="/contribuciones">
            <li class="flex items-center my-4 text-ui-textContrast">
              <fa-icon class="mx-4" :icon="['fas', 'folder-plus']" />
              <p>Contribuciones</p>
            </li>
          </nuxt-link>
        </ul>
      </nav>
    </button>
    <!---Desktop menu-->
    <nav class="hidden md:flex">
      <ul class="flex">
        <nuxt-link to="/contribuciones">
          <li class="flex items-center text-ui-textContrast">
            <fa-icon class="mx-4" :icon="['fas', 'sign-in-alt']" />
            <p>Iniciar sesion</p>
          </li>
        </nuxt-link>
        <nuxt-link to="/contribuciones">
          <li class="flex items-center text-ui-textContrast">
            <fa-icon class="mx-4" :icon="['fas', 'folder-plus']" />
            <p>Contribuciones</p>
          </li>
        </nuxt-link>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: "TheHeader",
  data: () => ({
    showMenu: false,
    scrollState: "isInTop"
  }),
  mounted() {
    window.addEventListener("scroll", this.updateScroll);
    this.navigationHasStarted();
  },
  methods: {
    updateScroll() {
      if (window.scrollY < 100) {
        this.scrollState = "isInTop";
        //console.log(this.scrollState);
      } else if (window.scrollY > 100) {
        this.scrollState = "isFarFromTop";
        //console.log(this.scrollState);
      }
    },
    navigationHasStarted() {
      if (window.scrollY > 200) {
        this.scrollState = "isFarFromTop";
        console.log("It's working");
      }
    },
    openMenu() {
      this.showMenu = !this.showMenu;
      console.log("I`m working");
    }
  }
};
</script>
