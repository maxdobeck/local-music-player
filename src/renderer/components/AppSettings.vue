<template>
  <div>
    <Card>
        <div slot="title">
        <Icon type="gear-b" size="65" />
        <h2>Settings</h2>
      </div>
    </Card>
  </div>
</template>

<script>
import Navbar from './Navbar'

export default {
  name: 'app-settings',
  components: { Navbar }
}
</script>

<style>
</style>
