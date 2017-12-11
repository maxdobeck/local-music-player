<template>
<Row type="flex" justify="center">
  <div id="song-search">
      <Input v-model="value" placeholder="Find Songs" style="width: 80%"></Input>
    </div>
  <div id="song-column">
    <ul>
      <li>
        <song-tile v-for="song in songTiles" 
          :key="song.id"
          :id="song.id"
          :name="song.name"
          :url="song.url"
        >
        </song-tile>
      </li>
    </ul>
  </div>
</Row>
</template>

<script>
  // {{ bookmarkFolders.bookmark_bar.children[0].children }}
  import SongTile from './SongTile'
  let lunr = require('lunr')

  export default {
    name: 'song-queue',
    components: { SongTile },
    props: ['bookmarkFolders'],
    data () {
      return {
        songTiles: this.bookmarkFolders.bookmark_bar.children[0].children,
        value: ''
      }
    }
  }

  let idx = lunr(function () {
    this.field('bookmarkFolders.bookmark_bar.children[0].children.name')

    bookmarkFolders.bookmark_bar.children[0].children.forEach(function (song) {
      this.add(song)
    }, this)
  })
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
    width: 55%;
}
</style>
