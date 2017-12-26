<template>
  <Row type="flex" justify="center">
    <div>
      <h3>Currently Playing</h3>
      <p>{{ selectedSong.name }}</p>
      <youtube
        :video-id="videoId"
        player-width="400" 
        player-height="200"
        :player-vars="{autoplay: 1}"
        @playing="playing"
        @ended="ended"
      ></youtube>
      <player-controls class="controls"></player-controls>
    </div>
  </Row>
</template>

<script>
import PlayerControls from './PlayerControls'

export default {
  name: 'currently-playing',
  components: { PlayerControls },
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
      if (selected !== undefined) {
        this.selectedSong = selected
        this.videoId = this.$youtube.getIdFromURL(selected.url)
      }
    },
    playing () {
      this.videoEnded = false
    },
    ended () {
      this.videoEnded = true
      this.$bus.$emit('videoEnded', this.videoEnded)
    }
  }
}
</script>

<style>
</style>
