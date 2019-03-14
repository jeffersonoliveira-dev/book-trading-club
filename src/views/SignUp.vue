<template>
  <div class="box card">
    <form id="app" @submit="checkForm" >
      <p>
        <label for="name">Full Name:</label>
        <input id="name" type="text" name="name">
      </p>

      <p>
        <label for="city">City:</label>
        <input id="city" type="text" name="city">
      </p>

      <p>
        <label for="state">State:</label>
        <input id="state" type="text" name="state">
      </p>

      <p>
        <label for="email">Email:</label>
        <input id="email" type="text" name="email">
      </p>

      <p>
        <label for="password">Password:</label>
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

      let name = document.getElementById('name').value;
      let city = document.getElementById('city').value;
      let state = document.getElementById('state').value;
      let email = document.getElementById('email').value;
      let password = document.getElementById('password').value;

      // 

      let data = {
        name,
        city,
        state,
        email,
        password
      }
      fetch('/user/register', 
            {method: 'POST',
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
             body: JSON.stringify(data)
            })
        .then( (response) => {
         // response ? this.$router.push('/login') : alert('account didnt created')
         return response.json() 
        })
        .then(data =>
        data? this.$router.push('/login') : alert('couldnt create account')
             ) 
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
