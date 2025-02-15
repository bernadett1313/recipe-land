<script setup>
    import RecipeDetail from '../components/RecipeDetail.vue';
    import TrendingRecipes from '../components/TrendingRecipes.vue';
    import RecipeAside from '../components/RecipeAside.vue';
</script>

<template>
    <section class="w-[90%] flex flex-col lg:flex-row gap-x-4">
        <RecipeDetail></RecipeDetail>
        <RecipeAside></RecipeAside>
    </section>
    <section>
        <TrendingRecipes></TrendingRecipes>
    </section>
</template>