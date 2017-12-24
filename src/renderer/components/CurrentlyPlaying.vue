<template>
  <Row type="flex" justify="center">
    <div>
      <h3>Currently Playing</h3>
      <p>{{ selectedSong }}</p>
      <iframe width="100%" height="100%" src="https://www.youtube.com/embed/f9X1C7pTu-M?rel=0&amp;"frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen></iframe>

    </div>
  </Row>
</template>

<script>
export default {
  name: 'currently-playing',
  data () {
    return {
      selectedSong: {}
    }
  },
  created () {
    this.$bus.$on('selectedSong', this.updateSelectedSong)
  },
  methods: {
    updateSelectedSong (selected) {
      this.selectedSong = selected
    }
  }
}
</script>

<style>
</style>
