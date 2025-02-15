<script setup>
    import ArrowIcon from '../components/icons/ArrowIcon.vue';

    function scrollToTop(event) {
        event.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth' 
        });
    }
</script>

<template>
    <div class="mt-2">
        <ul class="flex flex-row space-x-1.5 md:space-x-3 text-xs">
            <li><ArrowIcon class="bg-white"></ArrowIcon><a href="#" @click="scrollToTop" class="font-semibold text-white/70 hover:text-white underline transition ease-in-out">TOP</a></li>
            <li class="text-white/70">/</li>
            <li><RouterLink to="/" class="font-semibold text-white/70 hover:text-white underline transition ease-in-out">HOME</RouterLink></li>
            <li class="text-white/70">/</li>
            <li><RouterLink to="/about-me" class="font-semibold text-white/70 hover:text-white underline transition ease-in-out">ABOUT</RouterLink></li>
            <li class="text-white/70">/</li>
            <li><RouterLink to="/recipes" class="font-semibold text-white/70 hover:text-white underline transition ease-in-out">BROWSE RECIPES</RouterLink></li>
            <li class="text-white/70">/</li>
            <li><RouterLink to="/about-team" class="font-semibold text-white/70 hover:text-white underline transition ease-in-out">OUR TEAM</RouterLink></li>
        </ul>
    </div>
</template>