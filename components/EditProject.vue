<template>
  <div class="edit-project">
    <h3 class="mb-3">
      Edit project
    </h3>
    <p v-if="error" class="error-message mb-1">
      {{error}}
    </p>
    <label class="d-block mb-3">
      <p class="edit-project__label mb-1">
        Project name
      </p>
      <input v-model="projectName" type="text" placeholder="Project name" class="base-input">
    </label>
    <button class="base-button" @click="submitProjectEdition">
      Submit
    </button>
  </div>
</template>

<script>
  import { mapState } from 'vuex';
  import { editProjectName } from '@/services';

  export default {
    name: "EditProject",
    props: {
      project: {
        type: Object,
        default: () => ({})
      }
    },
    data: () => ({
      projectName: '',
      error: ''
    }),
    computed: {
      ...mapState(['accessToken'])
    },
    methods: {
      async submitProjectEdition () {
        try {
          const { data: { project } } = await editProjectName(this.accessToken, this.project.id, this.projectName);
          console.log('submitProjectEdition', project);
          this.$emit('editProjectDone', project);
          this.error = '';
        } catch (e) {
          this.error = e.response.data.message;
          console.dir(e);
          console.error(e);
        }
      }
    },
    created() {
      this.projectName = this.project.name;
    }
  }
</script>

<style lang="sass">
  .edit-project
    &__label
      font-size: .95rem
</style>
