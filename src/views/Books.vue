<template>
  <div class="container">
    <ul>
      <li v-for="(book, index) in books" :key="index">
           <div class="row">
            <div class="col s12 m12">
              <div class="card blue-grey darken-1">
                <div class="card-content white-text">
                  <button class="btn-floating right" v-on:click="removeUserBook">X</button>
                  <span class="card-title">{{ book }}</span>
                </div>
              </div>
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
    },
    removeUserBook() {
      console.log('hey')
    }
  }
}
</script>

<style scoped>
ul > li{
  width: 50%;
  margin: auto;
}

</style>
