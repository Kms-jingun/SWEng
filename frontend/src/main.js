import { createApp } from 'vue'
import App from './App.vue'
import { store } from './store/store';
import './assets/style/_common.css'
import './assets/style/_mediaQueries.css'
import './assets/style/_reset.css'
import './assets/style/_svg.css'
import './assets/style/_variables.css'

import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:8787/';
axios.defaults.headers.get['Content-Type'] = 'application/json';
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.put['Content-Type'] = 'application/json';

const app = createApp(App);

app.config.globalProperties.axios = axios;

app.use(store).mount('#app')
