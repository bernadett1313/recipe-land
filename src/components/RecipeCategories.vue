<script setup>
    import RecipeCategoryList from '../components/RecipeCategoryList.vue';
    import RecipeAside from '../components/RecipeAside.vue';
    
</script>

<template>
    <section class="w-full flex flex-col lg:flex-row justify-center gap-y-4 lg:gap-y-0 lg:gap-x-6">
        <RecipeCategoryList></RecipeCategoryList>
        <RecipeAside></RecipeAside>
    </section>
</template>