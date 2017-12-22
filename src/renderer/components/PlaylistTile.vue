<template>
  <Card class="" v-bind:class="{ active: isSelected }">
    {{ name }}
  </Card>
</template>

<script>
  export default {
    name: 'playlist-tile',
    props: ['id', 'name', 'selected'],
    data () {
      return {
        isSelected: false
      }
    },
    methods: {
      isActive () {
        console.log(this.selected.id)
        if (this.selected.id === this.id) {
          this.isSelected = true
        } else {
          this.isSelected = false
        }
      }
    }
  }
</script>

<style>
  .active {
    background-color: rgb(35, 153, 250);
  }
</style>
