<template>
  <div id="wrapper">
    <Row>
      <navbar></navbar>
    </Row>
    <Row type="flex" justify="center">
      <Col span="8">
        <playlist-queue></playlist-queue>
      </Col>
      <Col span="8">
        <song-queue></song-queue>
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
  .wrapper {
    padding: none;
  }
</style>
