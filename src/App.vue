<template>
  <div>
    <the-header></the-header>
    <div class="container">
      <div class="row">
        <router-view></router-view> <!--shows component based on url-->
      </div>
    </div>
  </div>
</template>

<script>
import TheHeader from './components/TheHeader'

export default {
  components:{
    'the-header': TheHeader
  },

  created() {
    this.$store.dispatch('initStocks')
  }
}
</script>

<style>

</style>