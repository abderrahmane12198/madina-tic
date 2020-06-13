import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import Routes from './routes';
import store from './store';
import * as VueGoogleMaps from "vue2-google-maps";

Vue.use(VueGoogleMaps, {
  load: {
    key:"AIzaSyDBrNTM8F5xEuiIpaS2pl-_b_B0MQm44fI",
    libraries: "places", // necessary for places input
  }
});




Vue.use(VueResource);
Vue.use(VueRouter);
import VuePlaceAutocomplete from 'vue-place-autocomplete';
Vue.use(VuePlaceAutocomplete);

  const router = new VueRouter({
    mode:'history',
   routes: Routes
   
});
Vue.config.productionTip = false;

new Vue({
  store,
  router: router,
  el: "#app",
  render: h => h(App),
}).$mount('#app');
