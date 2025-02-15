<script setup>
    import AsidePresentation from '../components/AsidePresentation.vue';
    import AsideSearchBar from '../components/AsideSearchBar.vue';
    import AsideSendInbox from '../components/AsideSendInbox.vue';
</script>

<template>
    <aside class="w-full lg:w-[30%] flex flex-col items-center gap-y-10 md:gap-y-14 lg:gap-y-[4.4rem] xl:gap-y-20 px-3 mb-12">
        <AsidePresentation></AsidePresentation>
        <div class="flex flex-col justify-center items-center space-y-4 text-black">
            <label for="aside-searchbar" class="uppercase text-3xl font-medium">search recipes</label>
            <AsideSearchBar class="w-full"></AsideSearchBar>
        </div>
        <AsideSendInbox></AsideSendInbox>
    </aside>
</template>