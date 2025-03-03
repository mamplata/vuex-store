// src/store/modules/products.js
export default {
  namespaced: true,
  state: () => ({
    productList: [
      { id: 1, name: 'Smartphone', price: 499, image: 'https://via.placeholder.com/150?text=Smartphone' },
      { id: 2, name: 'Laptop', price: 999, image: 'https://via.placeholder.com/150?text=Laptop' },
      { id: 3, name: 'Headphones', price: 99, image: 'https://via.placeholder.com/150?text=Headphones' },
      { id: 4, name: 'Gaming Mouse', price: 59, image: 'https://via.placeholder.com/150?text=Gaming+Mouse' },
      { id: 5, name: 'Keyboard', price: 79, image: 'https://via.placeholder.com/150?text=Keyboard' },
      { id: 6, name: 'Smartwatch', price: 199, image: 'https://via.placeholder.com/150?text=Smartwatch' },
      { id: 7, name: 'Bluetooth Speaker', price: 149, image: 'https://via.placeholder.com/150?text=Speaker' },
      { id: 8, name: 'Tablet', price: 299, image: 'https://via.placeholder.com/150?text=Tablet' },
      { id: 9, name: 'External HDD', price: 89, image: 'https://via.placeholder.com/150?text=External+HDD' },
      { id: 10, name: 'Webcam', price: 69, image: 'https://via.placeholder.com/150?text=Webcam' }
    ]
  }),
  getters: {
    getAllProducts(state) {
      return state.productList
    }
  },
  mutations: {},
  actions: {}
}
