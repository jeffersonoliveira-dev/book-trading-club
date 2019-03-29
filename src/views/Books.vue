<template>
  <div class="container">
    <!-- add input to add book api -->
    <div class="row inputBox">
      <form v-on:submit.prevent="addUserBook">
            <div class="col s12 m12">
              <div class="card blue-grey darken-1">
                <div class="card-content white-text">
                  <input id="book" type="text" placeholder="add book's name" >
                </div>
                 <div class="card-action">
                <button class="btn ">add book</button>
                </div>
              </div>
            </div>
      </form>
     </div>
    <ul>
      <li v-for="(book, index) in books" :key="index">
           <div class="row">
            <div class="col s12 m12">
              <div class="card blue-grey darken-1">
                <div class="card-content white-text">
                  <button class="btn-floating right" 
                    v-on:click="removeUserBook(index)">X</button>
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
  name: 'books',
  data() {
    return {
      books: [],
      msg: ''
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
      })
      this.$socket.emit('testing', 'emiting via client')
    },
    removeUserBook(index) {
      console.log('hey')
      let newBooks = this.books.filter( (book, bookIndex) => bookIndex !== index )
      fetch('/api/remove', {
             method: 'POST',
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({books : newBooks})
      }).then( (data) => { 
        return data.json()           
      } )
      console.log('book deleted')
      this.books = newBooks
      // remove func
    },
    addUserBook() {
      let newBook = document.getElementById('book').value
      fetch('/api/add', {
             method: 'POST',
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({book : newBook})
      }).then( (data) => { 
        return data.json()           
      } )
      .then( data => {
        this.books = data
      } )
            // introduzir websocket
      document.getElementById('book').value = ''
    }
  }
}
</script>

<style scoped>
ul > li{
  width: 50%;
  margin: auto;
}

.inputBox {
  width: 50%;
  margin: auto;
}

</style>
