<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style>

html, body{
  height: 100%;
  margin: 0px;
  font-size: 14px;
}

h3{
  font-weight: bold;
}

h4{
  color:white;
  line-height: 22px;
  text-align: center;
  font-weight: bold;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height: 100%;
  position: relative;
  overflow: hidden;
}

#app .home{
  height: 100%;
}

.wait{
  padding:15px;
  text-align: center
}

.wait i{
  font-size:36px;
  color:#3F51B5;
}


#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
