<template>
    <nav class="navbar navbar-expand-sm bg-primary navbar-dark">
  <ul class="navbar-nav">
    <li class="nav-item active">
      <router-link class="nav-link" to="/">Home</router-link>
    </li>
    <li class="nav-item">
      <router-link class="nav-link" to="/stocks">Stocks</router-link>
    </li>
    <li class="nav-item">
      <router-link class="nav-link" to="/portfolio">Portfolio</router-link>
    </li>
    <li class="nav-item">
      <router-link class="nav-link" to="/">save</router-link>
    </li>
    <li class="nav-item">
      <router-link class="nav-link" to="/">load</router-link>
    </li>
    <span class="navbar-text">
      Funds : {{ funds | currency }}
    </span>
  </ul>
</nav>
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