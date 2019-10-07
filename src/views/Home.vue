<template>
  <div class="home">
    <div class="wrapper-banner">
      <div class="main-title">
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
        :moveSpeed="3"
        :hoverEffect="true"
        hoverMode="grab"
        :clickEffect="false"
      >
      </vue-particles>
    </div>
    <div class="features container-fluid">
      <b-row align-h="center" align-v="center" class="headline">
        <b-col class="brand-name" data-aos="fade-up">
          <h1>Feather</h1>
        </b-col>
        <b-col data-aos="fade-up">
          <h3>Industry + Academia</h3>
          <p>{{fdescription}}</p>
        </b-col>
      </b-row>
      <b-row class="tools mb-5" align-h="center" align-v="center">
        <b-col>
          <h3>Don't have an account? Create one!</h3>
          <b-button pill variant="light">Register Here</b-button>
        </b-col>
        <b-col>
          <div class="mb-5">
            <b-button pill variant="light">Explore</b-button>
          </div>
          <div class="mt-5">
            <b-button pill variant="light">Dashboard</b-button>
          </div>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<style>
  @import url('https://fonts.googleapis.com/css?family=Josefin+Sans:400,700|Leckerli+One|Open+Sans:400,400i,600,600i,700,700i&display=swap');
  canvas {
    display: inline-block;
  }
  .tools{
    height: 350px;
    background: #026670;
    color: white;
  }
  .tools .col h3{
    margin-bottom: 30px;
  }
  .headline{
    height: 450px;
    background: #fad54e;
  }
  .headline .col h3{
    font-weight: bold;
    margin-bottom: 20px;
  }
  .headline .col p{
    line-height: 1.5;
  }
  .line{
    border: 3px solid;
    width: 25%;
  }
  .wrapper-banner{
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
  .main-title h1{
    font-family: 'Josefin Sans', sans-serif;
    font-weight: bold;
    font-size: 3.2rem;
  }
  .brand-name h1{
    font-family: 'Leckerli One', cursive;
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
  .title{
    background: rgb(159, 237, 215, 0.8);
    z-index: 1;
    height: 713px;
  }
  .header-banner{
    color: white;
  }
  .header-banner img{
    min-width: 100%;
    position:absolute;
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
      fdescription: "Feather is a tool for the UPRM's community to discover sponsorship opportunities for activities such as researchs and academic projects. It provides the ability to connect with industry partners and analyze these connections.",
    };
  },
};
</script>
