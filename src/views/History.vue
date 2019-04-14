<template> 
  <div>
     <ul>
       <li :key="index" v-for="(trade, index) in data">
       <div v-if="id === userOffer">
          <!-- waiting to accept request -->
        </div>
        <div v-else-if="id === userWish">
           <!-- you receive a book trade request --> 
        </div>
        <div v-else>
           <!-- you traded with annon --> 
        </div>
       </li>
     </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: '',
      user: '' 
    }
  },
  mounted() {
    this.getTrades()
  },
  methods: {
    getTrades() {
      fetch("/api/trades", {
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        },
        method: "get"
      })
        .then(response => response.json())
        .then(data => {
          console.log(data)
          this.data = data.trade
          this.user = data.id
        });
 
    }
  }
}
</script>

<style>

</style>
