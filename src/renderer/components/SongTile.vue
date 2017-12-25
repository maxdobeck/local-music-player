<template>
  <Card class="songCard"
  v-bind:class="{ active: isActive() }"
  >
    <h5>{{ name }}</h5>
    <p>{{ url }}</p>
  </Card>
</template>

<script>
  export default {
    name: 'song-tile',
    props: ['id', 'name', 'url', 'selectedSong'],
    methods: {
      isActive () {
        if (this.selectedSong === undefined) {
          return false
        } else if (this.id === this.selectedSong.id) {
          return true
        } else {
          return false
        }
      }
    }
  }
</script>

<style>
  .songCard {
    width: 85%;
  }
  .active {
    background-color: rgb(167, 239, 248);
  }
</style>
