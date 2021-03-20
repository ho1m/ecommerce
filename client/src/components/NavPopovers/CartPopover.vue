<template>
<div class="cart__popContainer">
  <b-button id="popover-3-bottomleft" variant="transparent" class="p-0 ml-5">
    <b-icon icon="cart" scale="1.2" />
    <b-badge circle variant="dark" class="ml-1 pt-1">0</b-badge>
  </b-button>

  <b-popover
    target="popover-3-bottomleft"
    placement="bottomleft"
    triggers="hover"
    custom-class="p-2 cart__pop"
  >
    <b-list-group v-if="cart">

        <b-list-group-item class="d-flex align-items-center p-2" v-for="(product, i) in cart.products" :key="product.product._id+i" >
          <b-avatar :src="product.product.image" size="2.5em"></b-avatar>
          <div class="w-100 ml-2 d-flex align-items-center justify-content-between">
            <div class="">
              <h6 class="mb-0">{{product.product.name}}</h6>
              <p class="mb-0">{{product.product.price}}</p>
            </div>
            <p class="mb-0">x {{product.quantity}}</p>
          </div>
        </b-list-group-item>

    </b-list-group>

    <b-card
      header="TOTAL PRICE: $3956.00"
      header-tag="header"
      class="mt-3"
      body-class="p-1"
    >
      <b-button variant="primary w-100">CHECKOUT</b-button>
    </b-card>

  </b-popover>
</div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'CartPopover',
  methods: {
    ...mapActions(['getCart'])
  },
  computed: {
    ...mapGetters(['cart'])
  },
  mounted () {
    this.getCart()
  }
}
</script>

<style>
  .cart__pop {
    width: 500px !important;
  }
</style>
