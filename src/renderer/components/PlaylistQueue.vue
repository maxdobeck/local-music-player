<template>
  <Row type="flex" justify="center">
    <div id="playlist-column">
      <playlist-tile class="playlistTiles" v-for="folder in reduceBookmarks()"
            :key="folder.id"
            :id="folder.id"
            :name="folder.name"
            @click.native="choose(folder)"
            :selected="selected"
      >
      </playlist-tile>
    </div>
  </Row>
</template>

<script>
  import PlaylistTile from './PlaylistTile'

  export default {
    name: 'playlist-queue',
    components: { PlaylistTile },
    props: ['bookmarkFolders'], // import the first bookmark in the bookmark bar.
    data () {
      return {
        value: '',
        selected: {}
      }
    },
    methods: {
      reduceBookmarks () {
        let myNewObj = []
        let i = 0
        this.bookmarkFolders.bookmark_bar.children.forEach(function (folder) {
          myNewObj.push({'id': i, 'name': folder.name})
          i++
        })

        // this.bookmarkFolders.bookmark_bar.children.map(x => myNewObj.push(x.name))
        return myNewObj
      },
      choose (folder) {
        this.selected = folder
        this.$bus.$emit('selectedPlaylist', this.selected)
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
  .playlistTiles {
    margin: auto;
  }
</style>
