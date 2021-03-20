import ecomAxios from '../../ecomAxios'

const module = {
  state: () => ({
    // products: [],
    // selectedProduct: null
  }),
  getters: {
    // products: (state) => state.products,
    // selectedProduct: (state) => state.selectedProduct
  },
  mutations: {
    // SET_PRODUCTS (state, products) {
    //   state.products = products
    // },
    // SET_PRODUCT (state, product) {
    //   state.selectedProduct = product
    // },
    // EMPTY_PRODUCT (state) {
    //   state.selectedProduct = null
    // }
  },
  actions: {
    // async getProducts ({ commit }) {
    //   try {
    //     const productsRes = await ecomAxios.get('/products/getall')
    //     commit('SET_PRODUCTS', productsRes.data)
    //   } catch (error) {
    //     console.error(error)
    //   }
    // },
    async getCart ({ commit, rootState }) {
      if (!rootState.currentCart) return
      try {
        const cartRes = await ecomAxios.get(`/carts/one/${rootState.currentCart}`)
        console.log(cartRes)
        // commit('SET_CART', cartRes.data)
      } catch (error) {
        console.error(error)
      }
    },
    async addProduct ({ commit, rootState }, { type, product }) {
      try {
        const cartId = rootState.currentCart
        if (!cartId) this.createCart()
        const cartRes = await ecomAxios.patch(`/carts/one/${cartId}/${type}`, product)
        console.log(cartRes)
        // getCart again?
      } catch (error) {
        console.error(error)
      }
    },
    async createCart ({ commit, rootState }) {
      try {
        const cartRes = await ecomAxios.post('/carts/create', {
          user_id: rootState.user ? rootState.user._id : ''
        })
        console.log(cartRes)
        // set new cart id from res
      } catch (error) {
        console.error(error)
      }
    }
  }
}

export default module
