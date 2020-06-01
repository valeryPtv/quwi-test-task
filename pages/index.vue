<template>
  <div>
    <Navbar />
    index
    <nuxt-link to="/sign-in">sign in</nuxt-link>
  </div>

</template>

<script>
import Navbar from "@/components/Navbar";

export default {
  name: 'Home',
  // middleware: 'authLogged',
  components: {
    Navbar
  }
}
</script>
