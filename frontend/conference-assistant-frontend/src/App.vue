<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import AppHeader from './components/AppHeader'
import SidebarMenu from './components/SidebarMenu'

export default {
  name: 'App',
  components:{
    AppHeader,
    SidebarMenu
  }
}
</script>

<style>
/* @import 'http://localhost:8080/assets/index.css'; */
@import 'assets/index.css';
</style>
