<template>
  <div>
    <ul>
      <li :key="index" v-for="(books, index) in data">
        <h1>{{books.user}}</h1>
        <ul>
          <li :key="index2" v-for="(books2, index2) in books">
            <h1>{{books2.books}}</h1>
          </li>
        </ul>
      </li>
    </ul>

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
        this.name = data[0].user
        console.log(data)
      })
  }
  }
}
</script>

<style>

</style>
