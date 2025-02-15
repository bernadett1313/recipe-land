<script setup>
  import IntroAbout from '../components/IntroAbout.vue';
  import QuickMealIdeas from '../components/QuickMealIdeas.vue';
  import BestDinnerRecipes from '../components/BestDinnerRecipes.vue';
  import VeganRecipes from '../components/VeganRecipes.vue';
  import WarmTastySoups from '../components/WarmTastySoups.vue';
  import EverythingChicken from '../components/EverythingChicken.vue';
  import AsianRecipes from '../components/AsianRecipes.vue';
  import TrendingRecipes from '../components/TrendingRecipes.vue';
  import RecipeFilter from '../components/RecipeFilter.vue';
</script>

<template>
    <section class="w-[89%]">
        <div class="flex justify-center overflow-x-hidden">
            <IntroAbout></IntroAbout>
        </div>
    </section>
    <section class="w-[90%]">
        <QuickMealIdeas></QuickMealIdeas>
    </section>
    <section class="w-full">
        <RecipeFilter></RecipeFilter>
    </section>
    <section class="w-[90%]">
        <BestDinnerRecipes></BestDinnerRecipes>
        <VeganRecipes></VeganRecipes>
        <WarmTastySoups></WarmTastySoups>
        <EverythingChicken></EverythingChicken>
        <AsianRecipes></AsianRecipes>
    </section>
    <section>
      <TrendingRecipes></TrendingRecipes>
    </section>
</template>
