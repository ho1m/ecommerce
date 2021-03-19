<template>
<div class="">
  <b-button id="popover-3-bottomleft" variant="transparent" class="p-0 ml-5">
    <b-icon icon="cart" scale="1.2" />
    <b-badge circle variant="dark" class="ml-1 pt-1">0</b-badge>
  </b-button>

  <b-popover
    target="popover-3-bottomleft"
    placement="bottomleft"
    triggers="hover"
    custom-class="w-50 p-2"
  >
    <b-list-group>

        <b-list-group-item class="d-flex align-items-center p-2">
          <b-avatar src="https://placekitten.com/300/300" size="2.5em"></b-avatar>
          <div class="w-100 ml-2 d-flex align-items-center justify-content-between">
            <div class="">
              <h6 class="mb-0">RayCon</h6>
              <p class="mb-0">$989.00</p>
            </div>
            <p class="mb-0">x 3</p>
          </div>
        </b-list-group-item>
        <b-list-group-item class="d-flex align-items-center p-2">
          <b-avatar src="https://placekitten.com/300/300" size="2.5em"></b-avatar>
          <div class="w-100 ml-2 d-flex align-items-center justify-content-between">
            <div class="">
              <h6 class="mb-0">RayCon</h6>
              <p class="mb-0">$989.00</p>
            </div>
            <p class="mb-0">x 3</p>
          </div>
        </b-list-group-item>
        <b-list-group-item class="d-flex align-items-center p-2">
          <b-avatar src="https://placekitten.com/300/300" size="2.5em"></b-avatar>
          <div class="w-100 ml-2 d-flex align-items-center justify-content-between">
            <div class="">
              <h6 class="mb-0">RayCon</h6>
              <p class="mb-0">$989.00</p>
            </div>
            <p class="mb-0">x 3</p>
          </div>
        </b-list-group-item>
        <b-list-group-item class="d-flex align-items-center p-2">
          <b-avatar src="https://placekitten.com/300/300" size="2.5em"></b-avatar>
          <div class="w-100 ml-2 d-flex align-items-center justify-content-between">
            <div class="">
              <h6 class="mb-0">RayCon</h6>
              <p class="mb-0">$989.00</p>
            </div>
            <p class="mb-0">x 3</p>
          </div>
        </b-list-group-item>

    </b-list-group>

    <b-card
      header="TOTAL PRICE: $3956.00"
      header-tag="header"
      class="mt-3"
      body-class="p-1"
    >
      <b-button variant="primary w-100">CHECKOUT</b-button>
    </b-card>

  </b-popover>
</div>
</template>

<script>
export default {
  name: 'CartPopover'
}
</script>

<style>

</style>
