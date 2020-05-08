import Vue from 'vue';
import App from './App.vue';

Vue.config.productionTip = true;

new Vue({
    render: h => h(App)
}).$mount('#app');

//new Vue({
//    el: '#app',

//    data() {
//        return {
//            info: null
//        }
//    },

//    mounted() {
//        axios.get('https://localhost:44368/api/models/1')
//            .then(response => (this.info = response))
//    }
//}).$mount('#app');
