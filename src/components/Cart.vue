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
          <td>{{ item.quantity }}</td>
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

const cartItems = computed(() => store.getters['cart/cartItems'])
const totalItems = computed(() => store.getters['cart/totalItems'])
const totalPrice = computed(() => store.getters['cart/totalPrice'])

// Remove item (decrease quantity, remove if only 1 left)
function removeItem(productId) {
  store.dispatch('cart/removeItem', productId)
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
button {
  padding: 0.25rem 0.5rem;
}
.cart-summary {
  margin-top: 1rem;
  font-weight: bold;
}
</style>
