import "./bootstrap";
import "../css/app.css";
import { createApp } from "vue";
import App from "./Pages/App.vue";
import router from "./router/index.js";

const app = createApp(App)

app.use(router);
app.mount("#app");
