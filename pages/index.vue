<template>
  <div class="home-page">
    <Navbar />
    <div class="container pt-6">
      <ProjectBar v-for="project in projects" :key="project.id" :project="project"/>
    </div>
<!--    index-->
<!--    <nuxt-link to="/sign-in">sign in</nuxt-link>-->
  </div>

</template>

<script>
import Navbar from "@/components/Navbar";
import ProjectBar from "@/components/ProjectBar";
import { getProjects } from '@/services';

export default {
  name: 'Home',
  middleware: 'authLogged',
  components: {
    ProjectBar,
    Navbar
  },
  async asyncData({ store }) {
    const { data: { projects } } = await getProjects(store.state.accessToken);
    console.log('res', projects);
    return { projects };
  }
}
</script>

<style lang="sass">
  .home-page
    width: 100%
    position: relative
</style>
