<script setup>
  import { RouterLink, RouterView } from 'vue-router'
  import LogoHeader from './components/LogoHeader.vue';
  import NavBar from './components/NavBar.vue';
  import SocialMedia from './components/SocialMedia.vue';
  import SearchBar from './components/SearchBar.vue';
  import HeaderBar from './components/HeaderBar.vue';
  import FooterSection from './components/FooterSection.vue';

</script>

<template>
  <header class="flex flex-row px-[10%] py-[1.5%]">
      <div class="w-full md:w-[32%]">
        <LogoHeader></LogoHeader>
      </div>
      <div class="w-full md:w-[68%] flex flex-col justify-center items-center">
        <div class="w-full flex flex-col md:flex-row justify-end items-center">
          <SocialMedia></SocialMedia>
          <SearchBar></SearchBar>
        </div>
        <div class="w-full flex md:justify-between md:mt-12">
          <NavBar></NavBar>
        </div>
      </div>
  </header>
  <HeaderBar></HeaderBar>
  <main class="flex flex-grow flex-col justify-center items-center mt-12 tracking-wide">
      <RouterView />
  </main>
  <footer>
    <FooterSection></FooterSection>
  </footer>
</template>

<style>
  * {
    margin: 0;
    padding: 0;
  }

  .app-container {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  main {
    flex-grow: 1;
  }
</style>
