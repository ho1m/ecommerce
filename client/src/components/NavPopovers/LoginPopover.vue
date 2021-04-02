<template>
<div class="">
  <b-button id="popover-2-bottomleft" variant="transparent" class="p-0 ml-5">
    Login
  </b-button>

  <b-popover
    target="popover-2-bottomleft"
    placement="bottomleft"
    triggers="hover click"
    custom-class="w-50 p-2"
  >
    <h6 class="mb-3">Login to your account here</h6>
    <b-form @submit.prevent="HandleSubmit">
      <label class="sr-only" for="emailLoginInput">Email</label>
      <b-form-input
        id="emailLoginInput"
        class="mb-2"
        required
        type="email"
        v-model="emailInput"
      ></b-form-input>

      <label class="sr-only" for="passwLoginInput">Password</label>
      <b-form-input
        id="passwLoginInput"
        class="mb-2"
        required
        type="password"
        v-model="passwordInput"
      ></b-form-input>

      <b-button variant="primary" type="submit" class="my-2">Login</b-button>
    </b-form>
    <router-link to="/signup">or Sign Up here.</router-link>
  </b-popover>
</div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'LoginPopover',
  data () {
    return {
      emailInput: '',
      passwordInput: ''
    }
  },
  methods: {
    ...mapActions(['login']),
    HandleSubmit () {
      const loginData = {
        email: this.emailInput,
        password: this.passwordInput
      }

      this.login({ loginData })

      this.emailInput = ''
      this.passwordInput = ''
    }
  }
}
</script>

<style>

</style>
