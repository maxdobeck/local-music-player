<template>
  <Row type="flex" justify="center">
    <div>
      <h2>Playlists</h2>
      {{ bookmarkFolders }}
    </div>
  </Row>
</template>

<script>
  export default {
    name: 'playlist-queue',
    props: ['bookmarkFolders']
  }
</script>

<style>
</style>
