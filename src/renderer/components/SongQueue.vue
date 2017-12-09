<template>
<Row type="flex" justify="center">
  <div id="song-column">
    <h2>Songs</h2>
    <div id="song-search">
      <Input v-model="value" placeholder="Find Songs" style="width: 80%"></Input>
    </div>
    {{ bookmarkFolders.bookmark_bar.children[0].children }}
  </div>
</Row>
</template>

<script>
  export default {
    name: 'song-queue',
    props: ['bookmarkFolders']
  }
</script>

<style>
#song-column {
  width: 100%;
  height: 89vh;
  overflow-y: scroll;
  overflow-x: hidden;
  padding-right: 1%;
}

#song-search {
    padding-top: 1%;
    padding-bottom: 1%;
  }
</style>
