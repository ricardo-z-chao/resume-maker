import Vue from 'vue';
import router from '@/router'
import App from '@/App.vue';
import '@/styles/index.css';

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
