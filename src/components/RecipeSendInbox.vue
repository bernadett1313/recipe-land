<script setup>
</script>

<template>
    <div class="flex flex-col">
        <h3 class="text-base md:text-lg lg:text-xl uppercase mb-4">Want to <span class="font-satisfy text-[2rem] md:text-[2.2rem] lg:text-[2.5rem] lowercase mx-1">save this delicious recipe</span> for later?</h3>
        <p class="text-base lg:text-lg mb-4">Enter your email below and we'll send it straight to your inbox! Plus, you can sign up to receive quick and easy weeknight dinners every week.</p>
        <div class="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-2 justify-center">
            <input type="text" name="email-signup" class="text-black/80 my-2 p-3.5 rounded w-[90%] md:w-[50%]" placeholder="email address">
            <RouterLink to="/" class="py-[0.96rem] px-4 uppercase text-sm bg-[rgba(81,106,128,1)] hover:bg-[rgba(81,106,128,0.85)] transition duration-75 ease-in-out text-white rounded">SIGN UP</RouterLink>
        </div>
    </div>
</template>