<script setup>
    import FooterSubscribeSection from '../components/FooterSubscribeSection.vue';
    import FooterQuickLinks from '../components/FooterQuickLinks.vue';
    import FooterCopyright from '../components/FooterCopyright.vue';
    import FooterQuickNav from '../components/FooterQuickNav.vue';
</script>

<template>
    <div class="flex flex-col lg:flex-row justify-center items-center md:justify-around w-full md:gap-x-4 lg:pl-6 xl:pl-20 py-2.5 xl:py-4 md:py-9 mt-3 bg-[rgb(0,40,77)]">
        <section class="w-[95%] lg:w-[60%] flex justify-center bg-[rgba(67,89,110,0.4)] mb-0 md:mb-7 lg:mb-0">
            <FooterSubscribeSection></FooterSubscribeSection>
        </section>
        <section class="w-[95%] lg:w-[40%] flex flex-col justify-center items-center text-white md:pr-3 lg:pr-4 mt-9 md:mt-0">
            <FooterQuickLinks></FooterQuickLinks>
            <FooterCopyright></FooterCopyright>
            <FooterQuickNav></FooterQuickNav>
        </section>
    </div>
  </template>
