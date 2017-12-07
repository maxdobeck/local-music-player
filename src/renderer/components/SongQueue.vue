<template>
<Row type="flex" justify="center">
  <div id="song-column">
    <h2>Songs</h2>
    <div id="song-search">
      <Input v-model="value" placeholder="Find Songs" style="width: 80%"></Input>
    </div>
  </div>
</Row>
</template>

<script>
  export default {
    name: 'song-queue'
  }
</script>

<style>
#song-column {
  width: 100%;
}
</style>
