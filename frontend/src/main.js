import { createApp, markRaw } from 'vue'
import App from './App.vue'
//routing library
import router from './router'
import './index.css'
//bootstrap library
import 'bootstrap'

import { createPinia } from 'pinia'

//create the instance
const pinia =createPinia();
//create the root store
pinia.use(({ store }) => {
    store.$router = markRaw(router)
});

const app = createApp(App)

app.use(pinia)
app.use(router)
app.mount('#app')


//app.use(router)
//app.mount('#app')
