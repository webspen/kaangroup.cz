import { createApp } from "vue"
import "./style.css"
import App from "./App.vue"
import VWave from "v-wave"


createApp(App)
    .use(VWave)
    .mount("#app")
