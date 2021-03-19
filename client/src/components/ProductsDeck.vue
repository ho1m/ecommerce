<template>
  <b-row class="mt-3">
    <ProductCard v-for="product in products" :product="product" :key="product._id" />
  </b-row>
</template>

<script>
import ProductCard from './ProductCard.vue'
export default {
  name: 'ProductsDeck',
  components: {
    ProductCard
  },
  props: ['products']
}
</script>

<style>

</style>
