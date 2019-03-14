<template>
  <div class="box card">
    <form id="app" @submit="checkForm" action="https://vuejs.org/" method="post">
      <p>
        <label for="email">email</label>
        <input id="email"  type="text" name="email">
      </p>

      <p>
        <label for="password">password</label>
        <input id="password" type="password" name="password">
      </p>

      <p>
        <input type="submit" value="Enviar">
      </p>
    </form>
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
    checkForm(e) {
      e.preventDefault()

      let email = document.getElementById('email').value
      let password = document.getElementById('password').value
      let data = {
        email,
        password
      }
      fetch('/user/login',
      {
        method: 'POST',
        headers: {
          'Accept' : 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      }
           )
           .then(response => {
             if(response.status === 401) {
               return alert('wrong password/email')
             } else {
               this.$router.push('dashboard')
             }
           } )
    }
  }
};
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
