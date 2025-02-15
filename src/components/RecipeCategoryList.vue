<script setup>
    import AsideSearchBar from '../components/AsideSearchBar.vue';
    import RecipesByIngredients from '../components/RecipesByIngredients.vue';

</script>

<template>
    <article class="px-5 mb-12">
        <div class="flex flex-col justify-center">
            <h2 class="uppercase text-xl md:text-2xl xl:text-3xl font-medium mb-3">Recipe index</h2>
            <AsideSearchBar class="w-[60%] lg:w-[30%]"></AsideSearchBar>
        </div>
        <div class="flex flex-col mt-14">
            <h3 class="uppercase text-[1.17rem] md:text-xl xl:text-2xl font-medium mb-6">Recipes by categories:</h3>
            <div class="w-full flex justify-between items-center flex-wrap gap-x-3 md:gap-x-5 gap-y-8">
                <div class="w-full md:w-[47.5%] lg:w-[31%] flex flex-col">
                    <RouterLink to="/recipes/category">
                        <div class="overflow-hidden relative group">
                            <img src="../assets/images/recipe1.jpg" class="object-cover h-[370px]" alt="Recipe Image">
                            <div class="absolute inset-0 bg-[#d2e0e0]/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            </div>
                        </div>
                        <div class="mt-3">
                            <h4 class="text-center text-[1.09rem] md:text-lg font-medium uppercase">Category title</h4>
                        </div>
                    </RouterLink>
                </div>
                <div class="w-full md:w-[47.5%] lg:w-[31%] flex flex-col">
                    <RouterLink to="/recipes/category">
                        <div class="overflow-hidden relative group">
                            <img src="../assets/images/recipe1.jpg" class="object-cover h-[370px]" alt="Recipe Image">
                            <div class="absolute inset-0 bg-[#d2e0e0]/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            </div>
                        </div>
                        <div class="mt-3">
                            <h4 class="text-center text-[1.09rem] md:text-lg font-medium uppercase">Category title</h4>
                        </div>
                    </RouterLink>
                </div>
                <div class="w-full md:w-[47.5%] lg:w-[31%] flex flex-col">
                    <RouterLink to="/recipes/category">
                        <div class="overflow-hidden relative group">
                            <img src="../assets/images/recipe1.jpg" class="object-cover h-[370px]" alt="Recipe Image">
                            <div class="absolute inset-0 bg-[#d2e0e0]/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            </div>
                        </div>
                        <div class="mt-3">
                            <h4 class="text-center text-[1.09rem] md:text-lg font-medium uppercase">Category title</h4>
                        </div>
                    </RouterLink>
                </div>
                <div class="w-full md:w-[47.5%] lg:w-[31%] flex flex-col">
                    <RouterLink to="/recipes/category">
                        <div class="overflow-hidden relative group">
                            <img src="../assets/images/recipe2.jpg" class="object-cover h-[370px]" alt="Recipe Image">
                            <div class="absolute inset-0 bg-[#d2e0e0]/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            </div>
                        </div>
                        <div class="mt-3">
                            <h4 class="text-center text-[1.09rem] md:text-lg font-medium uppercase">Category title</h4>
                        </div>
                    </RouterLink>
                </div>
                <div class="w-full md:w-[47.5%] lg:w-[31%] flex flex-col">
                    <RouterLink to="/recipes/category">
                        <div class="overflow-hidden relative group">
                            <img src="../assets/images/recipe2.jpg" class="object-cover h-[370px]" alt="Recipe Image">
                            <div class="absolute inset-0 bg-[#d2e0e0]/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            </div>
                        </div>
                        <div class="mt-3">
                            <h4 class="text-center text-[1.09rem] md:text-lg font-medium uppercase">Category title</h4>
                        </div>
                    </RouterLink>
                </div>
                <div class="w-full md:w-[47.5%] lg:w-[31%] flex flex-col">
                    <RouterLink to="/recipes/category">
                        <div class="overflow-hidden relative group">
                            <img src="../assets/images/recipe2.jpg" class="object-cover h-[370px]" alt="Recipe Image">
                            <div class="absolute inset-0 bg-[#d2e0e0]/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            </div>
                        </div>
                        <div class="mt-3">
                            <h4 class="text-center text-[1.09rem] md:text-lg font-medium uppercase">Category title</h4>
                        </div>
                    </RouterLink>
                </div>
                <div class="w-full md:w-[47.5%] lg:w-[31%] flex flex-col">
                    <RouterLink to="/recipes/category">
                        <div class="overflow-hidden relative group">
                            <img src="../assets/images/recipe2.jpg" class="object-cover h-[370px]" alt="Recipe Image">
                            <div class="absolute inset-0 bg-[#d2e0e0]/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            </div>
                        </div>
                        <div class="mt-3">
                            <h4 class="text-center text-[1.09rem] md:text-lg font-medium uppercase">Category title</h4>
                        </div>
                    </RouterLink>
                </div>
                <div class="w-full md:w-[47.5%] lg:w-[31%] flex flex-col">
                    <RouterLink to="/recipes/category">
                        <div class="overflow-hidden relative group">
                            <img src="../assets/images/recipe2.jpg" class="object-cover h-[370px]" alt="Recipe Image">
                            <div class="absolute inset-0 bg-[#d2e0e0]/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            </div>
                        </div>
                        <div class="mt-3">
                            <h4 class="text-center text-[1.09rem] md:text-lg font-medium uppercase">Category title</h4>
                        </div>
                    </RouterLink>
                </div>
                <div class="w-full md:w-[47.5%] lg:w-[31%] flex flex-col">
                    <RouterLink to="/recipes/category">
                        <div class="overflow-hidden relative group">
                            <img src="../assets/images/recipe2.jpg" class="object-cover h-[370px]" alt="Recipe Image">
                            <div class="absolute inset-0 bg-[#d2e0e0]/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            </div>
                        </div>
                        <div class="mt-3">
                            <h4 class="text-center text-[1.09rem] md:text-lg font-medium uppercase">Category title</h4>
                        </div>
                    </RouterLink>
                </div>
                <div class="w-full md:w-[47.5%] lg:w-[31%] flex flex-col">
                    <RouterLink to="/recipes/category">
                        <div class="overflow-hidden relative group">
                            <img src="../assets/images/recipe2.jpg" class="object-cover h-[370px]" alt="Recipe Image">
                            <div class="absolute inset-0 bg-[#d2e0e0]/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            </div>
                        </div>
                        <div class="mt-3">
                            <h4 class="text-center text-[1.09rem] md:text-lg font-medium uppercase">Category title</h4>
                        </div>
                    </RouterLink>
                </div>
                <div class="w-full md:w-[47.5%] lg:w-[31%] flex flex-col">
                    <RouterLink to="/recipes/category">
                        <div class="overflow-hidden relative group">
                            <img src="../assets/images/recipe2.jpg" class="object-cover h-[370px]" alt="Recipe Image">
                            <div class="absolute inset-0 bg-[#d2e0e0]/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            </div>
                        </div>
                        <div class="mt-3">
                            <h4 class="text-center text-[1.09rem] md:text-lg font-medium uppercase">Category title</h4>
                        </div>
                    </RouterLink>
                </div>
                <div class="w-full md:w-[47.5%] lg:w-[31%] flex flex-col">
                    <RouterLink to="/recipes/category">
                        <div class="overflow-hidden relative group">
                            <img src="../assets/images/recipe2.jpg" class="object-cover h-[370px]" alt="Recipe Image">
                            <div class="absolute inset-0 bg-[#d2e0e0]/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            </div>
                        </div>
                        <div class="mt-3">
                            <h4 class="text-center text-[1.09rem] md:text-lg font-medium uppercase">Category title</h4>
                        </div>
                    </RouterLink>
                </div>
            </div>
            <RecipesByIngredients></RecipesByIngredients>
        </div>
    </article>
</template>