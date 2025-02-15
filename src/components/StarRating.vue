<script setup>
    import { ref } from 'vue';

    // Estado reactivo para la calificación y el valor sobre el que se está pasando el cursor
    const rating = ref(0);
    const hovered = ref(0);

    // Función para establecer la calificación
    const rate = (stars) => {
    rating.value = stars;
    };

    // Función para establecer el valor sobre el que se está pasando el cursor
    const hover = (stars) => {
    hovered.value = stars;
    };
</script>

<template>
    <div class="flex space-x-1">
        <svg v-for="(star, index) in 5" :key="index"
            @click="rate(index + 1)"
            @mouseover="hover(index + 1)"
            @mouseleave="hover(0)"
            :class="{'text-yellow-500': (hovered.value >= index + 1 || rating.value >= index + 1), 'text-gray-400': (hovered.value < index + 1 && rating.value < index + 1)}"
            xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" stroke="currentColor" class="w-6 h-6 cursor-pointer">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.419l1.09 3.36a1 1 0 00.95.69h3.522a1 1 0 01.592 1.81l-2.796 2.03a1 1 0 00-.36 1.12l1.09 3.36a1 1 0 01-1.538 1.12l-2.796-2.03a1 1 0 00-1.18 0l-2.796 2.03a1 1 0 01-1.538-1.12l1.09-3.36a1 1 0 00-.36-1.12L5.846 9.279a1 1 0 01.592-1.81h3.522a1 1 0 00.95-.69L12 4.419z" />
        </svg>
    </div>
</template>