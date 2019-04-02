<template> 
  <div>
    <h1>this is history</h1> 
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: ''
    }
  },
  mounted() {

  },
  methods: {
    getTrades() {
      fetch('/trades')
    }
  }
}
</script>

<style>

</style>
