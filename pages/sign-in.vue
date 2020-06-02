<template>
  <div class="sign-in">
    <div class="container">
      <h2 class="sign-in__heading">Login</h2>
      <p v-for="(error, index) in errors" :key="`e-${index}`" class="error-message mb-2">
        {{error}}
      </p>
      <input v-model="email" class="base-input mb-2" type="email" placeholder="Email">
      <input v-model="password" class="base-input mb-3" type="password" placeholder="Password">
      <button class="base-button" @click="handleClickSignin">
        Login
      </button>
    </div>
  </div>
</template>

<script>
  import { mapActions } from 'vuex';

  export default {
    name: "Login",
    data: () => ({
      email: '',
      password: '',
      errors: []
    }),
    methods: {
      ...mapActions({
        signin: 'signin'
      }),
      async handleClickSignin () {
        // console.log('this.$auth', this.$auth);
        try {
          const response = await this.signin({ email: this.email, password: this.password });
          this.errors = [];
          this.$router.push({ path: '/' })
        } catch(e) {
          console.error(e);
          this.errors = Object.values(e.response.data.first_errors);
        }
      }
    }
  }
</script>

<style lang="sass">
  .sign-in
    width: 100%
    &__heading
      color: #000
      text-transform: uppercase
      margin-bottom: 10px
      font-size: 20px

</style>
