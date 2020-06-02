<template>
  <div class="home-page">
    <Navbar />
    <div class="home-page__container container pt-6">
      <EditProject
        v-if="editingProject"
        :project="editingProject"
        @editProjectDone="handleProjectEditDone"
        @cancelProjectEdition="cancelProjectEdition"
      />
      <template v-else>
      <ProjectBar
        v-for="project in projects"
        :key="project.id"
        :project="project"
        @editProject="editProject(project)"
        class="mb-3"
      />
      </template>
    </div>
  </div>

</template>

<script>
import { mapState } from 'vuex';
import Navbar from "@/components/Navbar";
import ProjectBar from "@/components/ProjectBar";
import EditProject from "@/components/EditProject";
import { getProjects } from '@/services';
import { getAccessTokenFromCookie } from "@/utilities";

export default {
  name: 'Home',
  middleware: 'authLogged',
  components: {
    ProjectBar,
    Navbar,
    EditProject
  },
  data: () => ({
    editingProject: null
  }),
  async asyncData({ store, req }) {
    let accessToken = store.state.accessToken || getAccessTokenFromCookie(req);
    const { data: { projects } } = await getProjects(accessToken);
    return { projects };
  },
  computed: {
    ...mapState(['accessToken'])
  },
  methods: {
    editProject (project) {
      this.editingProject = project;
    },
    async handleProjectEditDone () {
      const { data: { projects } } = await getProjects(this.accessToken);
      this.projects = projects;
      this.editingProject = null;
    },
    cancelProjectEdition () {
      this.editingProject = null;
    }
  }
}
</script>

<style lang="sass">
  .home-page
    width: 100%
    position: relative
    &__container
      display: flex
      flex-direction: column
      align-items: center
</style>
