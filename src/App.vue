<template>
  <div id="app">
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
export default {
  components: {
    TopHeader
  }
};
</script>
<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
