<template>
  <div class="top">
    <nav>
      <div class="nav-wrapper grey darken-4">
        <div class="container">
          <div class="left">
            <router-link to="/">Home</router-link>
          </div>
          <ul id="nav-mobile" class="right">
            <li>
              <router-link to="/login">Login</router-link>
            </li>
            <li>
              <router-link to="/signup">Sign Up</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {};
</script>

<style>
.top {
  overflow: hidden;
  position: absolute; /* Set the navbar to fixed position */
  top: 0; /* Position the navbar at the top of the page */
  width: 100%; /* Full width */
}
</style>
