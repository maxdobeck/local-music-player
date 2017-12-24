<template>
  <Row type="flex" justify="center">
    <div>
      <h3>Currently Playing</h3>
      <p>{{ selectedSong.name }}</p>
      <youtube
        :video-id="videoId"
        player-width="200" 
        player-height="200"
      ></youtube>
    </div>
  </Row>
</template>

<script>
export default {
  name: 'currently-playing',
  data () {
    return {
      selectedSong: {},
      videoId: ''
    }
  },
  created () {
    this.$bus.$on('selectedSong', this.updateSelectedSong)
  },
  methods: {
    updateSelectedSong (selected) {
      this.selectedSong = selected
      this.videoId = this.$youtube.getIdFromURL(selected.url)
    }
  }
}
</script>

<style>
</style>
