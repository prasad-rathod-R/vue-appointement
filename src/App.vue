<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    
    <router-link to="/signIn">Sign in</router-link> |
  </div>
  <router-view/>
</template>

<style>
#nav {
  padding: 13px;
  text-align: end;
  background-color: #3a45dd;
  width: 100%;
  color: white; 
  top:0%;
  font-family: Comic Sans MS, Comic Sans, cursive;
  font-weight: 900;
  position:fixed;
  
}
a{color:white !important}
#nav a.router-link-exact-active {
  color: #eb0d2af8;
}

</style>
