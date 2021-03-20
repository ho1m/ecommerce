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
          <!-- <b-nav-form>
            <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
            <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
          </b-nav-form> -->
<script>
import { mapGetters } from 'vuex'
import CartPopover from './NavPopovers/CartPopover.vue'
import LoginPopover from './NavPopovers/LoginPopover.vue'
import UserPopover from './NavPopovers/UserPopover.vue'

export default {
  name: 'Navbar',
  components: { UserPopover, LoginPopover, CartPopover },
  data () {
    return {
    }
  },
  computed: {
    ...mapGetters(['user', 'currentCart'])
  }
}
</script>

<style>

</style>
