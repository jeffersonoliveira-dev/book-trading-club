<template>
  <ul class="books">
    <li :key="index" v-for="(item, index) in data">
    <BookCard :user="item.user" :books="books" :book="item.book" :name="item.name" :id="item.id"/>
    </li>
  </ul>
</template>

<script>
import BookCard from "../components/BookCard.vue";

export default {
  name: "dashboard",
  components: {
    BookCard,
  },
  data() {
    return {
      data: "",
      books: []
    };
  },
  mounted() {
    this.getBooks();
    this.$parent.isLogged()
  },
  sockets: {
    connect() {
      console.log("connected via dashboard");
    }
  },
  methods: {
    getBooks() {
      fetch("/api/books", {
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        },
        method: "get"
      })
        .then(response => response.json())
        .then(data => {
          this.data = data;
          data.map(item => {
            if(item.id === item.user) {
              this.books = [...this.books, item.book]
            }
          })
        });
    }
  }
};
</script>

<style>
ul > li {
  margin: auto;
  width: 50%;
}

.books {
  z-index: -2;
}
</style>
