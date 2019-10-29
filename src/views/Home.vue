<template>
  <div class="home">
    <div class="wrapper-banner">
      <div class="main-title">
        <h1>ILP</h1>
        <h1 data-aos="fade-up">Explore | Connect | Collaborate</h1>
      </div>
      <vue-particles
        color="#026670"
        :particleOpacity="0.9"
        :particlesNumber="90"
        shapeType="circle"
        :particleSize="4"
        linesColor="#9fedd7"
        :linesWidth="2"
        :lineLinked="true"
        :lineOpacity="0.8"
        :linesDistance="150"
        :moveSpeed="2"
        :hoverEffect="true"
        hoverMode="grab"
        :clickEffect="false"
      ></vue-particles>
    </div>
    <div class="features container-fluid">
      <b-row align-h="center" align-v="center" class="headline pt-5 pb-5">
        <b-col class="brand-name" data-aos="fade-up">
          <h1>What is ILP?</h1>
        </b-col>
        <b-col class="white-card shadow">
          <div class="mb-3 mt-3">
            <font-awesome-icon icon="building" />
            <font-awesome-icon icon="plus" />
            <font-awesome-icon icon="user-graduate" />
          </div>
          <b-container fluid>
            <p>{{fdescription}}</p>
          </b-container>
        </b-col>
      </b-row>
      <b-row id="main-features" align-h="center" align-v="center" class="headline pt-5 pb-5" style="font-family: 'Josefin Sans', sans-serif;">
        <b-col md="4" data-aos="fade-up">
          <font-awesome-icon icon="user-plus" class="mb-2"/>
          <h4 style="font-weight: 600;">JOIN</h4>
          <p>Creating your profile as a professor or industry is easy. Just look for your name or company in our database and add any relevant information</p>
        </b-col>
        <b-col md="4" data-aos="fade-up">
          <font-awesome-icon icon="search" class="mb-2"/>
          <h4 style="font-weight: 600;">EXPLORE</h4>
          <p>Browse by searching academic departments, professors or industry</p>
        </b-col>
        <b-col md="4" data-aos="fade-up">
          <font-awesome-icon icon="chart-bar" class="mb-2"/>
          <h4 style="font-weight: 600;">ANALYZE</h4>
          <p>ILP offers the ability to visualize the data by academic departments, area of interest, and many more</p>
        </b-col>
      </b-row>
      <b-row class="tools" align-h="center" align-v="center">
        <b-col>
          <b-container class="white-card shadow">
            <h3>Create a profile. It's easy!</h3>
            <p>Search for your name in our database</p>
            <b-button pill variant="warning" style="color:white;">
              Register Here
              <font-awesome-icon icon="user-circle" />
            </b-button>
          </b-container>
        </b-col>
        <b-col class="links">
          <div class="browse-bg">
            <b-button pill to="/explore" variant="light">
              Explore
              <font-awesome-icon icon="search" />
            </b-button>
          </div>
          <div class="dashboard-bg">
            <b-button to="/dashboard" pill variant="light">
              Dashboard
              <font-awesome-icon icon="tachometer-alt" />
            </b-button>
          </div>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<style>
@import url("https://fonts.googleapis.com/css?family=Josefin+Sans:400,700|Leckerli+One|Open+Sans:400,400i,600,600i,700,700i&display=swap");
canvas {
  display: inline-block;
}
.links {
  height: 100%;
  padding-right: inherit;
}
.links .btn {
  margin-top: 10%;
}
.browse-bg {
  height: 50%;
  background-image: url("~@/assets/browse_bg.jpeg");
  background-position: center;
  background-size: cover;
}
.dashboard-bg {
  height: 50%;
  background-image: url("~@/assets/dashboard_bg.jpeg");
  background-position: center;
  background-size: cover;
}
.fa-plus {
  margin: 0px 20px;
}
#main-features p{
  line-height: 1.2;
}
#main-features .fa-user-plus,
#main-features .fa-chart-bar,
#main-features .fa-search
{
  font-size: 80px;
  padding: 10px;
  border-radius: 10px;
  background: #026670;
  color: white;
}
.fa-building,
.fa-plus,
.fa-user-graduate {
  font-size: 30px;
}
.white-card {
  background: white;
  padding: 20px 0px;
}
.tools {
  height: 350px;
  background: #026670;
}
.tools .white-card {
  border-radius: 10px;
}
.tools .col p {
  margin-bottom: 30px;
  font-size: 12px;
}
.headline {
  background: #fad54e;
}
.headline .white-card {
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
}
.headline .col h3 {
  font-weight: bold;
  margin-bottom: 20px;
}
.headline .col p {
  line-height: 1.5;
}
.line {
  border: 3px solid;
  width: 25%;
}
.wrapper-banner {
  position: relative;
  -ms-flex-align: center;
  -webkit-box-align: center;
  align-items: center;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  height: 450px;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
}
.main-title {
  z-index: 999;
}
.main-title h1 {
  font-family: "Josefin Sans", sans-serif;
  font-weight: bold;
  font-size: 3.2rem;
}
.brand-name h1 {
  font-family: "Josefin Sans", sans-serif;
  font-weight: bold;
  font-size: 5rem;
  text-shadow: 4px 4px #026670;
  color: white;
}
#particles-js {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.title {
  background: rgb(159, 237, 215, 0.8);
  z-index: 1;
  height: 713px;
}
.header-banner {
  color: white;
}
.header-banner img {
  min-width: 100%;
  position: absolute;
  right: 0;
  z-index: -9999;
}
</style>

<script>
// @ is an alias to /src

export default {
  name: 'home',
  data() {
    return {
      fdescription:
        "The Industry Liason Program (ILP) is a tool for the UPRM's community to discover sponsorship opportunities for activities such as researchs and academic projects. It provides the ability to connect with industry partners and analyze these connections.",
    };
  },
};
</script>
