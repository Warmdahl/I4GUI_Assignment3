import Vue from 'vue';
import App from './App.vue';
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import router from './router'
//import 'vue-material/dist/theme/default.css'
import 'vue-material/dist/theme/default-dark.css'
//import "~vue-material/dist/theme/engine"; // Import the theme engine
//import "~vue-material/dist/theme/all";
/*include md - register - theme("default", (
    primary: md-get - palette - color(blue, A200), // The primary color of your application
    accent: md - get - palette - color(red, A200) // The accent or secondary color
));*/

Vue.use(VueMaterial)


Vue.config.productionTip = true;


new Vue({
    router,
    render: h => h(App)
}).$mount('#app');
