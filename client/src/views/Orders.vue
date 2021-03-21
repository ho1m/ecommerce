<template>
  <div class="order__container d-flex align-items-center justify-content-center flex-column flex-fill py-5">
    <b-container class=" orders">
    <h3 class="align-self-start">Orders</h3>
    <template class="w-100">
      <div class="accordion w-100" role="tablist">

        <b-card no-body class="mb-1" v-for="order in list" :key="order._id">
          <b-card-header header-tag="header" class="p-1" role="tab">
            <b-button block v-b-toggle="`accordion-${order._id}`" variant="dark">
              ORDER #{{order._id}} • {{order.updatedAt | moment("dddd, MMMM Do YYYY") }} • TOTAL PRICE: ${{totalPrice(order.products)}}
            </b-button>
          </b-card-header>
          <b-collapse :id="`accordion-${order._id}`" accordion="my-accordion" role="tabpanel">
            <b-card-body>
              <b-list-group>

                <b-list-group-item class="d-flex" v-for="product in order.products" :key="product.product._id">
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
          </b-collapse>
        </b-card>

        <!-- <b-card no-body class="mb-1">
          <b-card-header header-tag="header" class="p-1" role="tab">
            <b-button block v-b-toggle.accordion-2 variant="dark">
              ORDER #19292B330 • 2010-10-12 • TOTAL PRICE: $22902
            </b-button>
          </b-card-header>
          <b-collapse id="accordion-2" accordion="my-accordion" role="tabpanel">
            <b-card-body>
              <b-card-text>{{ text }}</b-card-text>
            </b-card-body>
          </b-collapse>
        </b-card>

        <b-card no-body class="mb-1">
          <b-card-header header-tag="header" class="p-1" role="tab">
            <b-button block v-b-toggle.accordion-3 variant="dark">
              ORDER #33292B330 • 2009-01-03 • TOTAL PRICE: $312
            </b-button>
          </b-card-header>
          <b-collapse id="accordion-3" accordion="my-accordion" role="tabpanel">
            <b-card-body>
              <b-card-text>{{ text }}</b-card-text>
            </b-card-body>
          </b-collapse>
        </b-card> -->

      </div>
    </template>
    </b-container>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'Orders',
  computed: {
    ...mapGetters(['orders']),
    list () {
      return [...this.orders].reverse()
    }
  },
  methods: {
    ...mapActions(['getCheckedoutCarts']),
    totalPrice (productsList) {
      return productsList.map(({ product, quantity }) => product.price * quantity).reduce((a, b) => a + b, 0)
    }
  },
  mounted () {
    this.getCheckedoutCarts()
  }
}
</script>

<style>

</style>
