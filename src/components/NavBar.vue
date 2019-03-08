<template>
<div class="top">
    <nav>
    <div class="nav-wrapper light-blue lighten-4">
      <div class="left">
          <router-link to="/"> Home </router-link>
      </div>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li><router-link to="/login"> Login </router-link></li>
      </ul>
    </div>
  </nav>
</div>
</template>

<script>
export default {

};
</script>

<style>
.top {
  overflow: hidden;
  background-color: #333;
  position: absolute; /* Set the navbar to fixed position */
  top: 0; /* Position the navbar at the top of the page */
  width: 100%; /* Full width */
}
</style>
