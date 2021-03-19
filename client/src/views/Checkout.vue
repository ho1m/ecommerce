<template>
  <div class="checkout flex-fill d-flex align-items-center justify-content-center py-5">
    <b-container>
    <h3 class="text-center">Thank you for your purchase!</h3>
    <p class="text-center">Order Number: ({{cartid}})</p>
    <b-card>
      <b-card-header class="rounded mx-3">
        TOTAL: $3032030.00
      </b-card-header>
      <b-card-body>
        <b-list-group>

          <b-list-group-item class="d-flex">
            <b-avatar src="https://placekitten.com/300/300" size="5em"></b-avatar>
            <div class="flex-fill ml-3">
              <div class="d-flex w-100 justify-content-between">
                <h5 class="mb-1">Airpods</h5>
                <small>1x</small>
              </div>

              <p class="mb-1">
                The best of the best headphones this is supposed to be the damn description.
              </p>

              <small>$399.00</small>
            </div>
          </b-list-group-item>

          <b-list-group-item class="d-flex">
            <b-avatar src="https://placekitten.com/300/300" size="5em"></b-avatar>
            <div class="flex-fill ml-3">
              <div class="d-flex w-100 justify-content-between">
                <h5 class="mb-1">RayCon</h5>
                <small class="text-muted">3x</small>
              </div>

              <p class="mb-1">
                Second best airpods copycat in the whole damn world and we are taking over baby.
              </p>

              <small>$989.00</small>
            </div>
          </b-list-group-item>

          <b-list-group-item class="d-flex">
            <b-avatar src="https://placekitten.com/300/300" size="5em"></b-avatar>
            <div class="flex-fill ml-3">
              <div class="d-flex w-100 justify-content-between">
                <h5 class="mb-1">RayCon</h5>
                <small class="text-muted">3x</small>
              </div>

              <p class="mb-1">
                Second best airpods copycat in the whole damn world and we are taking over baby.
              </p>

              <small>$989.00</small>
            </div>
          </b-list-group-item>

        </b-list-group>
      </b-card-body>
    </b-card>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'Checkout',
  props: ['cartid']
}
</script>

<style>

</style>
