<template>
  <div id="app">
    <Heador></Heador>
    <div class="main">
      <router-view class="app-layout" name="slidebar"></router-view>
      <router-view name="main"></router-view>
    </div>
  </div>
</template>

<script>
  import Heador from './components/Header'
  import PostList from './components/PostList'
export default {
  name: 'App',
  components:{
    Heador,PostList
  }
}
</script>

<style>
.main{
  width: 80%;
  margin: 0 auto;
}
#app{
  background: #e1e1e1;
  min-height: 100vh;
}
.app-layout{
  position: fixed;
  right:0;
  top:63px;
  min-width: 450px;
}
body{
  margin: 0;
  padding: 0;
}
</style>
