<script setup>
    import Cookbook from '../components/Cookbook.vue';
    import TrendingRecipes from '../components/TrendingRecipes.vue';
    import RecipeAside from '../components/RecipeAside.vue';
</script>

<template>
    <section class="w-[90%] flex flex-row space-x-4">
        <Cookbook></Cookbook>
        <RecipeAside></RecipeAside>
    </section>
    <section>
        <TrendingRecipes></TrendingRecipes>
    </section>
</template>