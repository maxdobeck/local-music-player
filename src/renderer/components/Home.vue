<template>
  <div id="wrapper">
    <Menu mode="horizontal" theme="dark" active-name="1">
      <MenuItem name="1">
        Item 1
      </MenuItem>
      <MenuItem name="2">
        Item 2
      </MenuItem>
      <MenuItem name="3">
        Item 3
      </MenuItem>
    </Menu>
    <div class="topNav">
      <navbar></navbar>
    </div>
    <main>
      <div class="col1">
        <playlist-queue></playlist-queue>
      </div>
      <div class="col2">
        <song-queue></song-queue>
      </div>
      <div class="col3">
        <tile-area></tile-area>
        <currently-playing></currently-playing>
      </div>
    </main>
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

  .topNav {

  }

  main {
    display: flex;
    justify-content: space-between;
  }

  .col1 {
    display: flex;
    flex-direction: column;
  }

  .col2 {
    display: flex;
    flex-direction: column;
  }

  .col3 {
    display: flex;
    flex-direction: column;
  }
</style>
