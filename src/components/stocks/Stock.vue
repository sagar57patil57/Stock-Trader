<template>
    <div class="">
      <br>
      <div class="card">
        <div class="card-header">{{ singleStock.name }}
        </div>
        <div class="card-body">
          <div class="form-group">
          <div class="float-left">
            <input type="number" v-model="inputQuantity" class="form-control" placeholder="Quantity">
          </div>

          <div class="float-right">
            <button class="btn btn-primary" 
                    @click="handleBuy"
                    :disabled="buyDisabled">Buy</button>
          </div>  <!-- disabled directive = condition -->
        </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  props: ['singleStock'],
  
  data(){
    return{
      inputQuantity: 0
    }
  },

  methods: {
    handleBuy: function() {

      const order = {
        stockId: this.singleStock.id,
        quantity: parseInt(this.inputQuantity),
        price: parseInt(this.singleStock.price)
      }
      this.$store.dispatch('buyStocks', order)
      console.log(order)

    }
  },

  computed: {
    inSufficientFunds: function(){
        return this.inputQuantity * this.singleStock.price > this.$store.getters.funds
    },

    buyDisabled: function() {     // disable button if value<=0 or is nan
      const temp = parseInt(this.inputQuantity)
     return temp == NaN || this.inputQuantity <= 0 || this.inputQuantity * this.singleStock.price > this.$store.getters.funds
    }
  }
}
</script>

<style>

</style>
