<template>
  <div class="project-bar" @click="handleClickEditProject">
    <img :src="project.logo_url" :alt="project.name" class="project-bar__logo mr-3" />
    <p class="project-bar__title">{{ project.name }}</p>
    <p
      class="project-bar__status"
      :class="{'project-bar__status--active': project.is_active === 1}"
    >
      {{ project.is_active === 1 ? 'Active' : 'Not active' }}
    </p>
    <div class="project-bar__stats">
      <div class="project-bar__stats-row">
        time this week
        <span class="ml-3 text-bold">{{ formatTime(project.spent_time_week) }}</span>
      </div>
      <div class="project-bar__stats-row">
        this month
        <span class="ml-3 text-bold">{{ formatTime(project.spent_time_month) }}</span>
      </div>
      <div class="project-bar__stats-row">
        total
        <span class="ml-3 text-bold">{{ formatTime(project.spent_time_all) }}</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "ProjectBar",
    props: {
      project: {
        type: Object,
        default: () => ({})
      }
    },
    methods: {
      formatTime (seconds) {
        return new Date(seconds * 1000).toISOString().substr(11, 8);
      },
      handleClickEditProject () {
        this.$emit('editProject');
      }
    }
  }
</script>

<style lang="sass">
  .project-bar
    display: flex
    justify-content: space-between
    align-items: center
    width: 100%
    max-width: 650px
    background: #fff
    padding: 20px 20px 20px 35px
    font-size: .9rem
    cursor: pointer

    &__title
      flex-grow: 3
      font-weight: bold

    &__logo
      width: 35px
      height: 35px

    &__status
      font-weight: bold
      flex-grow: 2
      color: red
      &--active
        color: green

    &__stats
      &-row
        display: flex
        justify-content: space-between
        margin-bottom: 4px
</style>
