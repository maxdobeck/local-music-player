<template>
  <Card class="playlistTile" 
    v-bind:class="{ active: isActive() }">
    <h4>{{ name }}</h4>
  </Card>
</template>

<script>
  export default {
    name: 'playlist-tile',
    props: ['id', 'name', 'selected'],
    data () {
      return {
        highlighted: false
      }
    },
    methods: {
      isActive () {
        if (this.id === this.selected.id) {
          this.highlighted = true
          return true
        } else {
          this.highlighted = false
          return false
        }
      }
    }
  }
</script>

<style>
  .active {
    background-color: rgb(167, 239, 248);
  }
  .playlistTile {
    user-select: none;
    cursor: default;
    width: 50%;
    text-align: center;
  }
</style>
