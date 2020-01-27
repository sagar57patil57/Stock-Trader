<template>
  <div>
    <stock v-for="x in stocks" :singleStock="x"></stock>
  </div>
</template>

<script>
import Stock from './Stock'
import {mapGetters} from 'vuex'

export default {
  components:{
    'stock': Stock
  },
  computed: {
    stocks(){
      return this.$store.getters.stockPortfolio
    }
  }
}
</script>

<style>

</style>
