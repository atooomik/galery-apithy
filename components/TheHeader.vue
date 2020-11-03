<template>
  <header
    class="flex justify-between items-center w-full h-16 p-4 z-10 bg-gray-300"
  >
    <nuxt-link class="flex items-center" to="/">
      <img
        class="w-10 h-10"
        src="~/assets/images/gallery.svg"
        alt="Logo de la pagina"
      />
      <p class="mx-2 text-white text-xl">Pic'Story</p>
    </nuxt-link>

    <button class="relative p-2 rounded-lg" @click="openMenu">
      <fa-icon class="relative z-20 text-white" :icon="['fas', 'bars']" />
      <nav class="header-menu__mobile" :class="{ 'is-open': showMenu }">
        <ul>
          <nuxt-link to="/contribuciones">
            <li class="flex items-center my-4 text-white">
              <fa-icon class="mx-4" :icon="['fas', 'sign-in-alt']" />
              <p>Iniciar sesion</p>
            </li>
          </nuxt-link>
          <nuxt-link to="/contribuciones">
            <li class="flex items-center my-4 text-white">
              <fa-icon class="mx-4" :icon="['fas', 'folder-plus']" />
              <p>Contribuciones</p>
            </li>
          </nuxt-link>
        </ul>
      </nav>
    </button>
  </header>
</template>

<script>
export default {
  name: "TheHeader",
  data: () => {
    return {
      showMenu: false
    };
  },
  methods: {
    openMenu() {
      this.showMenu = !this.showMenu;
      console.log("I`m working");
    }
  }
};
</script>
