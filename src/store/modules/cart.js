// src/store/modules/cart.js
export default {
  namespaced: true,
  state: () => ({
    items: [] // each item: { id, name, price, quantity }
  }),
  getters: {
    cartItems(state) {
      return state.items
    },
    totalItems(state) {
      return state.items.reduce((acc, item) => acc + item.quantity, 0)
    },
    totalPrice(state) {
      return state.items.reduce((acc, item) => acc + item.price * item.quantity, 0)
    }
  },
  mutations: {
    ADD_TO_CART(state, product) {
      const existingItem = state.items.find(item => item.id === product.id)
      if (existingItem) {
        existingItem.quantity++ // Increment quantity if already in cart
      } else {
        state.items.push({ ...product, quantity: 1 }) // Add new product with quantity 1
      }
    },
    REMOVE_ITEM(state, productId) {
      const existingItem = state.items.find(item => item.id === productId)
      if (existingItem) {
        if (existingItem.quantity > 1) {
          existingItem.quantity-- // Decrease quantity
        } else {
          state.items = state.items.filter(item => item.id !== productId) // Remove item if quantity is 1
        }
      }
    }
  },
  actions: {
    addToCart({ commit }, product) {
      commit('ADD_TO_CART', product)
    },
    removeItem({ commit }, productId) {
      commit('REMOVE_ITEM', productId)
    }
  }
}
