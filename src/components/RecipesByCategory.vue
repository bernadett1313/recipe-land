<script setup>
    // document.querySelectorAll('.hover-trigger').forEach(item => {
    //         item.addEventListener('mouseover', () => {
    //             document.querySelectorAll('.hover-target').forEach(target => {
    //                 target.classList.add('opacity-30');
    //             });
    //         });
    //         item.addEventListener('mouseout', () => {
    //             document.querySelectorAll('.hover-target').forEach(target => {
    //                 target.classList.remove('opacity-30');
    //             });
    //         });
    //     });
</script>

<template>
    <div class="w-full flex flex-col items-center">
      <div class="w-full flex items-center justify-center">
        <h2 class="uppercase text-xl md:text-2xl xl:text-3xl font-medium mb-3">Vegan recipes</h2>
      </div>
      <div class="my-8">
        <div class="flex justify-between items-start flex-wrap gap-x-2 gap-y-8 mb-4">
            <div class="w-full md:w-[45%] lg:w-[30%] flex flex-col">
                <RouterLink to="/recipes/category/recipe" class="relative group hover-trigger">
                    <div class="overflow-hidden">
                        <img src="../assets/images/recipe1.jpg" class="object-cover h-[470px]" alt="Recipe Image">
                        <div class="absolute inset-0 bg-[#d2e0e0] opacity-0 hover:opacity-30 transition-opacity duration-300 hover-target"></div>
                    </div>
                </RouterLink>
                <div class="mt-3">
                    <RouterLink to="/recipes/category/recipe" class="block hover-trigger">
                        <h3 class="text-center text-[1.18rem] md:text-lg xl:text-xl font-medium uppercase hover-target">Sheet Pan Scalloped Potatoes</h3>
                    </RouterLink>
                    <h5 class="text-center uppercase text-[0.85rem] mt-1 font-bold text-[#00284d]/70">May 5th</h5>
                </div>
            </div>
            <div class="w-full md:w-[45%] lg:w-[30%] flex flex-col">
                <RouterLink to="/recipes/category/recipe" class="relative group">
                    <div class="overflow-hidden">
                        <img src="../assets/images/recipe1.jpg" class="object-cover h-[470px]" alt="Recipe Image">
                        <div class="absolute inset-0 bg-[#b4c4d3] opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                    </div>
                </RouterLink>
                <div class="mt-3">
                    <RouterLink to="/recipes/category/recipe">
                        <h3 class="text-center text-[1.18rem] md:text-lg xl:text-xl font-medium uppercase hover-target">Recipe title</h3>
                    </RouterLink>
                    <h5 class="text-center uppercase text-[0.85rem] mt-1 font-bold text-[#00284d]/70">May 5th</h5>
                </div>
            </div>
            <div class="w-full md:w-[45%] lg:w-[30%] flex flex-col">
                <RouterLink to="/recipes/category/recipe" class="relative group">
                    <div class="overflow-hidden">
                        <img src="../assets/images/recipe1.jpg" class="object-cover h-[470px]" alt="Recipe Image">
                        <div class="absolute inset-0 bg-[#d2e0e0] opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                    </div>
                </RouterLink>
                <div class="mt-3">
                    <RouterLink to="/recipes/category/recipe">
                        <h3 class="text-center text-[1.18rem] md:text-lg xl:text-xl font-medium uppercase hover-target">Recipe title</h3>
                    </RouterLink>
                    <h5 class="text-center uppercase text-[0.85rem] mt-1 font-bold text-[#00284d]/70">May 5th</h5>
                </div>
            </div>
            <div class="w-full md:w-[45%] lg:w-[30%] flex flex-col">
                <RouterLink to="/recipes/category/recipe" class="relative group">
                    <div class="overflow-hidden">
                        <img src="../assets/images/recipe1.jpg" class="object-cover h-[470px]" alt="Recipe Image">
                        <div class="absolute inset-0 bg-[#d2e0e0] opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                    </div>
                </RouterLink>
                <div class="mt-3">
                    <RouterLink to="/recipes/category/recipe">
                        <h3 class="text-center text-[1.18rem] md:text-lg xl:text-xl font-medium uppercase hover-target">Recipe title</h3>
                    </RouterLink>
                    <h5 class="text-center uppercase text-[0.85rem] mt-1 font-bold text-[#00284d]/70">May 5th</h5>
                </div>
            </div>
            <div class="w-full md:w-[45%] lg:w-[30%] flex flex-col">
                <RouterLink to="/recipes/category/recipe" class="relative group">
                    <div class="overflow-hidden">
                        <img src="../assets/images/recipe1.jpg" class="object-cover h-[470px]" alt="Recipe Image">
                        <div class="absolute inset-0 bg-[#d2e0e0] opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                    </div>
                </RouterLink>
                <div class="mt-3">
                    <RouterLink to="/recipes/category/recipe">
                        <h3 class="text-center text-[1.18rem] md:text-lg xl:text-xl font-medium uppercase hover-target">Recipe title</h3>
                    </RouterLink>
                    <h5 class="text-center uppercase text-[0.85rem] mt-1 font-bold text-[#00284d]/70">May 5th</h5>
                </div>
            </div>
            <div class="w-full md:w-[45%] lg:w-[30%] flex flex-col">
                <RouterLink to="/recipes/category/recipe" class="relative group">
                    <div class="overflow-hidden">
                        <img src="../assets/images/recipe2.jpg" class="object-cover h-[470px]" alt="Recipe Image">
                        <div class="absolute inset-0 bg-[#d2e0e0] opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                    </div>
                </RouterLink>
                <div class="mt-3">
                    <RouterLink to="/recipes/category/recipe">
                        <h3 class="text-center text-[1.18rem] md:text-lg xl:text-xl font-medium uppercase hover-target">Recipe title</h3>
                    </RouterLink>
                    <h5 class="text-center uppercase text-[0.85rem] mt-1 font-bold text-[#00284d]/70">May 5th</h5>
                </div>
            </div>
            <div class="w-full md:w-[45%] lg:w-[30%] flex flex-col">
                <RouterLink to="/recipes/category/recipe" class="relative group">
                    <div class="overflow-hidden">
                        <img src="../assets/images/recipe2.jpg" class="object-cover h-[470px]" alt="Recipe Image">
                        <div class="absolute inset-0 bg-[#d2e0e0] opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                    </div>
                </RouterLink>
                <div class="mt-3">
                    <RouterLink to="/recipes/category/recipe">
                        <h3 class="text-center text-[1.18rem] md:text-lg xl:text-xl font-medium uppercase hover-target">Recipe title</h3>
                    </RouterLink>
                    <h5 class="text-center uppercase text-[0.85rem] mt-1 font-bold text-[#00284d]/70">May 5th</h5>
                </div>
            </div>
            <div class="w-full md:w-[45%] lg:w-[30%] flex flex-col">
                <RouterLink to="/recipes/category/recipe" class="relative group">
                    <div class="overflow-hidden">
                        <img src="../assets/images/recipe2.jpg" class="object-cover h-[470px]" alt="Recipe Image">
                        <div class="absolute inset-0 bg-[#d2e0e0] opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                    </div>
                </RouterLink>
                <div class="mt-3">
                    <RouterLink to="/recipes/category/recipe">
                        <h3 class="text-center text-[1.18rem] md:text-lg xl:text-xl font-medium uppercase hover-target">Recipe title</h3>
                    </RouterLink>
                    <h5 class="text-center uppercase text-[0.85rem] mt-1 font-bold text-[#00284d]/70">May 5th</h5>
                </div>
            </div>
            <div class="w-full md:w-[45%] lg:w-[30%] flex flex-col">
                <RouterLink to="/recipes/category/recipe" class="relative group">
                    <div class="overflow-hidden">
                        <img src="../assets/images/recipe2.jpg" class="object-cover h-[470px]" alt="Recipe Image">
                        <div class="absolute inset-0 bg-[#d2e0e0] opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                    </div>
                </RouterLink>
                <div class="mt-3">
                    <RouterLink to="/recipes/category/recipe">
                        <h3 class="text-center text-[1.18rem] md:text-lg xl:text-xl font-medium uppercase hover-target">Recipe title</h3>
                    </RouterLink>
                    <h5 class="text-center uppercase text-[0.85rem] mt-1 font-bold text-[#00284d]/70">May 5th</h5>
                </div>
            </div>
        </div>
      </div>
    </div>
  </template>