/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App
 */
import { createApp } from 'vue';
import App from './App.vue';
import router from './router/index'; // Passe den Pfad entsprechend an
import { registerPlugins } from '@/plugins';

const app = createApp(App);

registerPlugins(app);

app.use(router)
app.mount('#app');
