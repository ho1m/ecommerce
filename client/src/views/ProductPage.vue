<template>
  <div class="productPage flex-fill" v-if="selectedProduct">
    <b-container class="row mx-auto my-5 px-0">
      <div class="img__container col-6 rounded">
        <img :src="selectedProduct.image" alt="">
      </div>
      <div class="product__text col-6 py-5">
        <h2>{{selectedProduct.name}}</h2>

        <p class="mt-2 mb-4">
          {{selectedProduct.shortDesc}}
        </p>

        <h4 class="mb-3">
          {{selectedProduct.desc}}
        </h4>

        <h4 class="mb-3">
          ${{selectedProduct.price}}
        </h4>

        <b-button
        variant="primary"
        class="mt-3"
        @click="addProduct"
        >Add To Cart</b-button>
      </div>
    </b-container>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'ProductPage',
  props: ['productId'],
  computed: {
    ...mapGetters(['selectedProduct'])
  },
  methods: {
    ...mapActions(['getProduct', 'addProductToCart']),
    addProduct () {
      this.addProductToCart({ product: this.selectedProduct })
    }
  },
  mounted () {
    this.getProduct({ productId: this.productId })
  },
  destroyed () {
    this.$store.commit('EMPTY_PRODUCT')
  }
}
</script>

<style scoped>
.img__container {
  overflow: hidden;
  max-height: 500px;
}
</style>
