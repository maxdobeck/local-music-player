<template>
  <div>
    <Row :gutter="12">
      <Col span="10">
        <merge></merge>
      </Col>
      <Col span="10">
        <find></find>
      </Col>
    </Row>
    <Row :gutter="12">
      <Col span="10">
        <share></share>
      </Col>
      <Col span="10">
        <settings></settings>
      </Col>
    </Row>
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
