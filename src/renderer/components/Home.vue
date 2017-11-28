<template>
  <div id="wrapper">
    <Row>
      <navbar></navbar>
    </Row>
    <Row>
      <Col span="8">
        <playlist-queue></playlist-queue>
      </Col>
      <Col span="8">
        <song-queue></song-queue>
      </Col>
      <Col span="8">
        <tile-area></tile-area>
        <currently-playing></currently-playing>
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

  export default {
    name: 'home',
    components: { Navbar, PlaylistQueue, SongQueue, TileArea, CurrentlyPlaying }
  }
</script>

<style>
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
</style>
