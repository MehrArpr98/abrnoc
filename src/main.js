import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios'

  const app = createApp(App)

  app.use(createPinia())

  app.provide('$axios', axios);
  app.mount('#app')




