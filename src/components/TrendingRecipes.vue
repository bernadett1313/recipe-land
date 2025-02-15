<script setup>
</script>

<template>
    <div class="w-[99%] flex flex-col mx-1.5 mb-9">
        <div class="flex flex-row justify-around items-center space-x-0.5">
            <div class="w-[16%] flex flex-col">
                <div class="relative overflow-hidden group">
                    <RouterLink to="/">
                        <img src="../assets/images/recipe1.jpg" class="object-cover h-[310px] w-full" alt="Recipe Image">
                    </RouterLink>    
                </div>
            </div>
            <div class="w-[16%] flex flex-col">
                <div class="relative overflow-hidden group">
                    <RouterLink to="/">
                        <img src="../assets/images/recipe2.jpg" class="object-cover h-[310px] w-full" alt="Recipe Image">
                    </RouterLink>    
                </div>
            </div>
            <div class="w-[16%] flex flex-col z-10 relative">
                <div class="relative overflow-hidden group">
                    <RouterLink to="/">
                        <img src="../assets/images/recipe1.jpg" class="object-cover h-[310px] w-full" alt="Recipe Image">
                    </RouterLink>    
                </div>
            </div>
            <div class="flex justify-center text-nowrap bg-white px-4 py-3 absolute z-50">
                <h4 class="uppercase font-medium text-black">What's trending</h4>
            </div>
            <div class="w-[16%] flex flex-col relative">
                <div class="relative overflow-hidden group">
                    <RouterLink to="/">
                        <img src="../assets/images/recipe2.jpg" class="object-cover h-[310px] w-full" alt="Recipe Image">
                    </RouterLink>    
                </div>
            </div>
            <div class="w-[16%] flex flex-col z-10">
                <div class="relative overflow-hidden group">
                    <RouterLink to="/">
                        <img src="../assets/images/recipe1.jpg" class="object-cover h-[310px] w-full" alt="Recipe Image">
                    </RouterLink>    
                </div>
            </div>
            <div class="w-[16%] flex flex-col">
                <div class="relative overflow-hidden group">
                    <RouterLink to="/">
                        <img src="../assets/images/recipe2.jpg" class="object-cover h-[310px] w-full" alt="Recipe Image">
                    </RouterLink>    
                </div>
            </div>
        </div>  
    </div>
</template>