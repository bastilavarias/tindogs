import { createApp } from 'vue';
import { createPinia } from 'pinia';

import router from './router';

import { Quasar } from 'quasar';
import '@quasar/extras/material-icons/material-icons.css';
import '@quasar/extras/material-icons-outlined/material-icons-outlined.css';
import '@quasar/extras/material-icons-round/material-icons-round.css';
import '@quasar/extras/material-icons-sharp/material-icons-sharp.css';
import 'quasar/src/css/index.sass';

import App from './App.vue';
const app = createApp(App);

app.use(Quasar, {
  plugins: {},
});

app.use(createPinia());
app.use(router);

app.mount('#app');
