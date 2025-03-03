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
        existingItem.quantity++
      } else {
        state.items.push({ ...product, quantity: 1 })
      }
    },
    REMOVE_ITEM(state, productId) {
      state.items = state.items.filter(item => item.id !== productId)
    },
    UPDATE_QUANTITY(state, { productId, quantity }) {
      const cartItem = state.items.find(item => item.id === productId)
      if (cartItem) {
        cartItem.quantity = quantity
        if (cartItem.quantity <= 0) {
          state.items = state.items.filter(item => item.id !== productId)
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
    },
    updateQuantity({ commit }, payload) {
      commit('UPDATE_QUANTITY', payload)
    }
  }
}
