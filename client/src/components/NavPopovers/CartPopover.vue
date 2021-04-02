<template>
<div class="cart__popContainer">
  <b-button id="popover-3-bottomleft" variant="transparent" class="p-0 ml-5">
    <b-icon icon="cart" scale="1.2" />
    <b-badge circle variant="dark" class="ml-1 pt-1">{{cart ? totalQuantity : 0}}</b-badge>
  </b-button>

  <b-popover
    target="popover-3-bottomleft"
    placement="bottomleft"
    triggers="hover click"
    custom-class="p-2 cart__pop"
  >
    <b-list-group v-if="cart">

        <b-list-group-item class="d-flex align-items-center p-2" v-for="(product, i) in cart.products" :key="product.product._id+i" >
          <b-avatar :src="product.product.image" size="2.5em"></b-avatar>
          <div class="w-100 ml-2 d-flex align-items-center justify-content-between">
            <div class="flex-grow-2">
              <h6 class="mb-0">{{product.product.name}} <span>x {{product.quantity}}</span></h6>
              <p class="mb-0">Price: ${{product.product.price}}</p>
            </div>
            <div class="ml-2 d-flex align-items-center">
              <div class="d-flex flex-column align-items-stretch justify-content-center mr-1">
                <!-- add to product quantity -->
                <b-button variant="transparent p-0" class="border border-1" @click="() => updateProductInCart({ type: 'add', productId: product.product._id })">
                  <b-icon icon="caret-up-fill" />
                </b-button>
                <!-- sub to product quantity --- if quantity is 1 then resolve to delete-->
                <b-button variant="transparent p-0" class="border border-1" @click="() => updateProductInCart({ type: 'sub', productId: product.product._id })">
                  <b-icon icon="caret-down-fill" />
                </b-button>
              </div>
              <!-- delete product from cart products deleteProductFromCart -->
              <b-button id="" variant="danger" @click="() => deleteProductFromCart({ productId: product.product._id })">
                <b-icon icon="trash" />
              </b-button>
            </div>
          </div>
        </b-list-group-item>

    </b-list-group>

    <b-card
      :header="`TOTAL PRICE: $${totalPrice}`"
      header-tag="header"
      class="mt-3"
      body-class="p-1"
    >
      <b-button variant="primary w-100" @click="checkout" >CHECKOUT</b-button>
    </b-card>

  </b-popover>
</div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'CartPopover',
  methods: {
    ...mapActions(['getCart', 'updateProductInCart', 'deleteProductFromCart', 'cartCheckedOut']),
    checkout () {
      if (!this.cart || !this.cart.products.length) return
      this.cartCheckedOut()
      this.$router.replace(`/checkout/success/${this.cart._id}`)
    }
  },
  computed: {
    ...mapGetters(['cart']),
    totalPrice () {
      if (!this.cart?.products.length) return 0
      return this.cart.products.map(({ product, quantity }) => product.price * quantity).reduce((a, b) => a + b, 0)
    },
    totalQuantity () {
      if (!this.cart?.products.length) return 0
      return this.cart.products.map(prod => prod.quantity).reduce((a, b) => a + b)
    }
  },
  mounted () {
    this.getCart()
    console.log(this.cart)
  }
}
</script>

<style>
  .cart__pop {
    min-width: 30% !important;
  }
</style>
