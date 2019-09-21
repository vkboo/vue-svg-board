import Vue from 'vue';
import App from './App.vue';
import SketchBoard from '@plugin';

Vue.config.productionTip = false;

Vue.use(SketchBoard, {
    bezier: true,
});

new Vue({
    render: h => h(App),
}).$mount('#app');
