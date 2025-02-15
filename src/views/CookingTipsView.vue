<script setup>
    import CookingTips from '../components/CookingTips.vue';
    import TrendingRecipes from '../components/TrendingRecipes.vue';
    import RecipeAside from '../components/RecipeAside.vue';
</script>

<template>
    <section class="w-[90%] flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-6">
        <CookingTips></CookingTips>
        <RecipeAside></RecipeAside>
    </section>
    <section>
        <TrendingRecipes></TrendingRecipes>
    </section>
</template>