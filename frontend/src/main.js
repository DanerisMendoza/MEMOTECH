import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap';
import Echo from 'laravel-echo';
import Pusher from 'pusher-js';
import store from './store'

window.Pusher = Pusher;
window.Echo = new Echo({
    broadcaster: 'pusher',
    key: process.env.VUE_APP_WEBSOCKETS_KEY,
    wsHost: process.env.VUE_APP_WEBSOCKETS_SERVER,
    wsPort: 6001,
    forceTLS: false,
    disableStats: true,
    cluster: 'mt1'
});

const app = createApp(App);
app.use(router);
app.use(store)
app.mount('#app')
