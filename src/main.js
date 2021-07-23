import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faFacebook,
  faInstagram,
  faYoutube,
  faTwitter,
  faEtsy
} from "@fortawesome/free-brands-svg-icons";

Vue.component("font-awesome-icon", FontAwesomeIcon);

library.add(faFacebook, faInstagram, faYoutube, faTwitter, faEtsy);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
