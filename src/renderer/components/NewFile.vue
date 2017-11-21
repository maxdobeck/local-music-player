<template>
  <div id="wrapper">
    <main>
      <input type="button" id="create-file" value="create-new-file"/>
      <div id="newFile">
        <button v-on:click="createNewFile">New Vue Style File</button>
        <h4> {{ message }} </h4>
      </div>
    </main>
  </div>
</template>

<script>
  export default {
    name: 'new-file',
    methods: {
      createNewFile: function (event) {
      }
    }
  }
</script>

<style>
</style>
