<template>
  <section>
    <div class="p-4 text-center text-gray-700">
      <p class="mb-4 text-2xl">
        ¿Quieres que tus fotos sean incluidas en
        <span class="text-ui-brand font-semibold">Pic'Story</span>?
      </p>
      <p class="mb-4 text-lg">
        Completa el formulario con la información necesaria, y nosotros te
        notificaremos cuando la fotografia se encuentre arriba
      </p>
    </div>
    <form
      class="w-10/12 p-4 my-4 mx-auto border border-gray-400 rounded-lg lg:max-w-md"
    >
      <label class="block">
        <span class="text-gray-700">Titulo</span>
        <input class="form-input mt-1 block w-full" required />
      </label>

      <label class="block mt-6">
        <span class="text-gray-700">Historia</span>
        <textarea
          class="form-textarea mt-1 block w-full"
          rows="3"
          placeholder="Minimo 50 caracteres / máximo 200."
          maxlength="200"
          minlength="50"
          required
        ></textarea>
      </label>
      <label class="block mt-6">
        <span class="text-gray-700">Archivo:</span>
        <input class="form-input mt-1 block w-full" type="file" required />
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
          class="text-ui-brand font-semibold py-2 px-4 border rounded hover:text-ui-textContrast hover:bg-ui-brand"
        >
          Enviar
        </button>
      </div>
    </form>
    <div></div>
  </section>
</template>

<script>
export default {
  name: "ContributionsView",
  data: () => ({}),

  transition: "slide-fade",
};
</script>
