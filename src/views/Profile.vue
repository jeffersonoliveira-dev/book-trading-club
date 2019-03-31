<template>
  <div class="card" style="margin-top: 200px;">
      <div class="row">
          <form class="col s12" v-on:submit.prevent="updateProfile">
            <div class="row">
              <div class="input-field col s12">
                <i class="material-icons prefix">account_circle</i>
                <input id="name" type="text" :value="user.name" class="validate">
                <label for="icon_prefix" class="active">Full Name</label>
              </div>
             <div class="input-field col s12">
              <i class="material-icons prefix">store</i>
              <input id="city" type="text" class="validate " :value="user.city">
               <label for="icon_telephone" class="active">City</label>
             </div>
             <div class="input-field col s12">
               <i class="material-icons prefix">location_city</i>
               <input id="state" type="text" class="validate" :value="user.state">
               <label for="icon_telephone" class="active">State</label>
             </div>
           </div>
           <div class="col s12">
              <button class="btn blue">SAVE</button>
           </div>
         </form>
      </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: ''
    }
  },
  mounted() {
    this.getProfile()
  },
  methods: {
    getProfile() {
      fetch('/api/profile')
      .then((data) => data.json())
      .then( data => {
        this.user = data 
      } )
    },
    updateProfile() {
      let name = document.getElementById('name').value,
      city = document.getElementById('city').value,
      state = document.getElementById('state').value
      let newProfile = {
        name: name ,
        city: city,
        state: state
      }
      console.log('working')

      fetch('/api/profile', {
          method: "POST",
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(newProfile)
      })
      alert('settings updated!')
    }
  }
}
</script>

<style scoped>

.card {
  margin-top: 200px;
  height: 350px;
  width: 50%;
  margin: auto;
}

form {
  margin-top: 20px;
}

.row {
  width: 70%;
  margin: auto;
}
</style>
