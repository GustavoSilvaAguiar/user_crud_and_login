import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import localStorage from "./plugins/localStorage";
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";

const options = {
  transition: "Vue-Toastification__bounce",
  maxToasts: 20,
  newestOnTop: true,
  position: "top-center",
  timeout: 5000,
  closeOnClick: true,
  pauseOnFocusLoss: true,
  pauseOnHover: true,
  draggable: true,
  draggablePercent: 0.6,
  showCloseButtonOnHover: false,
  hideProgressBar: false,
  closeButton: "button",
  icon: true,
  rtl: false,
};

createApp(App)
  .use(store)
  .use(router)
  .use(vuetify)
  .use(Toast, options)
  .use(localStorage)
  .mount("#app");
