<template>
  <Row type="flex" justify="center">
    <div id="playlist-column">
      <h2>Playlists</h2>
      <div id="playlist-search">
        <Input v-model="value" placeholder="Find Playlists" style="width: 85%"></Input>
      </div>
      {{ bookmarkFolders.bookmark_bar.children[0].name }}
    </div>
  </Row>
</template>

<script>
  export default {
    name: 'playlist-queue',
    props: ['bookmarkFolders'] // import the first bookmark in the bookmark bar.
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
