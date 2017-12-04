<template>
  <Row type="flex" justify="center">
    <div id="playlist-column">
      <h2>Playlists</h2>
      {{ bookmarkFolders.bookmark_bar.children[0] }}
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
  #playlist-column {
    width: 85%;
    height: 89vh;
    overflow-y: scroll;
    overflow-x: hidden;
  }
</style>
