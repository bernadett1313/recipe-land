<script setup>
  import ChickenIcon from '../components/icons/ChickenIcon.vue';
  import SoupIcon from '../components/icons/SoupIcon.vue';
  import QuickDinnerIcon from '../components/icons/QuickDinnerIcon.vue';
  import SaladIcon from '../components/icons/SaladIcon.vue';
  import SandwichIcon from '../components/icons/SandwichIcon.vue';
  import NoodlesIcon from '../components/icons/NoodlesIcon.vue';
  import SearchIcon from '../components/icons/SearchIcon.vue';
  import DessertIcon from '../components/icons/DessertIcon.vue';
  import MoreIcon from '../components/icons/MoreIcon.vue';
</script>

<template>
    <div class="flex flex-col lg:flex-row items-center gap-y-3.5 lg:gap-y-0 py-6 px-8 lg:py-8 lg:px-16 bg-[rgb(0,40,77)] text-white text-sm font-bold mb-8 lg:mb-16">
        <div class="w-full md:w-[35%] flex flex-col items-center gap-y-2">
            <p class="text-[1.1rem] tracking-wider font-medium">FIND THE PERFECT RECIPE:</p>
            <div class="relative hidden lg:block">
                <RouterLink to="/"><SearchIcon class="w-[21px] h-[21px] absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"></SearchIcon></RouterLink>
                <input type="text" class="px-2 py-3 font-normal" name="subscription" id="subscription" size="35" placeholder="search recipe">
            </div>
        </div>
        <div class="w-full lg:w-[65%] flex flex-wrap justify-center lg:justify-around items-center gap-2.5 lg:gap-x-[1.58rem] xl:gap-x-4 ml-2 md:ml-4 lg:ml-6">
            <div class="relative group w-[22.2%] lg:w-[8.5%] flex flex-grow justify-center">
                <RouterLink to="/recipes/category">
                    <ChickenIcon class="w-[61px] h-[61px] sm:w-[66px] sm:h-[66px] md:w-[71px] md:h-[71px] xl:w-[80px] xl:h-[80px]"></ChickenIcon>
                </RouterLink>
                <div class="absolute left-1/2 transform -translate-x-1/2 bottom-full mb-2 hidden group-hover:flex items-center">
                    <div class="bg-gray-800 text-white text-xs rounded py-1 px-2">
                        Chicken dishes
                    </div>
                    <div class="border-t-8 border-t-gray-800 border-l-8 border-l-transparent border-r-8 border-r-transparent h-0 w-0"></div>
                </div>
            </div>
            <div class="relative group w-[22.2%] lg:w-[8.5%] flex flex-grow justify-center">
                <RouterLink to="/recipes/category">
                    <SoupIcon class="w-[69px] h-[69px] sm:w-[75px] sm:h-[76px] md:w-[80px] md:h-[80px] xl:w-[88px] xl:h-[88px]"></SoupIcon>
                </RouterLink>
                <div class="absolute left-1/2 transform -translate-x-1/2 bottom-full mb-2 hidden group-hover:flex items-center">
                    <div class="bg-gray-800 text-white text-xs rounded py-1 px-2">
                        Warm soups
                    </div>
                    <div class="border-t-8 border-t-gray-800 border-l-8 border-l-transparent border-r-8 border-r-transparent h-0 w-0"></div>
                </div>
            </div>
            <div class="relative group w-[22.2%] lg:w-[8.5%] flex flex-grow justify-center">
                <RouterLink to="/recipes/category">
                    <QuickDinnerIcon class="w-[47px] h-[48px] sm:w-[52px] sm:h-[52px] md:w-[55px] md:h-[55px] xl:w-[60px] xl:h-[60px]"></QuickDinnerIcon>
                </RouterLink>
                <div class="absolute left-1/2 transform -translate-x-1/2 bottom-full mb-2 hidden group-hover:flex items-center">
                    <div class="bg-gray-800 text-white text-xs rounded py-1 px-2">
                        Quick dinner ideas
                    </div>
                    <div class="border-t-8 border-t-gray-800 border-l-8 border-l-transparent border-r-8 border-r-transparent h-0 w-0"></div>
                </div>
            </div>
            <div class="relative group w-[22.2%] lg:w-[8.5%] flex flex-grow justify-center">
                <RouterLink to="/recipes/category">
                    <SaladIcon class="w-[53px] h-[53px] sm:w-[59px] sm:h-[59px] md:w-[64px] md:h-[64px] xl:w-[71px] xl:h-[71px]"></SaladIcon>
                </RouterLink>
                <div class="absolute left-1/2 transform -translate-x-1/2 bottom-full mb-2 hidden group-hover:flex items-center">
                    <div class="bg-gray-800 text-white text-xs rounded py-1 px-2">
                        Tasty salads
                    </div>
                    <div class="border-t-8 border-t-gray-800 border-l-8 border-l-transparent border-r-8 border-r-transparent h-0 w-0"></div>
                </div>
            </div>
            <div class="relative group w-[22.2%] lg:w-[8.5%] flex flex-grow justify-center">
                <RouterLink to="/recipes/category">
                    <SandwichIcon class="px-2 w-[60px] h-[66px] sm:w-[68px] sm:h-[75px] md:w-[76px] md:h-[82px] xl:w-[84px] xl:h-[92px]"></SandwichIcon>
                </RouterLink>
                <div class="absolute left-1/2 transform -translate-x-1/2 bottom-full mb-2 hidden group-hover:flex items-center">
                    <div class="bg-gray-800 text-white text-xs rounded py-1 px-2">
                        Best sandwiches
                    </div>
                    <div class="border-t-8 border-t-gray-800 border-l-8 border-l-transparent border-r-8 border-r-transparent h-0 w-0"></div>
                </div>
            </div>
            <div class="relative group w-[22.2%] lg:w-[8.5%] flex flex-grow justify-center">
                <RouterLink to="/recipes/category">
                    <NoodlesIcon class="w-[57px] h-[57px] sm:w-[63px] sm:h-[63px] md:w-[68px] md:h-[68px] xl:w-[75px] xl:h-[75px]"></NoodlesIcon>
                </RouterLink>
                <div class="absolute left-1/2 transform -translate-x-1/2 bottom-full mb-2 hidden group-hover:flex items-center">
                    <div class="bg-gray-800 text-white text-xs rounded py-1 px-2">
                        Noodle recipes
                    </div>
                    <div class="border-t-8 border-t-gray-800 border-l-8 border-l-transparent border-r-8 border-r-transparent h-0 w-0"></div>
                </div>
            </div>
            <div class="relative group w-[22.2%] lg:w-[8.5%] flex flex-grow justify-center">
                <RouterLink to="/recipes/category">
                    <DessertIcon class="w-[55px] h-[55px] sm:w-[60px] sm:h-[60px] md:w-[64px] md:h-[64px] xl:w-[70px] xl:h-[70px]"></DessertIcon>
                </RouterLink>
                <div class="absolute left-1/2 transform -translate-x-1/2 bottom-full mb-2 hidden group-hover:flex items-center">
                    <div class="bg-gray-800 text-white text-xs rounded py-1 px-2">
                        Dessert ideas
                    </div>
                    <div class="border-t-8 border-t-gray-800 border-l-8 border-l-transparent border-r-8 border-r-transparent h-0 w-0"></div>
                </div>
            </div>
            <div class="relative group pt-2 w-[22.2%] lg:w-[8.5%] flex flex-grow justify-center lg:justify-left">
                <RouterLink to="/recipes">
                    <MoreIcon class="w-[26px] h-[26px] sm:w-[29px] sm:h-[29px] md:w-[32px] md:h-[32px] lg:w-[35px] lg:h-[35px]"></MoreIcon>
                </RouterLink>
                <div class="absolute left-1/2 transform -translate-x-1/2 bottom-full mb-2 hidden group-hover:flex items-center">
                    <div class="bg-gray-800 text-white text-xs rounded py-1 px-2">
                        More categories
                    </div>
                    <div class="border-t-8 border-t-gray-800 border-l-8 border-l-transparent border-r-8 border-r-transparent h-0 w-0"></div>
                </div>
            </div>
        </div>
    </div>
</template>