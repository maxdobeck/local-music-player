<template>
  <div>
    <merge></merge>
    <find></find>
    <share></share>
    <settings></settings>
  </div>
</template>

<script>
import Find from './TileArea/Find'
import Merge from './TileArea/Merge'
import Share from './TileArea/Share'
import Settings from './TileArea/Settings'

export default {
  name: 'tile-area',
  components: { Find, Merge, Share, Settings }
}
</script>

<style>
</style>
