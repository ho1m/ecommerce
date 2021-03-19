<template>
<div class="">
  <b-button id="popover-1-bottomleft" variant="transparent" class="p-0">
    <b-avatar size="2rem" />
  </b-button>

  <b-popover
    target="popover-1-bottomleft"
    placement="bottomleft"
    triggers="hover focus"
    custom-class="w-50 p-2"
  >
    <div class="user__info">
      <p class="mb-1">Logged in as: <b>{{user.name}}</b></p>
      <p>{{user.email}}</p>
    </div>
    <b-list-group class="text-center">
      <b-list-group-item to="/orders">
        <b-icon icon="cart-check-fill" />
        Orders
      </b-list-group-item>
      <b-list-group-item disabled>
        <b-icon icon="tools" />
        Settings
      </b-list-group-item>
      <b-list-group-item button class="bg-secondary text-light font-weight-bold" @click="$store.commit('SIGNOUT')">Sign Out</b-list-group-item>
    </b-list-group>
  </b-popover>
</div>
</template>

<script>
export default {
  name: 'UserPopover',
  props: ['user']
}
</script>

<style>

</style>
