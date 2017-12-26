<template>
  <div>
    <ButtonGroup  class="playerControls">
      <Button type="primary" size="large" @click="prevSong">
        <Icon type="chevron-left"></Icon>
        Prev
      </Button>
      <Button type="primary" size="large" @click="nextSong">
        Next
        <Icon type="chevron-right"></Icon>
      </Button>
    </ButtonGroup>
  </div>
</template>

<script>
export default {
  name: 'player-controls',
  data () {
    return {
      paused: false
    }
  },
  methods: {
    nextSong () {
      this.$bus.$emit('videoEnded', this.videoEnded)
    },
    prevSong () {
      this.$bus.$emit('previousSong', true)
    }
  }
}
</script>

<style>
</style>
