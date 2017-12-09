<template>
  <Row type="flex" justify="center">
    <div id="playlist-search">
      <Input v-model="value" placeholder="Find Playlists" style="width: 85%"></Input>
    </div>
    <div id="playlist-column">
      <Card>
        {{ bookmarkFolders.bookmark_bar.children[0].name }}
      </Card>
    </div>
  </Row>
</template>

<script>
  export default {
    name: 'playlist-queue',
    props: ['bookmarkFolders'], // import the first bookmark in the bookmark bar.
    data () {
      return {
        value: ''
      }
    }
  }
</script>

<style>
  #playlist-column {
    width: 85%;
    height: 89vh;
    overflow-y: scroll;
    overflow-x: hidden;
    padding-right: 1%;
  }
  #playlist-search {
    padding-top: 1%;
    padding-bottom: 1%;
    width: 55%;
  }
</style>
