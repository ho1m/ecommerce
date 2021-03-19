import Vue from 'vue'
import Vuex from 'vuex'
import ecomAxios from '../ecomAxios'
import productsModule from './modules/productsModule'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: null,
    token: null,
    current_cart: ''
  },
  getters: {
    user: (state) => state.user,
    token: (state) => state.token,
    current_cart: (state) => state.current_cart
  },
  mutations: {
    SET_USER (state, user) {
      state.user = user
    },
    SET_TOKEN (state, token) {
      state.token = token
    },
    SET_CURRENT_CART (state, cartid) {
      state.current_cart = cartid
    },
    SIGNOUT (state) {
      state.user = null
      state.token = null
      state.current_cart = ''
    }
  },
  actions: {
    async login ({ commit }, { loginData }) {
      try {
        const loginRes = await ecomAxios.post('/users/login', loginData)
        const { user, token, currentCart } = loginRes.data

        commit('SET_USER', user)
        commit('SET_TOKEN', token)
        commit('SET_CURRENT_CART', currentCart)
      } catch (error) {
        console.error(error)
      }
    },
    async register ({ commit }, { registerData }) {
      try {
        await ecomAxios.post('/users/register', registerData)
      } catch (error) {
        console.error(error)
      }
    }
  },
  modules: {
    productsModule
  }
})
