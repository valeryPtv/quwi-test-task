<template>
  <div class="project-bar">
    <img :src="project.logo_url" :alt="project.name" class="project-bar__logo mr-2" />
    <p class="project-bar__title">{{ project.name }}</p>
    <p
      class="project-bar__status"
      :class="{'project-bar__status--active': project.is_active === 1}"
    >
      {{ project.is_active === 1 ? 'Active' : 'Not active' }}
    </p>
    <div class="project-bar__stats">
      <div class="project-bar__stats-row">
        Time this week
        <span class="ml-3 text-bold">{{ project.spent_time_week }}</span>
      </div>
      <div class="project-bar__stats-row">
        this month
        <span class="ml-3 text-bold">{{ project.spent_time_month }}</span>
      </div>
      <div class="project-bar__stats-row">
        total
        <span class="ml-3 text-bold">{{ project.spent_time_all }}</span>
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
    }
  }
</script>

<style lang="sass">
  .project-bar
    display: flex
    justify-content: space-between
    align-items: center
    background: #fff
    padding: 20px

    &__title
      flex-grow: 1

    &__logo
      width: 35px
      height: 35px

    &__status
      flex-grow: 2
      color: red
      &--active
        color: green

    &__stats
      /*font-size: .9rem*/
      &-row
        display: flex
        justify-content: space-between
        margin-bottom: 4px
</style>
