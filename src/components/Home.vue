<template>
  <div id="app">
    {{ funds | currency }}
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  computed: {
    ...mapGetters(['funds'])
  }  
}
</script>

<style>

</style>
