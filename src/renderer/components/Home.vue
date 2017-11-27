<template>
  <div>
    <navbar></navbar>
    <playlist-queue></playlist-queue>
    <song-queue></song-queue>
    <tile-area></tile-area>
    <currently-playing></currently-playing>
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
</style>
