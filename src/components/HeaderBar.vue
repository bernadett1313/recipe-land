<script setup>
    import ArrowIcon from '../components/icons/ArrowIcon.vue';
</script>

<template>
    <div class="w-full flex flex-col md:flex-row space-y-2 sm:space-y-6 md:space-y-0 justify-center items-center -mt-2 md:mt-0 pt-3.5 pb-5 sm:py-6 md:py-8 mx-0 px-3 bg-[rgb(0,40,77)] text-white font-bold">
        <div class="flex flex-row items-center">
            <p class="text-[0.65rem] xs:text-xs sm:text-sm">GET OUR <span class="px-1 sm:px-2 font-satisfy text-[1.7rem] xs:text-[2rem] sm:text-[2.5rem]">latest recipes</span> RIGHT IN YOUR INBOX:</p>
        </div>
        <div class="flex flex-row items-center gap-x-3">
            <input type="text" class="px-1.5 py-1 sm:px-2 sm:py-2 md:py-3.5 ml-2 font-normal" name="subscription" id="subscription" placeholder="email address">
            <a href="" class="font-bold text-sm sm:text-base underline underline-offset-4">SIGN UP<ArrowIcon class="size-[16px]"></ArrowIcon></a>
        </div>
    </div>
</template>
