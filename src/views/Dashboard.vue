<template>
  <div>
    {{name}}
  </div>
</template>

<script>
export default {
  data() {

    return {
      data: '',
      name: ''
    }
  },
  beforeMount() {
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
        this.name = data[0].user
        console.log(data)
      })
  }
  }
}
</script>

<style>

</style>
