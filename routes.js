import index from './components/index.vue';
import contactus from './components/contactus.vue';
import signin from './components/signin.vue';
import signup from './components/signup.vue';
import dashboardCitoyen from './components/dashboardCitoyen.vue';
import dashboardMaire from './components/dashboardMaire.vue';
import dashboardResponsable from './components/dashboardResponsable.vue';
import dashboardAdmin from './components/dashboardAdmin.vue';
import declaration from './components/declaration.vue';
import dec from './components/dec.vue';
import GoogleMap from './components/GoogleMap.vue';
import annonce from './components/annonce.vue';
import rapport from './components/rapport.vue';
export default [
{ path : '/abdo' , component :GoogleMap },
{ path : '/rapport' , component :rapport },
{ path : '/annonce' , component :annonce },
{ path : '/' , component :index },
{ path : '/contactus', component : contactus },
{ path : '/signin', component : signin },
{ path : '/signup', component : signup },
{ path : '/dashboardCitoyen', component : dashboardCitoyen },
{ path : '/dashboardMaire', component : dashboardMaire },
{ path : '/dashboardResponsable', component : dashboardResponsable },
{ path : '/dashboardAdmin', component : dashboardAdmin },
{ path : '/declaration', component : declaration },
{ path : '/dec', component : dec },

];

