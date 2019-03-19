<template>
  <div class="top">
    <nav>
      <div class="nav-wrapper blue-grey darken-1">
        <div class="container">
          <div class="left">
            <router-link to="/">Home</router-link>
          </div>
          <div v-if="logged">
             <ul id="nav-mobile" class="right">
              <li>
              <a class="btn-floating blue"><i class="material-icons">account_circle</i></a>
              </li>
            </ul>
         </div>
          <div v-else>
            <ul id="nav-mobile" class="right">
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
export default {
  data() {
    return {
      data: ''
    }
  },
  methods: {

  },
  props: {
    logged: Boolean
  },
  mounted() {
  }
}
</script>

<style>
.top {
  overflow: hidden;
  position: absolute; /* Set the navbar to fixed position */
  top: 0; /* Position the navbar at the top of the page */
  width: 100%; /* Full width */
}
</style>
