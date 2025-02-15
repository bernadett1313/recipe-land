<script setup>
import { ref } from 'vue';

const carousel = ref(null);
const scrollAmount = ref(0);

const recipes = [
  { image: 'recipe1.jpg' },
  { image: 'recipe1.jpg' },
  { image: 'recipe1.jpg' },
  { image: 'recipe1.jpg' },
  { image: 'recipe1.jpg' },
  { image: 'recipe1.jpg' },
  { image: 'recipe1.jpg' },
  { image: 'recipe1.jpg' },
];

const getImageUrl = (image) => {
  try {
    return new URL(`../assets/images/${image}`, import.meta.url).href;
  } catch (e) {
    console.error(`Error loading image: ${image}`, e);
    return '';
  }
};

const handleImageError = (event) => {
  event.target.src = 'path/to/placeholder-image.jpg'; // Ruta a una imagen de reserva en caso de error
};

const prev = () => {
  if (!carousel.value) return;
  const newScrollAmount = Math.max(scrollAmount.value - carousel.value.clientWidth, 0);
  carousel.value.scrollTo({
    left: newScrollAmount,
    behavior: 'smooth'
  });
  scrollAmount.value = newScrollAmount;
};

const next = () => {
  if (!carousel.value) return;
  const newScrollAmount = Math.min(scrollAmount.value + carousel.value.clientWidth, carousel.value.scrollWidth - carousel.value.clientWidth);
  carousel.value.scrollTo({
    left: newScrollAmount,
    behavior: 'smooth'
  });
  scrollAmount.value = newScrollAmount;
};
</script>


<template>
    <div class="w-full flex flex-col items-center mb-6">
    <div class="w-full flex items-center justify-center space-x-4">
      <div class="flex-grow border-t border-[rgb(0,40,77)]"></div>
      <h2 class="text-xl font-extrabold">QUICK MEAL IDEAS</h2>
      <div class="flex-grow border-t border-[rgb(0,40,77)]"></div>
    </div>

    <div class="relative w-full my-8 overflow-hidden">
      <div ref="carousel" class="flex transition-transform duration-300 ease-in-out">
        <div
          v-for="(recipe, index) in recipes"
          :key="index"
          class="w-[25%] space-x-5 flex flex-col flex-shrink-0"
        >
          <div class="mb-3">
            <h3 class="uppercase text-center text-lg font-bold">Recipe title</h3>
          </div>
          <div class="overflow-hidden">
            <img
              :src="getImageUrl(recipe.image)"
              class="object-cover h-[400px] w-full"
              :alt="`Recipe ${index + 1}`"
              @error="handleImageError"
            />
          </div>
        </div>
      </div>
      <button
        @click="prev"
        class="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-2"
      >
        &#10094;
      </button>
      <button
        @click="next"
        class="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-2"
      >
        &#10095;
      </button>
    </div>
  </div>
</template>
  
  
