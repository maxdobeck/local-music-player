<template>
  <Card class="playlistCard" 
    v-bind:class="{ active: isActive() }">
    {{ name }}
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
    background-color: rgb(35, 153, 250);
  }
  .playlistCard {
    user-select: none;
    cursor: default;
  }
</style>
