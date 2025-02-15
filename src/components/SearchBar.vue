<script setup>
    import SearchIcon from '../components/icons/SearchIcon.vue';
</script>

<template>
    <div class="relative md:w-[250px] pr-4 md:pr-0">
        <input type="text"class="hidden md:block border border-gray-400 px-3 py-2 w-full rounded-md focus:outline-none focus:border-blue-500" placeholder="Search for a recipe"/>
        <RouterLink to="/"><SearchIcon class="w-[27px] h-[27px] md:w-[21px] md:h-[21px] absolute md:right-3 top-4 md:top-1/2 transform -translate-y-1/2 text-gray-500"></SearchIcon></RouterLink>
    </div>
</template>
