<template>
  <section
    class="flex justify-between items-center w-full h-16 p-4 z-10 bg-black"
  >
    <div class="flex items-center">
      <img
        class="w-10 h-10"
        src="~/assets/images/gallery.svg"
        alt="Logo de la pagina"
      />
      <p class="mx-2 text-white">Gallery Infographic</p>
    </div>
    <button class="relative p-2 bg-gray-500 rounded-lg" @click="openMenu">
      <fa-icon class="relative z-20 text-white" :icon="['fas', 'bars']" />
      <nav class="header-menu__mobile" :class="{ 'is-open': showMenu }">
        <ul>
          <nuxt-link to="/solicitud">
            <li class="flex items-center my-4 text-white">
              <fa-icon class="mx-4" :icon="['fas', 'sign-in-alt']" />
              <p>Iniciar sesion</p>
            </li>
          </nuxt-link>
          <nuxt-link to="/solicitud">
            <li class="flex items-center my-4 text-white">
              <fa-icon class="mx-4" :icon="['fas', 'folder-plus']" />
              <p>Contribuciones</p>
            </li>
          </nuxt-link>
        </ul>
      </nav>
    </button>
  </section>
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
