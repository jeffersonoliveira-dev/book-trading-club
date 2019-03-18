
<template>
</template>

<script>
// redesign api to send a list with the books and obj even if repeats the name of the user
export default {
  data() {

    return {
      data: '',
      books: ''
    }
  },
  beforeMount() {
  this.getBooks()
  },
  sockets: {
    connect() {
      console.log('socket client connected')
    },
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
        this.books = data.books
        console.log(data)
      })
  }
  }
}
</script>

<style>

</style>
