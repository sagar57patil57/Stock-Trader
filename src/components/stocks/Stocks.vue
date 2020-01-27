<template>
  <div>
    <stock v-for="x in stocksData" :singleStock="x"></stock>
  </div>
</template>

<script>
import Stock from './Stock'

export default {
  components:{
    'stock': Stock
  },
  computed: {
    stocksData(){
      return this.$store.getters.stocks
    }
  }
}
</script>

<style>

</style>
