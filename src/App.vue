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
            <b-button pill variant="light">Sign In</b-button>
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
