import ecomAxios from '../../ecomAxios'

const module = {
  state: () => ({
    cart: null
  }),
  getters: {
    cart: (state) => state.cart
  },
  mutations: {
    SET_CART (state, cart) {
      state.cart = cart
    }
  },
  actions: {
    async getCart ({ commit, rootState }) {
      if (!rootState.currentCart) return
      try {
        const cartRes = await ecomAxios.get(`/carts/one/${rootState.currentCart}`)
        commit('SET_CART', cartRes.data)
      } catch (error) {
        console.error(error)
      }
    },
    async updateProductInCart ({ commit, rootState }, { type, productId }) {
      try {
        if (!rootState.currentCart) return
        const cartRes = await ecomAxios.patch(`/carts/${rootState.currentCart}/products/${productId}/${type}`)
        console.log(cartRes)
        // getCart again?
      } catch (error) {
        console.error(error)
      }
    },
    async addProductToCart ({ commit, rootState, dispatch, rootActions }, { product: { _id, name, desc, shortDesc, image, price, category } }) {
      try {
        const cartId = rootState.currentCart
        const product = {
          _id, name, desc, shortDesc, image, price, category
        }
        if (!cartId) {
          dispatch('createCart', { product })
        } else {
          // if already in cart just raise using updateProductInCart
          const cartRes = await ecomAxios.patch(`/carts/${cartId}/products/create`, product)
          console.log(cartRes, 'addProductToCart ACTION')
        }
        dispatch('getCart')
      } catch (error) {
        console.error(error)
      }
    },
    async createCart ({ commit, rootState, dispatch }, { product }) {
      try {
        const cartRes = await ecomAxios.post('/carts/create', {
          user_id: rootState.user ? rootState.user._id : '',
          products: [{ product, quantity: 1 }]
        })
        console.log(cartRes.data._id, 'createCart ACTION')
        // set current_cart + in user
        if (rootState.user) dispatch('addCurrentCart', { cartId: cartRes.data._id })
        rootState.currentCart = cartRes.data._id
      } catch (error) {
        console.error(error)
      }
    }
  }
}

export default module
