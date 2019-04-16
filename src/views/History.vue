<template> 
  <div>
     <ul>
       <li :key="index" v-for="(trade, index) in data">
       <div v-if="trade.status === 'offer'">
            <div class="row">
              <div class="col s12 m12">
                <div class="card blue-grey darken-1">
                  <div class="card-content white-text">
                    <span class="card-title">
                      you've send a book trade request with your "{{trade.bookOffer}}" for "{{trade.bookWish}}"
                    </span>
                  </div>
                  <div class="col s12">
                    <button>cancel</button>

                  </div>
                </div>
              </div>
            </div>
       </div>
       <div v-else-if="trade.status === 'wish'">
           <div class="row">
              <div class="col s12 m12">
                <div class="card blue-grey darken-1">
                  <div class="card-content white-text">
                    <span class="card-title">
                      You've received a trade request offering the {{trade.bookOffer}} for your {{trade.bookWish}}
                    </span>
                  </div>
                   <div class="card-action">
                     <div class="row">
                       <div class="col s6">
                         <button>
                           accept
                         </button>
                         <button>
                           reject
                         </button>
                       </div>
                     </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
        <div v-else>
           <div v-if="this.user === userOffer">
             <div class="row">
              <div class="col s12 m12">
                <div class="card blue-grey darken-1">
                  <div class="card-content white-text">
                    <span class="card-title">
                       you traded your {{trade.bookOffer}} for {{trade.bookWish}}
                    </span>
                  </div>
                </div>
              </div>
            </div>
           </div>
           <div v-else>
             <div class="row">
              <div class="col s12 m12">
                <div class="card blue-grey darken-1">
                  <div class="card-content white-text">
                    <span class="card-title">
                      you accepted a trade of your {{trade.bookWish}} for {{trade.bookOffer}}
                    </span>
                  </div>
                </div>
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
      data: '',
      user: '' 
    }
  },
  mounted() {
    this.getTrades()
  },
  methods: {
    getTrades() {
      fetch("/api/trades", {
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        },
        method: "get"
      })
        .then(response => response.json())
        .then(data => {
          console.log(data)
          this.data = data.trade;
          this.user = data.user
        });
    }
  }
}
</script>

<style>

</style>
