<script setup>
    import AboutTeam from '../components/AboutTeam.vue';
    import TrendingRecipes from '../components/TrendingRecipes.vue';
    import RecipeAside from '../components/RecipeAside.vue';
    
</script>

<template>
    <section class="w-[90%] flex flex-col lg:flex-row justify-center space-y-4 lg:space-y-0 lg:space-x-4">
        <AboutTeam></AboutTeam>
        <RecipeAside></RecipeAside>
    </section>
    <section>
        <TrendingRecipes></TrendingRecipes>
    </section>
</template>
