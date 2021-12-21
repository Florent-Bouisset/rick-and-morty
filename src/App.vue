<template>
  <div id="app">
    <div id="nav"></div>
    <router-view name="default" />
    <router-view name="modal" />
  </div>
</template>

<style>
#nav {
  padding: 30px;
}
</style>
