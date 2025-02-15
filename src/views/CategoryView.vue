<script setup>
    import RecipesByCategory from '../components/RecipesByCategory.vue';
    import TrendingRecipes from '../components/TrendingRecipes.vue';
</script>

<template>
    <div class="w-[90%] px-3">
        <RecipesByCategory></RecipesByCategory>
    </div>
    <div>
        <TrendingRecipes></TrendingRecipes>
    </div>

</template>