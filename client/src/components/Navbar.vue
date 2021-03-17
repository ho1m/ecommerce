<template>
  <div>
    <b-navbar toggleable="lg" type="light" variant="light">
      <b-container>
      <!--  -->
      <b-navbar-brand href="#" class="pl-1">
        <b-icon icon="shop" scale="1.5" />
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>

        <b-navbar-nav class="ml-auto d-flex align-items-center">
          <b-button id="popover-1-bottomleft" variant="transparent" class="p-0" v-if="user">
            <b-avatar />
          </b-button>

          <b-popover
            target="popover-1-bottomleft"
            placement="bottomleft"
            triggers="hover focus"
            custom-class="w-50 p-2"
          >
            <div class="user__info">
              <p class="mb-1">Logged in as: <b>Hamodi Yousef</b></p>
              <p>Hamodi@Yousef.com</p>
            </div>
            <b-list-group class="text-center">
              <b-list-group-item href="#">
                <b-icon icon="cart-check-fill" />
                Orders
              </b-list-group-item>
              <b-list-group-item href="#">
                <b-icon icon="tools" />
                Settings
              </b-list-group-item>
              <b-list-group-item button class="bg-secondary text-light font-weight-bold">Sign Out</b-list-group-item>
            </b-list-group>
          </b-popover>

          <b-button id="popover-2-bottomleft" variant="transparent" class="p-0 ml-4" v-if="!user">
            Login
          </b-button>

          <b-popover
            target="popover-2-bottomleft"
            placement="bottomleft"
            triggers="hover focus"
            custom-class="w-50 p-2"
          >
            <div class="form__container">
            </div>
          </b-popover>

          <b-button id="popover-3-bottomleft" variant="transparent" class="p-0 ml-4">
            <b-icon icon="cart" scale="1.2" />
            <b-badge circle variant="dark" class="ml-1 pt-1">0</b-badge>
          </b-button>

          <b-popover
            target="popover-3-bottomleft"
            placement="bottomleft"
            triggers="hover"
            custom-class="w-50 p-2"
          >
            <div class="form__container">
            </div>
          </b-popover>

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
export default {
  name: 'Navbar',
  data () {
    return {
      user: null
    }
  }
}
</script>

<style>

</style>
