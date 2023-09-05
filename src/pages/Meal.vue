<script>
export default {
  name: 'Meal',
  computed: {
    mealName() {
      return this.$route.params.name
    }
  }
}
</script>

<template>
  <div>
    <h1>Hello in {{ mealName }} page</h1>
  </div>
</template>

<style lang="scss" scoped>

</style>