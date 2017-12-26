<template>
  <div>
    <ButtonGroup  class="playerControls">
      <Button type="primary" size="large">
        <Icon type="chevron-left"></Icon>
        Prev
      </Button>
      <Button class="" :class="{ paused: paused }" type="primary" size="large">
        <Icon v-if="paused === true" type="pause"></Icon>
        <Icon v-else type="play"></Icon>
      </Button>
      <Button type="primary" size="large">
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
  }
}
</script>

<style>
  .paused {
    background-color: red;
  }
  .paused:hover {
    background-color: red;
  }
</style>
