<template>
  <section>
    <div class="p-4 text-center text-gray-700">
      <p class="mb-4 text-2xl">
        ¿Quieres que tus fotos sean incluidas en Pic'Story?
      </p>
      <p class="mb-4 text-lg">
        Completa el formulario con la información necesaria, y nosotros te
        notificaremos cuando la fotografia se encuentre arriba
      </p>
    </div>
    <form class="w-10/12 p-4 my-4 mx-auto border border-gray-400 rounded-lg">
      <label class="block">
        <span class="text-gray-700">Titulo</span>
        <input class="form-input mt-1 block w-full" />
      </label>

      <label class="block mt-6">
        <span class="text-gray-700">Historia</span>
        <textarea
          class="form-textarea mt-1 block w-full"
          rows="3"
          placeholder="Maximo 200 caracteres."
          maxlength="200"
        ></textarea>
      </label>
      <label class="block mt-6">
        <span class="text-gray-700">Archivo:</span>
        <input class="form-input mt-1 block w-full" type="file" />
      </label>
      <div class="flex mt-6">
        <label class="flex items-center">
          <input type="checkbox" class="form-checkbox" required />
          <span class="ml-2"
            >Acepto el <span class="underline">aviso de privacidad</span></span
          >
        </label>
      </div>
      <div class="flex justify-center mt-6">
        <button
          class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
        >
          Enviar
        </button>
      </div>
    </form>
    <div></div>
  </section>
</template>

<script>
import LottiePlayer from "lottie-player-vue";

export default {
  name: "ContributionsView",
  data: () => ({
    file: null
  }),
  components: {
    LottiePlayer
  },
  transition: "slide-fade"
};
</script>
