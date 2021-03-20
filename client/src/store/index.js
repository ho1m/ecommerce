import Vue from 'vue'
import Vuex from 'vuex'
import ecomAxios from '../ecomAxios'
import productsModule from './modules/productsModule'
import cartsModule from './modules/cartsModule'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: null,
    token: null,
    currentCart: ''
  },
  getters: {
    user: (state) => state.user,
    token: (state) => state.token,
    currentCart: (state) => state.currentCart
  },
  mutations: {
    SET_USER (state, user) {
      state.user = user
    },
    SET_TOKEN (state, token) {
      state.token = token
    },
    SET_CURRENT_CART (state, cartid) {
      state.currentCart = cartid
    },
    SIGNOUT (state) {
      state.user = null
      state.token = null
      state.currentCart = ''
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
    productsModule,
    cartsModule
  }
})
