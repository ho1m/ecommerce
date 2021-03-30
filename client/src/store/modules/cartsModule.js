import ecomAxios from '../../ecomAxios'

const module = {
  state: () => ({
    cart: null,
    orders: []
  }),
  getters: {
    cart: (state) => state.cart,
    orders: (state) => state.orders
  },
  mutations: {
    SET_CART (state, cart) {
      state.cart = cart
    },
    SET_ORDERS (state, orders) {
      state.orders = orders
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
    async updateProductInCart ({ commit, state, rootState, dispatch }, { type, productId }) {
      try {
        if (!rootState.currentCart) return
        if (state.cart.products.find(({ product }) => product._id === productId).quantity === 1 && type === 'sub') {
          dispatch('deleteProductFromCart', { productId })
        } else {
          await ecomAxios.patch(`/carts/${rootState.currentCart}/products/${productId}/${type}`)
        }
        dispatch('getCart')
      } catch (error) {
        console.error(error)
      }
    },
    async deleteProductFromCart ({ rootState, dispatch }, { productId }) {
      try {
        await ecomAxios.delete(`/carts/${rootState.currentCart}/products/${productId}`)
        dispatch('getCart')
      } catch (error) {
        console.error(error)
      }
    },
    async addProductToCart ({ commit, rootState, state, dispatch, rootActions }, { product: { _id, name, desc, shortDesc, image, price, category } }) {
      try {
        const cartId = rootState.currentCart
        const product = {
          _id, name, desc, shortDesc, image, price, category
        }
        if (!cartId) {
          dispatch('createCart', { product })
        } else {
          if (state.cart.products.find(({ product }) => product._id === _id)) {
            dispatch('updateProductInCart', { type: 'add', productId: _id })
          } else {
            await ecomAxios.patch(`/carts/${cartId}/products/create`, product)
          }
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
        if (rootState.user) dispatch('updateUserCurrentCart', { cartId: cartRes.data._id })
        rootState.currentCart = cartRes.data._id
        dispatch('getCart')
      } catch (error) {
        console.error(error)
      }
    },
    async cartCheckedOut ({ dispatch, commit, state, rootState }) {
      try {
        if (!rootState.currentCart) return
        await ecomAxios.patch(`/carts/checkedout/${rootState.currentCart}`)
        if (rootState.user) {
          dispatch('updateUserCurrentCart', { cartId: '' })
          dispatch('getCheckedoutCarts')
        }
        state.cart = null
        commit('REMOVE_CURRENT_CART', null, { root: true })
        dispatch('getCart')
      } catch (error) {
        console.error(error)
      }
    },
    async getCheckedoutCarts ({ commit, rootState }) {
      try {
        if (!rootState.user) return
        const res = await ecomAxios.get(`/carts/checkedout/${rootState.user._id}`, {
          headers: {
            authorization: `Bearer ${rootState.token}`
          }
        })
        commit('SET_ORDERS', res.data)
      } catch (error) {
        console.error(error)
      }
    }
  }
}

export default module
