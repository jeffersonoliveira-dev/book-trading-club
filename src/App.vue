<template>
  <div id="app">
    <NavBar v-bind:logged="this.logged"/>
    <router-view/>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";

export default {
  name: "navbar",
  components: {
    NavBar
  },
  data() {
    return {
      logged: false
    }
  },
  methods: {
    isLogged() {
      fetch('/user/logged')
      .then(response => response.json())
      .then(data => {
        this.logged = data
      })
      
    }
  }
}
// localstorage here if the user is logged
</script>




<style scoped>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

</style>
