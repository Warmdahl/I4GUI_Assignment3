import Vue from 'vue';
import App from './App.vue';
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import router from './router'
//import 'vue-material/dist/theme/default.css'
//import 'vue-material/dist/theme/engine'
import 'vue-material/dist/theme/default-dark.css'
//import 'vue-material/dist/components/MdLayout/index.css'

Vue.use(VueMaterial)



Vue.config.productionTip = true;

/*Vue.material.theme.register('default', {
    primary: 'indigo',
    accent: 'amber'
});*/



new Vue({
    router,
    render: h => h(App)
}).$mount('#app');
