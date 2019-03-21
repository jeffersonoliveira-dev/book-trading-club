<template>
  <ul>
    <li :key="index" v-for="(item, index) in data">
      <BookCard :book="item.book" :name="item.name" :id="item.id"/>
    </li>
  </ul>
</template>

<script>
import BookCard from "../components/BookCard.vue";

export default {
  name: "bookcard",
  components: {
    BookCard
  },
  data() {
    return {
      data: "",
      books: ""
    };
  },
  beforeMount() {
    this.getBooks();
    console.log(this.$parent.isLogged());
  },
  sockets: {
    connect() {
      console.log("socket client connected");
    }
  },
  methods: {
    getBooks() {
      fetch("/api/books", {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        method: "get"
      })
        .then(response => response.json())
        .then(data => {
          this.data = data;
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
</style>
