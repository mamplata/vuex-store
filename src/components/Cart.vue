<!-- src/components/Cart.vue -->
<template>
  <div class="cart">
    <h2>Your Cart</h2>
    <p v-if="cartItems.length === 0">No items in cart.</p>

    <table v-else>
      <thead>
        <tr>
          <th>Product</th>
          <th>Price (each)</th>
          <th>Quantity</th>
          <th>Subtotal</th>
          <th>Remove</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in cartItems" :key="item.id">
          <td>{{ item.name }}</td>
          <td>${{ item.price }}</td>
          <td>
            <button @click="decrement(item.id, item.quantity)">–</button>
            <span class="quantity">{{ item.quantity }}</span>
            <button @click="increment(item.id, item.quantity)">+</button>
          </td>
          <td>${{ item.price * item.quantity }}</td>
          <td>
            <button @click="removeItem(item.id)">Remove</button>
          </td>
        </tr>
      </tbody>
    </table>

    <div class="cart-summary" v-if="cartItems.length > 0">
      <p>Total Items: {{ totalItems }}</p>
      <p>Total Price: ${{ totalPrice }}</p>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'

const store = useStore()

// Computed properties to access cart state
const cartItems = computed(() => store.getters['cart/cartItems'])
const totalItems = computed(() => store.getters['cart/totalItems'])
const totalPrice = computed(() => store.getters['cart/totalPrice'])

// Function to remove an item from the cart
function removeItem(productId) {
  store.dispatch('cart/removeItem', productId)
}

// Function to decrement quantity; if quantity becomes 0, the item is removed
function decrement(productId, currentQuantity) {
  if (currentQuantity == 1) {
   return;
  }
  const newQuantity = currentQuantity - 1
  store.dispatch('cart/updateQuantity', { productId, quantity: newQuantity })
}

// Function to increment quantity
function increment(productId, currentQuantity) {
  const newQuantity = currentQuantity + 1
  store.dispatch('cart/updateQuantity', { productId, quantity: newQuantity })
}
</script>

<style scoped>
.cart {
  margin: 1rem;
}
table {
  border-collapse: collapse;
  width: 100%;
  margin-bottom: 1rem;
}
th, td {
  border: 1px solid #ccc;
  padding: 0.5rem;
  text-align: center;
}
.quantity {
  margin: 0 0.5rem;
  font-weight: bold;
}
button {
  padding: 0.25rem 0.5rem;
}
.cart-summary {
  margin-top: 1rem;
  font-weight: bold;
}
</style>
