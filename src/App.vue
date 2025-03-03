<!-- src/App.vue -->
<template>
  <div id="app">
    <h1>Vue.js E-Commerce Store with Vuex</h1>
    <div class="container">
      <ProductList />
      <Cart />
    </div>
  </div>
</template>

<script setup>
import ProductList from './components/ProductList.vue'
import Cart from './components/Cart.vue'
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  margin: 2rem;
}
.container {
  display: flex;
  gap: 2rem;
}
</style>
