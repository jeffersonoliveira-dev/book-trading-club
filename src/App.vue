<template>
  <div id="app">
    <NavBar/>
    <img src="https://wallpapers.wallhaven.cc/wallpapers/full/wallhaven-397393.jpg">
    <router-view/>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";

export default {
  name: "navbar",
  components: {
    NavBar
  }
};
</script>




<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

img {
  width: 100%;
  height: 100vh;
  z-index: -1;
}
</style>
