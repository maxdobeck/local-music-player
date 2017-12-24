<template>
  <Row type="flex" justify="center">
    <div>
      <h3>Currently Playing</h3>
      <p>{{ selectedSong.name }}</p>
      <youtube
        :video-id="videoId"
        player-width="400" 
        player-height="200"
        :player-vars="{ autoplay: 1 }"
        @ended="ended"
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
      videoId: '',
      videoEnded: false
    }
  },
  created () {
    this.$bus.$on('selectedSong', this.updateSelectedSong)
  },
  methods: {
    updateSelectedSong (selected) {
      this.selectedSong = selected
      this.videoId = this.$youtube.getIdFromURL(selected.url)
    },
    ended () {
      this.videoEnded = true
    }
  }
}
</script>

<style>
</style>
