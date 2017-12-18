<template>
  <Card>
    {{ name }}
    {{ url }}
  </Card>
</template>

<script>
  export default {
    name: 'song-tile',
    props: ['id', 'name', 'url']
  }
</script>

<style>
</style>
