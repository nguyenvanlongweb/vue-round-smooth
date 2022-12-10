import { createApp } from 'vue';

// import VueRoundSmooth from './vue-round';
import VueRoundSmooth from '../dist';
import '../dist/style.css';

import App from './App.vue';

createApp(App).use(VueRoundSmooth).mount('#app');
