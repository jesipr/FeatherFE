import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';
import AOS from 'aos';
import VueParticles from 'vue-particles';
import App from './App.vue';
import router from './router';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'aos/dist/aos.css';

Vue.use(VueParticles);
Vue.use(BootstrapVue);
Vue.config.productionTip = false;

new Vue({
  created() {
    AOS.init();
  },
  router,
  render: h => h(App),
}).$mount('#app');
