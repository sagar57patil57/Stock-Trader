<template>
    <div class="">
      <br>
      <div class="card">
        <div class="card-header">{{ singleStock.name }}
          <span class="float-right">$ {{ singleStock.price }}</span>
        </div>
        <div class="card-body">
          <div class="form-group">
          <div class="float-left">
            <input type="number" v-model="inputQuantity" class="form-control" placeholder="Quantity">
          </div>

          <div class="float-right">
            <button class="btn btn-primary" 
                    @click="handleSell"
                    :disabled="sellDisabled">Sell</button>
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
    handleSell: function() {

      const order = {
        stockId: this.singleStock.id,
        quantity: parseInt(this.inputQuantity),
        price: parseInt(this.singleStock.price)
      }
      this.$store.dispatch('sellStocks', order)
      this.inputQuantity = 0
      console.log(order)

    }
  },

  computed: {
    inSufficientQuantity: function(){
        return this.inputQuantity > this.stock.quantity
    },

    sellDisabled: function() {     // disable button if value<=0 or is nan
      const temp = parseInt(this.inputQuantity)
     return temp == NaN || this.inputQuantity <= 0  || this.inputQuantity > this.singleStock.quantity
    }
  }
}
</script>

<style>

</style>
