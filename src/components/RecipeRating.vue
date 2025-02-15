<script setup>
    import InstagramIcon2 from '../components/icons/InstagramIcon2.vue';
    import FacebookIcon2 from '../components/icons/FacebookIcon2.vue';
    import EmailIcon from '../components/icons/EmailIcon.vue';
    import StarRating from '../components/StarRating.vue';

</script>

<template>
    <div class="flex flex-col md:flex-row md:space-x-3">
        <div class="hidden md:flex">
            <InstagramIcon2></InstagramIcon2>
        </div>
        <div class="flex flex-col space-y-1 -mt-5 md:-mt-0.5">
            <div class="flex flex-row items-center gap-x-2">
                <h3 class="text-lg lg:text-xl font-medium uppercase">Did you make this recipe and loved it?</h3>
                <InstagramIcon2 class="flex md:hidden"></InstagramIcon2>
            </div>
            <p>Give your 5 star rating here and share it with your loved ones!</p>
            <StarRating></StarRating>
        </div>
    </div>
    <div class="md:pl-3 pt-3">
        <p class="text-[1.06rem] lg:text-lg">You can also share it on Instagram, but don't forget to use the hashtag <span class="font-bold">#RecipeLand</span></p>
    </div>
    <div class="flex flex-col md:flex-row gap-y-2 md:gap-y-0 md:gap-x-2 justify-around mt-4">
        <RouterLink to="/" class="py-2 px-10 uppercase text-[0.83rem] lg:text-sm bg-[rgba(81,106,128,1)] hover:bg-[rgba(81,106,128,0.85)] transition duration-75 ease-in-out text-white rounded flex flex-row items-center"><InstagramIcon2 class="size-3"></InstagramIcon2><span class="pl-2">Share on Instagram</span></RouterLink>
        <RouterLink to="/" class="py-2 px-10 uppercase text-[0.83rem] lg:text-sm bg-[rgba(81,106,128,1)] hover:bg-[rgba(81,106,128,0.85)] transition duration-75 ease-in-out text-white rounded flex flex-row items-center"><FacebookIcon2 class="size-3"></FacebookIcon2><span class="pl-2">Share on Facebook</span></RouterLink>
        <RouterLink to="/" class="py-2 px-10 uppercase text-[0.83rem] lg:text-sm bg-[rgba(81,106,128,1)] hover:bg-[rgba(81,106,128,0.85)] transition duration-75 ease-in-out text-white rounded flex flex-row items-center"><EmailIcon class="size-3"></EmailIcon><span class="pl-2">Share by Email</span></RouterLink>
    </div>
</template>
