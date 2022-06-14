<template>
  <div>sdadadwddawdad {{ id }}</div>
</template>

<script>

export default {
  layout: 'test',
  computed: {
    id () {
      return this.$route.params.id
    }
  }
}
</script>
