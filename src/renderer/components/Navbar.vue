<template>
  <div id="navWrapper">
    <div class="nav">
      <Menu mode="horizontal" theme="dark" active-name="1">
        <div class="nav-items">
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
  padding-bottom: 20px;
}
</style>
