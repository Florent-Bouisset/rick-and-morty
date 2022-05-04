<template>
  <div id="app">
    <div id="nav"></div>
    <h1>TEST {{env}}</h1>
    <router-view name="default" />
    <router-view name="modal" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      env: process.env.VUE_APP_HELLO
    }
  }
}
</script>
<style>
#nav {
  padding: 30px;
}
</style>
