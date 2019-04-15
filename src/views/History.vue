<template> 
  <div>
     <ul>
       <li :key="index" v-for="(trade, index) in data">
       <div v-if="trade.status === 'offer'">
          <!-- waiting to accept request -->
          <h1>you've send a book trade request with your "{{trade.bookOffer}}" for "{{trade.bookWish}}"</h1>
        </div>
        <div v-else-if="trade.status === 'wish'">
           <!-- you receive a book trade request --> 

           <h1>You've received a trade request offering the {{trade.bookOffer}} for your {{trade.bookWish}}</h1>
        </div>
        <div v-else>
           <!-- you traded with annon --> 
           <div v-if="this.user === userOffer">
             <h1>you traded your {{trade.bookOffer}} for {{trade.bookWish}}</h1>
           </div>
           <div v-else>
             <h1>you accepted a trade of your {{trade.bookWish}} for {{trade.bookOffer}}</h1>
           </div>
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
          this.data = data.trade;
          this.user = data.user
        });
    }
  }
}
</script>

<style>

</style>
