<template>
  <Row type="flex" justify="center">
    <div>
      <h2>Playlists</h2>
      {{ bookmarks }}
    </div>
  </Row>
</template>

<script>
  export default {
    name: 'playlist-queue',
    props: ['bookmarks']
  }
</script>

<style>
</style>
