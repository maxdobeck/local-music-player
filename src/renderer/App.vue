<template>
  <div id="app">
    <home :bookmarks="songs"></home>
  </div>
</template>

<script>
  import Home from '@/components/Home'

  export default {
    name: 'local-music-player',
    components: {
      Home
    }
  }
</script>

<style>
  /* CSS */
</style>
