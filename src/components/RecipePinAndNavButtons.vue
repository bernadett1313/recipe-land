<script setup>
    import { ref } from 'vue';
    import { useRouter } from 'vue-router';

    const router = useRouter();

    const scrollToSection = (event) => {
    event.preventDefault();
    const element = document.getElementById('recipe');
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
    };
</script>

<template>
    <RouterLink to="/" class="uppercase text-xs lg:text-sm border border-black px-4 lg:px-5 py-2 bg-black hover:bg-white text-white hover:text-black transition duration-75 ease-in-out">pin recipe</RouterLink>
    <RouterLink to="#" @click.native="scrollToSection" class="uppercase text-xs lg:text-sm border border-black px-5 py-2 bg-black hover:bg-white text-white hover:text-black transition duration-75 ease-in-out">jump to recipe</RouterLink>
</template>