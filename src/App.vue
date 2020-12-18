<template>
  <div id="app">
    <mobile-navbar />
    <div id="nav">
      <top-header />
    </div>
    <main>
      <router-view />
    </main>
  </div>
</template>

<script>
import TopHeader from "@/components/topnav/TopHeader.vue";
import MobileNavbar from "./components/topnav/MobileNavbar.vue";
export default {
  components: {
    TopHeader,
    MobileNavbar
  }
};
</script>
<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
