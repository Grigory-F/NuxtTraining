<template>
  <div>
    inner layout
    <ul>
      <li v-for="user of users" :key="user.id">
        <nuxt-link :to="`users/${user.id}`">
          {{ user.name }}
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  layout: 'test',
  computed: {
    ...mapGetters({
      users: 'users/getUsers'
    })
  }
}
</script>
