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
            <div v-if="isTrade === false">
              <div class="card-title col s12 m8">
                <select v-model="selected" :key="index" v-for="(userbook, index) in books">
                  <option disabled value="">Please select one of your books to trade</option>
                  <option>{{userbook}}</option>
                </select>
              </div>
            <div class="col s12 m4">
              <button class="btn blue lighten-1 trade" v-on:click="getTrade">trade</button>
            </div>
          </div>
            <div v-else>
                <div class="card-title col s12 m8">
                   <select disabled v-model="selected" :key="index" v-for="(userbook, index) in books">
                     <option disabled value="">{{bookOffer}}</option>
                   </select>
                </div>
            <div class="col s12 m4">
              <button class="btn blue lighten-1 trade" v-on:click="cancelTrade">cancel trade</button>
            </div>
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
      selected: '',
      isTrade: false,
      bookOffer: ''
    };
  },
  props: {
    name: String,
    id: String,
    book: String,
    user: String,
    books: Array,
    tradingBooks: Array
  },
  mounted() {
    this.tradingBooks.map( item => {
      if(item.bookWish === this.book) {     
        this.isTrade = true
        this.bookOffer = item.bookOffer
      }
    })
  },
  methods: {
    getTrade() {
      if(this.selected === '') {
        alert('please select one of your books to trade')
      } else {
      let newTrade = {
        userOffer: this.user,
        userWish: this.id,
        bookOffer: this.selected,
        bookWish: this.book,
        deal: {
          offer: true,
          wish: false
        }
      }
      fetch('/api/trade', {
             method: 'POST',
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({ trade: newTrade})
      }).then( (data) => { 
        alert('your trade request has been sended')
         this.isTrade = true
      })
      }
    },
    cancelTrade() {
      let bookTradeName = this.book
      fetch('/api/canceltrade', {
             method: 'POST',
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({ bookTrade: bookTradeName})
      }).then( (data) => { 
        alert('trade request has been deleted')
        this.isTrade = false
      } )

    }
  }
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
