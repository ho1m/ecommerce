<template>
  <b-col cols="4" class="mb-4">
    <b-card
      title="Macbook Pro"
      sub-title="Here should the short desc be."
      class="productcard"
      img-src="https://picsum.photos/600/300/?image=25"
      img-alt="Image"
      img-top
      >
      <b-card-text>
        Some quick example text to build on the <em>card title</em> and make up the bulk of the card's
        content.
      </b-card-text>

      <b-card-text>$<b>1300.00</b></b-card-text>
    </b-card>
  </b-col>
</template>

<script>
export default {
  name: 'ProductCard'
}
</script>

<style>
  .productcard {
    cursor: pointer;
    transition: transform .2s ease-in-out;
  }
  .productcard:hover {
    transform: scale(1.05);
  }
</style>
