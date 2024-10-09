import './bootstrap';
import { createApp, h } from 'vue';
import { createInertiaApp } from '@inertiajs/vue3';
import type { DefineComponent } from 'vue';
import PrimeVue from 'primevue/config';
import Aura from '@primevue/themes/aura';

createInertiaApp({
    resolve: name => {
        const pages = import.meta.glob<DefineComponent>('./Pages/**/*.vue', { eager: true })
        return pages[`./Pages/${name}.vue`]
    },
    setup({ el, App, props, plugin }) {
        createApp({ render: () => h(App, props) })
            .use(plugin)
            .use(PrimeVue, {
                theme: {
                    preset: Aura,
                    options: {
                        darkModeSelector: '.app-dark',
                        cssLayer: {
                            name: 'primevue',
                            order: 'tailwind-base, primevue, tailwind-utilities'
                        }
                    }
                },
                ripple: true
            })
            .mount(el)
    },
});
