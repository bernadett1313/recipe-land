<script setup>
import { ref } from 'vue';
import { RouterLink } from 'vue-router';

const isMenuOpen = ref(false);
const isSubMenuOpen = ref(false); // Nuevo estado para el submenú "About"

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value;
}

function toggleSubMenu() { // Nuevo método para alternar el submenú "About"
  isSubMenuOpen.value = !isSubMenuOpen.value;
}
</script>

<template>
  <nav class="w-full pl-5 md:pl-20 z-50">
    <!-- Botón de menú hamburguesa para pantallas pequeñas -->
    <div class="md:hidden flex justify-end items-center">
      <button @click="toggleMenu" class="focus:outline-none">
        <!-- Ícono de hamburguesa -->
        <svg class="w-8 h-8 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
      </button>
    </div>

    <!-- Menú de navegación -->
    <ul 
      :class="{
        'block': isMenuOpen, 
        'hidden': !isMenuOpen, 
        'md:flex': true, 
        'flex-col': isMenuOpen, 
        'md:flex-row': !isMenuOpen
      }" 
      class="w-full bg-white/95 absolute top-[4.8rem] left-0 right-0 md:static md:top-0 md:left-auto md:right-auto transition-all duration-300 ease-in-out transform"
    >
      <hr class="border-gray-300 w-full md:hidden">
      <li class="w-full px-4 py-2">
        <RouterLink to="/" class="uppercase font-semibold text-lg block text-start md:text-left hover:text-[#659191]" active-class="active-link">Home</RouterLink>
      </li>
      <hr class="border-gray-300 w-full md:hidden">
      <li class="w-full px-4 py-2">
        <RouterLink to="/recipes" class="uppercase font-semibold text-lg block text-start md:text-left hover:text-[#659191]" active-class="active-link">Recipes</RouterLink>
      </li>
      <hr class="border-gray-300 w-full md:hidden">
      <li class="w-full px-4 py-2">
        <RouterLink to="/cookbook" class="uppercase font-semibold text-lg block text-start md:text-left hover:text-[#659191]" active-class="active-link">Cookbook</RouterLink>
      </li>
      <hr class="border-gray-300 w-full md:hidden">
      <li class="relative group w-full px-4 py-2">
        <button @click="toggleSubMenu" class="uppercase font-semibold text-lg block text-start md:text-left hover:text-[#659191] focus:outline-none">
          <RouterLink to="/about-me" class="uppercase font-semibold text-lg block text-start md:text-left hover:text-[#659191]">About</RouterLink>
        </button>
        <!-- Submenú -->
        <ul 
          :class="{
            'block': isSubMenuOpen, 
            'hidden': !isSubMenuOpen,
            'md:absolute md:block md:opacity-0 md:group-hover:opacity-100 md:group-hover:visible md:bg-white md:shadow-lg': true
          }"
          class="md:w-48 md:mt-2 transition-all duration-300 ease-in-out transform"
        >
          <li class="flex flex-col justify-start items-start px-1 md:px-4 py-2 w-full">
            <RouterLink to="/about-me" class="uppercase block font-semibold text-sm hover:text-[#659191] transition ease-in-out duration-200">About me</RouterLink>
          </li>
          <li class="flex flex-col justify-start items-start px-1 md:px-4 py-2 w-full">
            <RouterLink to="/about-team" class="uppercase block font-semibold text-sm hover:text-[#659191]">Meet our team</RouterLink>
          </li>
          <li class="flex flex-col justify-start items-start px-1 md:px-4 py-2 w-full">
            <RouterLink to="/about-me/faq" class="uppercase block font-semibold text-sm hover:text-[#659191]">faq</RouterLink>
          </li>
        </ul>
      </li>
      <hr class="border-gray-300 w-full md:hidden">
    </ul>
  </nav>
</template> º
