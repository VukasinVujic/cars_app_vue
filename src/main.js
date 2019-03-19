import Vue from "vue";
import App from "./App.vue";
import BootstrapVue from "bootstrap-vue";
import AppCars from "./components/AppCars";

Vue.use(BootstrapVue);
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

import VueRouter from "vue-router";

Vue.use(VueRouter);

Vue.config.productionTip = false;

const routes = [{ path: "/cars", name: "cars", component: AppCars }];

const router = new VueRouter({
  routes: routes,
  mode: "history"
});

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
