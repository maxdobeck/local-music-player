<template>
  <Card class="songCard">
    <h5>{{ name }}</h5>
    <p>{{ url }}</p>
  </Card>
</template>

<script>
  export default {
    name: 'song-tile',
    props: ['id', 'name', 'url']
  }
</script>

<style>
  .songCard {
    width: 85%;
  }
</style>
