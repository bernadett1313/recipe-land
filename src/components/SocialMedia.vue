<script setup>
import FacebookIcon from './icons/FacebookIcon.vue';
import InstagramIcon from './icons/InstagramIcon.vue';
import PinterestIcon from './icons/PinterestIcon.vue';
import TwitterIcon from './icons/TwitterIcon.vue';
import YoutubeIcon from './icons/YoutubeIcon.vue';

</script>

<template>
    <ul class="hidden lg:flex lg:flex-row">
        <li><RouterLink to=""><FacebookIcon class="w-[21px] h-[21px] md:w-[24px] md:h-[24px] lg:w-[28px] lg:h-[28px] mr-3"></FacebookIcon></RouterLink></li>
        <li><RouterLink to=""><InstagramIcon class="w-[21px] h-[21px] md:w-[24px] md:h-[24px] lg:w-[28px] lg:h-[28px] mr-3"></InstagramIcon></RouterLink></li>
        <li><RouterLink to=""><PinterestIcon class="w-[21px] h-[21px] md:w-[24px] md:h-[24px] lg:w-[28px] lg:h-[28px] mr-3"></PinterestIcon></RouterLink></li>
        <li><RouterLink to=""><TwitterIcon class="w-[21px] h-[21px] md:w-[24px] md:h-[24px] lg:w-[28px] lg:h-[28px] mr-3"></TwitterIcon></RouterLink></li>
        <li><RouterLink to=""><YoutubeIcon class="w-[21px] h-[21px] md:w-[24px] md:h-[24px] lg:w-[28px] lg:h-[28px] mr-3"></YoutubeIcon></RouterLink></li>
    </ul>
</template>
