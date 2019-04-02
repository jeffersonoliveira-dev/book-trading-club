<template> 
  <div>
     <ul>
       <li :key="index" v-for="(trade, index) in data">
       <div v-if="type === 'A'">
          A
        </div>
        <div v-else-if="type === 'B'">
          B
        </div>
        <div v-else-if="type === 'C'">
          C
        </div>
        <div v-else>
          Not A/B/C
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
      id: '' 
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
