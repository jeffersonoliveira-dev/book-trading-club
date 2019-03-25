<template>
  <div>
    <ul>
      <li v-for="(book, index) in books" :key="index">
        <h1>{{ book }}</h1>   
        <!-- put everything on cards -->
      </li>
    </ul>
  </div>

</template>

<script>
export default {
  data() {
    return {
      books: []
    }
  },
  beforeMount() {
    this.getUserBooks()
  },
  methods: {
    getUserBooks() {
      fetch('/api/userbooks')
      .then(response => response.json())
      .then(data => {
        this.books = data
        console.log(this.books)
      })
    }
  }
}
</script>

<style>

</style>
