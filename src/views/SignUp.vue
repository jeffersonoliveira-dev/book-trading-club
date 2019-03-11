<template>
  <div class="box card">
    <form id="app" @submit="checkForm" action="https://vuejs.org/" method="post">
      <p>
        <label for="name">Full Name:</label>
        <input id="name" v-model="name" type="text" name="name">
      </p>

      <p>
        <label for="city">City:</label>
        <input id="city" v-model="city" type="text" name="city">
      </p>

      <p>
        <label for="state">State:</label>
        <input id="state" v-model="state" type="text" name="state">
      </p>

      <p>
        <label for="email">Email:</label>
        <input id="email" v-model="email" type="text" name="email">
      </p>

      <p>
        <label for="age">Password:</label>
        <input id="age" v-model="password" type="password" name="password">
      </p>

      <p>
        <input type="submit" value="Enviar">
      </p>
    </form>
  </div>
</template>

<script>
export default {};
</script>

<style>
.box {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  padding: 30px;
}
</style>
