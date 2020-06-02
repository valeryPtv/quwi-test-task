<template>
  <nav class="navbar">
    <nuxt-link :to="{ path: '/' }">
      <img class="navbar__logo" src="~/assets/img/quwi-logo.png" alt="Quwi logo">
    </nuxt-link>
    <div class="navbar__actions">
      <nuxt-link :to="{ path: '/' }" class="navbar__action-text mr-2">Projects</nuxt-link>
      <p class="navbar__action-text">Logout</p>
    </div>
  </nav>
</template>

<script>
  export default {
    name: 'Navbar',
    methods: {
      handleLogout () {

      }
    }
  }
</script>
<style lang="sass">
  .navbar
    display: flex
    justify-content: space-between
    align-items: center
    position: fixed
    width: 100%
    height: 45px
    padding: 0 20px
    background-color: #fafafa
    box-shadow: 0 0 5px rgba(0, 0, 0, .25)

    &__logo
      width: 25px
      height: 25px

    &__actions
      display: flex
      height: 100%

    &__action-text
      display: flex
      align-items: center
      height: 100%
      padding: 0 .5rem
      text-decoration: none
      text-transform: uppercase
      color: #636363
      font-size: .8rem
      cursor: pointer
      &:hover
        background: #e0e0e0

</style>
