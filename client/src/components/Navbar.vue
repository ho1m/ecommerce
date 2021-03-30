<template>
  <div>
    <b-navbar toggleable="lg" type="light" variant="light">
      <b-container>
      <!--  -->
      <b-navbar-brand class="pl-1">
        <router-link to="/" class="text-dark">
        <b-icon icon="shop" scale="1.5" />
        </router-link>
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto d-flex align-items-center">
          <UserPopover :user="user" v-if="user" />
          <LoginPopover v-else />
<!--  -->
          <CartPopover :cartId="currentCart" />
        </b-navbar-nav>
      </b-collapse>
      <!--  -->
      </b-container>
    </b-navbar>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import CartPopover from './NavPopovers/CartPopover.vue'
import LoginPopover from './NavPopovers/LoginPopover.vue'
import UserPopover from './NavPopovers/UserPopover.vue'

export default {
  name: 'Navbar',
  components: { UserPopover, LoginPopover, CartPopover },
  computed: {
    ...mapGetters(['user', 'currentCart'])
  }
}
</script>

<style>

</style>
