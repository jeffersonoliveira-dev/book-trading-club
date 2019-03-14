<template>
  <div>
    {{data[0].user}}
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
  this.getBooks()
  },
  methods: {
    getBooks() {
      fetch('/api/books',{
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: 'get',
      }).then(response => response.json())
      .then( data => {
        this.data = data
      })
  }
  }
}
</script>

<style>

</style>
