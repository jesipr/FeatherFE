<template>
  <div id="app">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <div>
      <b-navbar type="dark">
        <b-navbar-brand id="brand">
          <!-- <b-img id="site_logo" rounded='circle' :src="require('../src/assets/logo.png')"/> -->
          Feather
        </b-navbar-brand>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
          <b-navbar-nav>
            <b-nav-item left="true" :active='$route.name =="home"' to="/">Home</b-nav-item>
            <b-nav-item :active='$route.name =="dashboard"' to="/dashboard">Dashboard</b-nav-item>
            <b-nav-item :active='$route.name =="explore"' to="/explore">Explore</b-nav-item>
          </b-navbar-nav>
          <b-navbar-nav class="ml-auto">
            <b-nav-item :active='$route.name =="signup"' to="/signup">Register</b-nav-item>
            <b-nav-item :active='$route.name =="signin"' to="/signin">Sign In</b-nav-item>
          </b-navbar-nav>
      </b-navbar>
    </div>
    <router-view />
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Leckerli+One|Open+Sans:400,400i,600,600i,700,700i&display=swap');
#app {
  font-family: 'Open Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
li {
  display: table-cell;
  position: relative;
}
.nav-item a:after {
  background: none repeat scroll 0 0 transparent;
  bottom: 0;
  content: "";
  display: block;
  height: 2px;
  left: 50%;
  position: absolute;
  background: #fad54e;
  transition: width 0.3s ease 0s, left 0.3s ease 0s;
  width: 0;
}
.nav-item a:hover:after {
  width: 100%;
  left: 0;
}
#brand{
  font-family: 'Leckerli One', cursive;
  font-size: 28px;
}
nav{
  background: #026670;
}
#site_logo{
  width: 40px;
  background: white;
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
