<template>
  <div class="product-list">
    <h2>Product List</h2>
    <div class="products-container">
      <div class="product" v-for="product in products" :key="product.id">
        <h3>{{ product.name }}</h3>
        <p>Price: ${{ product.price }}</p>
        <button @click="addItem(product)">Add to Cart</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'

const store = useStore()

const products = computed(() => store.getters['products/getAllProducts'])

function addItem(product) {
  store.dispatch('cart/addToCart', product)
}
</script>

<style scoped>
.product-list {
  margin: 1rem;
  text-align: center;
}
.products-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 3 columns */
  gap: 1rem; /* Space between grid items */
  justify-items: center;
}
.product {
  border: 1px solid #ccc;
  padding: 1rem;
  width: 200px;
  text-align: center;
  background-color: #f9f9f9;
}
button {
  margin-top: 0.5rem;
}
</style>
