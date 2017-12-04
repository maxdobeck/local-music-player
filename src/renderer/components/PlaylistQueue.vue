<template>
  <Row type="flex" justify="center">
    <div id="playlist-column">
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
  console.log(typeof bookmarkFolders)
</script>

<style>
  #playlist-column {
    width: 85%;
  }
</style>
