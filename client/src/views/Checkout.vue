<template>
  <div class="checkout flex-fill d-flex align-items-center justify-content-center py-5">
    <b-container>
    <h3 class="text-center">Thank you for your purchase!</h3>
    <p class="text-center">Order Number: ({{cartid}})</p>
    <b-card>
      <b-card-header class="rounded mx-3" v-if="order_data">
        ${{order_data.total_price}}
      </b-card-header>
      <b-card-body v-if="order_data">
        <b-list-group>

          <b-list-group-item class="d-flex" v-for="product in order_data.products" :key="product.product._id">
            <b-avatar :src="product.product.image" size="5em"></b-avatar>
            <div class="flex-fill ml-3">
              <div class="d-flex w-100 justify-content-between">
                <h5 class="mb-1">{{product.product.name}}</h5>
                <small>x {{product.quantity}}</small>
              </div>

              <p class="mb-1">
                {{product.product.shortDesc}}
              </p>

              <small>${{product.product.price}}</small>
            </div>
          </b-list-group-item>

        </b-list-group>
      </b-card-body>
    </b-card>
    </b-container>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Checkout',
  props: ['cartid'],
  data () {
    return {
      order_data: null
    }
  },
  computed: {
    ...mapGetters(['cart'])
  },
  mounted () {
    console.log(this.cart)
    this.order_data = {
      products: this.cart.products,
      total_price: this.cart.products.map(({ product, quantity }) => product.price * quantity).reduce((a, b) => a + b, 0)
    }
  }
}
</script>

<style>

</style>
