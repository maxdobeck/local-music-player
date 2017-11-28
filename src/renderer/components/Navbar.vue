<template>
  <div id="navWrapper">
    <div id="welcome-bar">
      <h2>Hello {{ userName }}</h2>
    </div>
    <div class="nav">
      <Menu mode="horizontal" theme="dark" active-name="1">
      <div class="layout-nav-items">
        <MenuItem name="1">
          <Icon type="home"></Icon>
          Home
        </MenuItem>
      </div>
      </Menu>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'navbar'
  }
</script>

<style>
#navWrapper {
  width: 60%;
  margin: 0 auto;
}

.layout-nav-items {
  margin: 0 auto;
}
</style>
