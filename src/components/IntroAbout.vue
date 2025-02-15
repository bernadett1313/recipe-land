<script setup>

</script>
<template>
    <section class="w-[90%] lg:w-[80%] flex flex-col-reverse lg:flex-row justify-center items-center lg:gap-x-2 mt-3 mb-16 text-black">
        <div class="w-full lg:w-[50%] text-center -mt-4 z-40">
            <div class="w-[129%] text-center -mt-3 lg:-mt-0 -ml-10 xs:-ml-12 md:-ml-24 lg:-ml-10">
                <h2 class="font-indie font-light text-[2.2rem] xs:text-[2.8rem] sm:text-[3.4rem] md:text-[3.8rem] lg:text-[4.1rem] xl:text-[4.9rem] 2xl:text-[5.5rem]">Hi, I'm Bernadett</h2>
            </div>
            <div class="w-full lg:w-[80%] text-center lg:-mt-4 xl:mt-0 lg:ml-16">
                <p class="text-lg mb-8 lg:mb-6 xl:mb-10">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga eum aperiam dolorem. Molestiae enim ipsum nemo iure accusantium temporibus alias veniam doloremque in accusamus vel, ab quidem, nulla repellendus distinctio!</p>
                <RouterLink to="/" class="border border-[rgb(0,40,77)] px-5 py-2.5 text-[rgb(0,40,77)] text-sm font-semibold hover:bg-[rgb(0,40,77)] hover:text-white transition duration-75 ease-in-out">MORE ABOUT ME</RouterLink>
            </div>
        </div>
        <div class="w-full lg:w-[50%] z-0">
            <img src="../assets/images/about-photo3.webp" class="w-full" alt="Girl Cooking">
        </div>
    </section>

</template>