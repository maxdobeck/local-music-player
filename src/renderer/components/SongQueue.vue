<template>
<Row type="flex" justify="center">
  <div>
    <h2>Songs</h2>
    {{ bookmarks }}
  </div>
</Row>
</template>

<script>
  export default {
    name: 'song-queue',
    props: ['bookmarks']
  }
</script>

<style>
</style>
