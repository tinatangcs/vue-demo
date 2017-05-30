<template>
  <div id="app">
    <div class="mainmenu-area">
       <div class="container">
         <div class="row">

               <div class="navbar-collapse collapse">
                   <ul class="nav navbar-nav">
                      <li class = active><router-link to="/home">首页</router-link></li>
                      <li ><router-link to="/cart">购物车</router-link></li>
                   </ul>
               </div>

         </div>
       </div>
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
.mainmenu-area {background: none repeat scroll 0 0 #fbfbfb;
font-family: "Roboto Condensed",sans-serif;
text-transform: uppercase;
width: 100%;
z-index: 999;}
.mainmenu-area ul.navbar-nav li a {
    color: #6e6a6a;
    font-size: 14px;
    padding: 20px;
}

.mainmenu-area ul.navbar-nav li:hover a,
.mainmenu-area ul.navbar-nav li.active a {background: #5a88ca; color:#FFF;}
.mainmenu-area .nav > li > a:focus {background: #5a88ca;color: #FFF;}
</style>
