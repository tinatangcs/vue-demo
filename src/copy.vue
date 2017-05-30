<template>
  <div id="app">
      <div class="container">
        <nav class="navbar navbar-default">
          <ul class="nav navbar-nav">
            <li><router-link to="/home">首页</router-link></li>
            <li><router-link to="/cart">购物车</router-link></li>
          </ul>
        </nav>
     </div>
   <router-view></router-view>
  </div>
</template>
<script>

export default {
  name: 'app',
  components: {

  }
}
</script>
<style>
.body {
    font-family: Arial, Helvetica, sans-serif;
}
</style>
