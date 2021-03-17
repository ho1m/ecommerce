<template>
  <b-container>
    <div class="mt-4 mb-5">
      <b-carousel
        id="carousel-no-animation"
        style="text-shadow: 0px 0px 2px #000; border-radius: 5px; overflow: hidden;"
        indicators
      >
          <b-jumbotron header="BootstrapVue" lead="Bootstrap v4 Components for Vue.js 2">
            <p>For more information visit website</p>
            <b-button variant="primary" href="#">More Info</b-button>
          </b-jumbotron>
          <b-jumbotron header="BootstrapVue" lead="Bootstrap v4 Components for Vue.js 2">
            <p>For more information visit website</p>
            <b-button variant="primary" href="#">More Info</b-button>
          </b-jumbotron>
          <b-jumbotron header="BootstrapVue" lead="Bootstrap v4 Components for Vue.js 2">
            <p>For more information visit website</p>
            <b-button variant="primary" href="#">More Info</b-button>
          </b-jumbotron>

      </b-carousel>
    </div>

    <h4 class="">All products</h4>
    <ProductsDeck />

  </b-container>
</template>

<script>
import ProductsDeck from '../components/ProductsDeck.vue'
export default {
  name: 'Home',
  components: { ProductsDeck }

}
</script>

<style>

</style>
