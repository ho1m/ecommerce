<template>
  <b-col cols="4" class="mb-4" v-if="product">
    <router-link :to="`/productpage/${product._id}`" tag="div">
    <b-card class="productcard text-dark">
      <b-card-body>
        <div class="img__container mb-3">
          <img :src="product.image" alt="">
        </div>
        <b-card-title>{{product.name}}</b-card-title>
        <b-card-sub-title class="my-2">{{product.shortDesc}}</b-card-sub-title>
        <b-card-text>{{desc}}</b-card-text>
        <b-card-text>$<b>{{product.price}}</b></b-card-text>
      </b-card-body>
    </b-card>
    </router-link>
  </b-col>
</template>

<script>
export default {
  name: 'ProductCard',
  props: ['product'],
  mounted () {
    console.log(this.product)
  },
  computed: {
    desc () {
      return this.product.desc.substr(0, 150) + '...'
    }
  }
}
</script>

<style scoped>
  .productcard {
    cursor: pointer;
    transition: transform .2s ease-in-out;
  }
  .productcard:hover {
    transform: scale(1.05);
  }
  .img__container {
    width: 100%;
    height: 300px;
  }
</style>
