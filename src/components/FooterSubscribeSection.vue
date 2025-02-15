<script setup>

</script>

<template>
    <div class="flex flex-col md:flex-row justify-center items-center w-full">
        <div class="w-full md:w-[39%] h-[360px] overflow-hidden">
            <img src="../assets/images/recipe1.jpg" class="object-cover h-full w-full" alt="Recipe photo">
        </div>
        <div class="w-[90%] md:w-[59%] flex flex-col justify-center items-center text-center mx-3 md:mx-6 my-6 md:my-12 text-white">
            <p class="font-satisfy text-3xl font-bold mb-2">Want more delicious recipes?</p>
            <p class="mb-4">Sign up for FREE and we´ll provide you with weekly recipes right in your inbox so you can try different types of food every week.</p>
            <input type="text" name="footer-subs" id="footer-subs" class="text-black/80 w-full my-2 p-3 rounded" placeholder="email address">
            <button class="w-full p-3 mt-1 bg-[rgba(81,106,128,1)] hover:bg-[rgba(81,106,128,0.85)] transition duration-75 ease-in-out text-white rounded">SUBSCRIBE</button>
        </div>
    </div>
</template>