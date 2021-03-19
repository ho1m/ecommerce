<template>
  <b-container class="flex-fill">
    <div class="mt-4 mb-5">
      <carousel :autoplay="true" :autoplayHoverPause="true" :navigationEnabled="true" :perPage="1" :paginationPadding="3">
        <slide>
          <b-jumbotron class="row align-items-center h-100 py-4">
            <div class="img__container col-3 rounded">
              <img class="rounded" src="https://images.pexels.com/photos/821651/pexels-photo-821651.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="">
            </div>
            <div class="product__text col-9">
              <h2>BootstrapVue</h2>

              <p class="my-2">
                It uses utility classes for typography and spacing to space content out within the larger
                container.
              </p>

              <h4 class="mb-3">
                This is a simple hero unit, a simple jumbotron-style component for calling extra attention to
                featured content or information.
              </h4>

              <b-button variant="primary">Add To Cart</b-button>
            </div>
          </b-jumbotron>
        </slide>
        <slide>
          <b-jumbotron class="row align-items-center h-100 py-4">
            <div class="img__container col-3 overflow-hidden rounded">
              <img class="rounded" src="https://images.pexels.com/photos/2533266/pexels-photo-2533266.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="">
            </div>
            <div class="product__text col-9">
              <h2>BootstrapVue</h2>

              <p class="my-2">
                It uses utility classes for typography and spacing to space content out within the larger
                container.
              </p>

              <h4 class="mb-3">
                This is a simple hero unit, a simple jumbotron-style component for calling extra attention to
                featured content or information.
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
    ...mapActions(['getProducts'])
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
  height: 12em;
  width: 12em;
  overflow: hidden;
}
</style>
