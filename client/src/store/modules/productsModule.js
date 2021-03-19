import ecomAxios from '../../ecomAxios'

const module = {
  state: () => ({
    products: [],
    selectedProduct: null
  }),
  getters: {
    products: (state) => state.products,
    selectedProduct: (state) => state.selectedProduct
  },
  mutations: {
    SET_PRODUCTS (state, products) {
      state.products = products
    },
    SET_PRODUCT (state, product) {
      state.selectedProduct = product
    },
    EMPTY_PRODUCT (state) {
      state.selectedProduct = null
    }
  },
  actions: {
    async getProducts ({ commit }) {
      try {
        const productsRes = await ecomAxios.get('/products/getall')
        commit('SET_PRODUCTS', productsRes.data)
      } catch (error) {
        console.error(error)
      }
    },
    async getProduct ({ commit }, { productId }) {
      try {
        const productRes = await ecomAxios.get(`/products/getone/${productId}`)
        commit('SET_PRODUCT', productRes.data)
      } catch (error) {
        console.error(error)
      }
    }
  }
}

export default module
