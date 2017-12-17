<template>
  <div id="wrapper">
    <Row>
      <navbar></navbar>
    </Row>
    <Row type="flex" justify="center">
      <Col span="8">
        <playlist-queue :bookmark-folders='bookmarks'></playlist-queue>
      </Col>
      <Col span="8">
        <song-queue :bookmark-folders='bookmarks' :index='searchIndex'></song-queue>
      </Col>
      <Col span="8">
        <tile-area></tile-area>
        <Row>
          <currently-playing></currently-playing>
        </Row>
      </Col>
    </Row>
  </div>
</template>

<script>
  import Navbar from './Navbar'
  import PlaylistQueue from './PlaylistQueue'
  import SongQueue from './SongQueue'
  import TileArea from './TileArea'
  import CurrentlyPlaying from './CurrentlyPlaying'
  import { getMusic, makeIndex } from '../ChromeUbuntu.js'

  let bookmarks = getMusic()
  let searchIndex = makeIndex(bookmarks.bookmark_bar.children[0].children)
  // console.log(bookmarks.bookmark_bar.children[0].children)

  export default {
    name: 'home',
    components: { Navbar, PlaylistQueue, SongQueue, TileArea, CurrentlyPlaying },
    data () {
      return {
        bookmarks: bookmarks,
        searchIndex: searchIndex
      }
    }
  }
</script>

<style>
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  body {
    overflow-x: hidden;
    overflow-y: hidden;
  }

  .wrapper {
    padding: none;
    margin: 0;
  }
</style>
