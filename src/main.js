import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import "bootstrap/dist/css/bootstrap.css" ;  // bootstrap 5 css
import "bootstrap/dist/js/bootstrap.bundle.js" ;  // bootstrap 5 javaScript

createApp(App)
  .use(router)  // ใช้งาน router
  .mount('#app')