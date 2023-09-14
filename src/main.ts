import "./assets/main.css"

import { createApp } from "vue"

import App from "./App.vue"
import router from "./router"

const app = createApp(App)

import VueCookies from "vue-cookies"

app.use(router)

app.use(VueCookies)

app.mount("#app")
