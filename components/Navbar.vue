<template>
  <div class="navbar">
    <nav class="app-navbar m-guest">
      <a href="/" class="app-quwi">
        <img src="/img/quwi-logo.png" width="25px" height="25px">
      </a>
      <div class="b-menu" v-if="$route.path.indexOf('unsupported_browser') === -1">
<!--        <language-selector :lang="$i18n.locale" @change="l => setLocale(l)" :showTitle="true"></language-selector>-->
        <nuxt-link v-if="!['login'].includes($route.name) && $store.getters['webuser/isGuest']" to="/login">{{ $t('Login') }}</nuxt-link>
        <nuxt-link v-if="!['signup', 'invite', 'index'].includes($route.name)" to="/signup">{{ $t('Signup') }}</nuxt-link>
      </div>
    </nav>
  </div>
</template>

<script>
  export default {
    name: "Navbar"
  }
</script>
<style lang="sass">
  .b-menu
    /*line-height: @navbar-height;*/
    /*height: @navbar-height;*/
    display: inline-flex
    justify-content: flex-end
    flex: 1
    a, span.e-link
      display: flex
      float: left
      align-items: center
      text-transform: uppercase
      font-size: .8em
      color: #636363
      padding: 0 15px
      /*height: @navbar-height*/
      white-space: nowrap

      &.active, &:hover
        /*color: @menu-red*/
        /*background: @hover-light*/
        text-decoration: none
      &.m-current
        /*color: @menu-red*/
      .e-cnt-new
        /*background: @menu-red*/
        color: #fff
        border-radius: 7px
        padding: 1px 5px
        margin-left: 5px
        font-size: .8em
        line-height: 1.4em

    .b-avatar
      display: flex
      align-items: center

</style>
