<template>
  <b-container class="flex-fill">
    <div class="mt-4 mb-5">
      <carousel :autoplay="true" :autoplayHoverPause="true" :navigationEnabled="true" :perPage="1" :paginationPadding="3">
        <slide v-for="product in products.slice(0,3)" :key="product._id" >
          <b-jumbotron class="row align-items-center h-100 py-4">
            <div class="img__container col-3 rounded">
              <img class="rounded" :src="product.image" alt="">
            </div>
            <div class="product__text col-9">
              <h2>{{product.name}}</h2>

              <p class="my-2">
                {{product.shortDesc}}
              </p>

              <h4 class="mb-3">
                {{desc(product.desc)}}
              </h4>

              <b-button variant="primary">Add To Cart</b-button>
            </div>
          </b-jumbotron>
        </slide>
      </carousel>
    </div>

    <h4 class="">All products</h4>
    <ProductsDeck :products="products" />

  </b-container>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel'
import ProductsDeck from '../components/ProductsDeck.vue'
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'Home',
  components: { ProductsDeck, Carousel, Slide },
  methods: {
    ...mapActions(['getProducts']),
    desc (desc) {
      return desc.substr(0, 200) + '.'
    }
  },
  computed: {
    ...mapGetters(['products'])
  },
  mounted () {
    this.getProducts()
  }
}
</script>

<style scoped>
.VueCarousel-dot-container {
  margin-top: 0 !important;
}
.img__container {
  height: 15em;
  width: 12em;
  overflow: hidden;
}
</style>
