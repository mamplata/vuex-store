// src/store/modules/products.js
export default {
  namespaced: true,
  state: () => ({
    productList: [
      { id: 1, name: 'Apple', price: 2 },
      { id: 2, name: 'Banana', price: 1 },
      { id: 3, name: 'Bread', price: 3 },
      { id: 4, name: 'Cheese', price: 5 },
      { id: 5, name: 'Chicken', price: 8 },
      { id: 6, name: 'Eggs (Dozen)', price: 4 },
      { id: 7, name: 'Milk (1L)', price: 3 },
      { id: 8, name: 'Orange', price: 2 },
      { id: 9, name: 'Rice (1kg)', price: 6 },
      { id: 10, name: 'Tomato', price: 2 }
    ]
  }),
  getters: {
    getAllProducts(state) {
      return state.productList;
    }
  },
  mutations: {},
  actions: {}
}
