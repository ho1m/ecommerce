<template>
  <div class="productPage flex-fill">
    <b-container class="row mx-auto my-5 px-0">
      <div class="img__container col-6 rounded">
        <img src="https://images.pexels.com/photos/2533266/pexels-photo-2533266.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="">
      </div>
      <div class="product__text col-6">
        <h2>BootstrapVue</h2>

        <p class="mt-2 mb-4">
          It uses utility classes for typography and spacing to space content out within the larger
          container.
        </p>

        <h4 class="mb-3">
          This is a simple hero unit, a simple jumbotron-style component for calling extra attention to
          featured content or information.
        </h4>

        <b-button variant="primary" class="mt-3">Add To Cart</b-button>
      </div>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'ProductPage',
  props: ['productid']
  // need to pull prod // or send in through data the prod info
}
</script>

<style scoped>
.img__container {
  overflow: hidden;
  max-height: 500px;
}
</style>
