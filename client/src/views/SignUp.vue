<template>
  <div class="signup flex-fill d-flex align-items-center justify-content-center flex-column">
    <h3>Sign Up</h3>
    <b-form class="w-50 mt-3" autocomplete="off" @submit.prevent="HandleSubmit">

      <label class="" for="nameSignupInput">Name:</label>
      <b-form-input
        v-model="nameInput"
        id="nameSignupInput"
        class="mb-3"
        required
        type="text"
        placeholder="Jane Doe"
        autocomplete="off"
      ></b-form-input>

      <label class="" for="emailSignupInput">Email:</label>
      <b-form-input
        v-model="emailInput"
        id="emailSignupInput"
        class="mb-3"
        required
        type="email"
        placeholder="example@gmail.com"
        autocomplete="off"
      ></b-form-input>

      <label class="" for="passwSignupInput">Password:</label>
      <b-form-input
        v-model="passwordInput"
        id="passwSignupInput"
        class="mb-3"
        required
        type="password"
        placeholder="password987!"
        autocomplete="off"
      ></b-form-input>

      <b-button variant="primary" type="submit">SignUp</b-button>
    </b-form>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'SignUp',
  data () {
    return {
      emailInput: '',
      passwordInput: '',
      nameInput: ''
    }
  },
  methods: {
    ...mapActions(['register']),
    HandleSubmit () {
      const registerData = {
        name: this.nameInput,
        email: this.emailInput,
        password: this.passwordInput
      }

      this.register({ registerData })

      this.emailInput = ''
      this.passwordInput = ''
      this.nameInput = ''

      this.$router.replace('/')
    }
  }
}
</script>

<style>

</style>
