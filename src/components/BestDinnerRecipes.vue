<script setup>
</script>

<template>
    <div class="w-full flex flex-col items-center mb-4 lg:mb-12">
      <div class="w-full flex items-center justify-center space-x-4">
        <div class="flex-grow border-t border-[rgb(0,40,77)]"></div>
        <h2 class="text-xl font-extrabold">BEST DINNER RECIPES</h2>
        <div class="flex-grow border-t border-[rgb(0,40,77)]"></div>
      </div>
      <div class="w-full my-8">
        <div class="flex flex-col sm:flex-row flex-wrap justify-center sm:justify-between gap-y-8 sm:gap-y-0 sm:gap-x-2 mb-8 lg:mb-16">
            <div class="w-full sm:w-[48%] md:w-[32%] lg:w-[21%] flex flex-col">
                <div class="mb-3">
                    <h3 class="uppercase text-center text-lg font-bold">Recipe title</h3>
                </div>
                <div class="overflow-hidden">
                    <img src="../assets/images/recipe1.jpg" class="object-cover h-[350px]" alt="Recipe Image">
                </div>
            </div>
            <div class="w-full sm:w-[48%] md:w-[32%] lg:w-[21%] flex flex-col">
                <div class="mb-3">
                    <h3 class="uppercase text-center text-lg font-bold">Recipe title</h3>
                </div>
                <div class="overflow-hidden">
                    <img src="../assets/images/recipe1.jpg" class="object-cover h-[350px]" alt="Recipe Image">
                </div>
            </div>
            <div class="w-full sm:w-[48%] md:w-[32%] lg:w-[21%] flex flex-col">
                <div class="mb-3">
                    <h3 class="uppercase text-center text-lg font-bold">Recipe title</h3>
                </div>
                <div class="overflow-hidden">
                    <img src="../assets/images/recipe1.jpg" class="object-cover h-[350px]" alt="Recipe Image">
                </div>
            </div>
            <div class="w-full sm:w-[48%] md:w-[32%] lg:w-[21%] flex flex-col">
                <div class="mb-3">
                    <h3 class="uppercase text-center text-lg font-bold">Recipe title</h3>
                </div>
                <div class="overflow-hidden">
                    <img src="../assets/images/recipe1.jpg" class="object-cover h-[350px]" alt="Recipe Image">
                </div>
            </div>
        </div>
        <div class="mt-4 flex justify-center">
          <RouterLink to="/recipes/category" class="border border-black px-5 py-2.5 text-lg text-black hover:bg-black hover:text-white transition duration-75 ease-in-out">See more</RouterLink>
        </div>
      </div>
    </div>
  </template>
