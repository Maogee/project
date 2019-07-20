import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import echarts from 'echarts'
 
Vue.prototype.$echarts=echarts;

Vue.config.productionTip = false;

Vue.filter("snippet" ,function(value){
  return value.slice(0,30)+"...";
})

new Vue({
  router,
  render: function (h) { return h(App) }
}).$mount('#app')
