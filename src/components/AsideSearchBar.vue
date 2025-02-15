<script setup>
    import SearchIcon from '../components/icons/SearchIcon.vue';
</script>

<template>
    <div class="relative">
        <input type="text"class="border border-gray-400 px-3 py-2 w-full focus:outline-none focus:border-blue-500" placeholder="Search for a recipe"/>
        <RouterLink to="/"><SearchIcon class="w-[21px] h-[21px] absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" name="aside-searchbar" id="aside-searchbar"></SearchIcon></RouterLink>
    </div>
</template>