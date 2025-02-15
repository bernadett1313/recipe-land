<script setup>
</script>

<template>
    <div class="flex flex-row justify-around w-full">
        <div class="flex flex-col items-center font-bold">
            <h3 class="text-md mb-1.5">QUICK LINKS</h3>
            <hr class="mb-1.5 w-[130%] border-white/60">
            <ul class="text-center text-xs leading-8">
                <li><RouterLink to="/about-me" class="font-bold hover:text-white/70 transition ease-in-out">ABOUT</RouterLink></li>
                <li><RouterLink to="/about-team" class="font-bold hover:text-white/70 transition ease-in-out">TEAM</RouterLink></li>
                <li><RouterLink to="/about-me/faq" class="font-bold hover:text-white/70 transition ease-in-out">FAQ</RouterLink></li>
                <li><RouterLink to="/cooking-tips" class="font-bold hover:text-white/70 transition ease-in-out">COOKING TIPS</RouterLink></li>
            </ul>
        </div>
        <div class="flex flex-col items-center font-bold">
            <h3 class="text-md mb-1.5">FOLLOW US</h3>
            <hr class="mb-1.5 w-[130%] border-white/60">
            <ul class="text-center text-xs leading-8">
                <li><RouterLink to="/" class="font-bold hover:text-white/70 transition ease-in-out">FACEBOOK</RouterLink></li>
                <li><RouterLink to="/" class="font-bold hover:text-white/70 transition ease-in-out">INSTAGRAM</RouterLink></li>
                <li><RouterLink to="/" class="font-bold hover:text-white/70 transition ease-in-out">PINTEREST</RouterLink></li>
                <li><RouterLink to="/" class="font-bold hover:text-white/70 transition ease-in-out">YOUTUBE</RouterLink></li>
            </ul>
        </div>
    </div>
</template>