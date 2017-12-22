<template>
  <Card class="" 
    v-bind:class="{ active: isActive }">
    {{ name }}
  </Card>
</template>

<script>
  export default {
    name: 'playlist-tile',
    props: ['id', 'name', 'selected', 'isActive']
  }
</script>

<style>
  .active {
    background-color: rgb(35, 153, 250);
  }
</style>
