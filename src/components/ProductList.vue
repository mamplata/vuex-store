<!-- src/components/ProductList.vue -->
<template>
  <div class="product-list">
    <h2>Product List</h2>
    <div class="products" v-for="product in products" :key="product.id">
      <img :src="product.image" :alt="product.name" />
      <h3>{{ product.name }}</h3>
      <p>Price: ${{ product.price }}</p>
      <button @click="addItem(product)">Add to Cart</button>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'

const store = useStore()

// Access the products from the Vuex module using a computed property
const products = computed(() => store.getters['products/getAllProducts'])

// Dispatch the action to add the product to the cart
function addItem(product) {
  store.dispatch('cart/addToCart', product)
}
</script>

<style scoped>
.product-list {
  margin: 1rem;
}
.products {
  border: 1px solid #ccc;
  padding: 1rem;
  margin-bottom: 1rem;
  display: inline-block;
  width: 200px;
  text-align: center;
}
img {
  max-width: 100%;
  height: auto;
}
button {
  margin-top: 0.5rem;
}
</style>
