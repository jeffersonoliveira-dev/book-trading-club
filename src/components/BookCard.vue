<template>
  <div class="row">
    <div class="col s12 m12">
      <div class="card blue-grey darken-1">
        <div class="card-content white-text">
          <span class="card-title">{{ book }}</span>
        </div>
         <div class="card-action">
          <a href="#">{{name}}</a>
        </div>
        <div v-if="user !== id">
          <div class="row tradeBox">
            <div class="card-title col s8 m8">
              <select v-model="selected" :key="index" v-for="(userbook, index) in books">
                <option disabled value="">Please select one of your books to trade</option>
                <option>{{userbook}}</option>
              </select>
            </div>
            <div class="col s4 m4">
              <button class="btn blue lighten-1 trade">trade</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: "",
      selected: ''
    };
  },
  props: {
    name: String,
    id: String,
    book: String,
    user: String,
    books: Array,
  },

};
</script>

<style scoped>
.row {
  z-index: -3;
}

select {
  display: block;
  width: 80%;
  margin: auto;
  font-size: medium;
  height: 35px;
}

.trade {
  width: 80%;
}

.tradeBox {
  height: 45px;
}
</style>
