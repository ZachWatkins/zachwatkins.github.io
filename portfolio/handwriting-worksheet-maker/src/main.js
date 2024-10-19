import { createApp as createVueApp, h } from 'vue';
import App from './App.vue';

export function createApp(selector) {
    createVueApp(App).mount(selector);
}

export default { createApp };
