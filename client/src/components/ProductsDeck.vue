<template>
  <b-row class="mt-3">
    <ProductCard />
    <ProductCard />
    <ProductCard />
    <ProductCard />
    <ProductCard />
    <ProductCard />
  </b-row>
</template>

<script>
import ProductCard from './ProductCard.vue'
export default {
  name: 'ProductsDeck',
  components: {
    ProductCard
  }
}
</script>

<style>

</style>
