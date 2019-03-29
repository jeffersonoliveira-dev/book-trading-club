<template>
  <div class="top">
    <nav>
      <div class="nav-wrapper blue-grey darken-1">
        <div class="container">
          <div class="left">
            <div v-if="logged">

              <router-link to="/dashboard">Home</router-link>
            </div>
            <div v-else>
              <router-link to="/"> Home</router-link>
            </div>
          </div>
          <div v-if="logged">
            <ul class="right">
              <li>
                <Menu/>
              </li>
            </ul>
          </div>
          <div v-else>
            <ul class="right">
              <li>
                <router-link to="/login">Login</router-link>
              </li>
              <li>
                <router-link to="/signup">Signup</router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import Menu from "./Menu.vue";
export default {
  name: "menuBar",
  components: {
    Menu
  },
  data() {
    return {
      data: ""
    };
  },
  methods: {
    userAuth() {
   fetch('/user/logged')
      .then(response => response.json())
      .then(data => {
        console.log('usuario logado')
        this.logged = data
      })
     
    }
  },
  props: {
    logged: Boolean
  },
  mounted() {
    this.userAuth()
  }
};
</script>

<style scoped>
.top {
  overflow: hidden;
  position: absolute; /* Set the navbar to fixed position */
  top: 0; /* Position the navbar at the top of the page */
  width: 100%; /* Full width */

}

nav{
  position: fixed;
  z-index: 4;
}

.right {
  height: 800px;
}
</style>
