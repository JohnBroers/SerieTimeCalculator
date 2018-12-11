<template>
  <nav>
    <h1 class="logo">Serie Time Calculator</h1>
    <a href="#" @click.prevent="clearStorage">Clear storage</a>
  </nav>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  methods: {
    ...mapActions([
      'clearStorage'
    ])
  }
}

</script>
