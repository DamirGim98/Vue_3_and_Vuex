import { createApp } from 'vue'
import App from './App'
import components from '@/components/UI';
import router from "@/router/router";
import directives from  '@/directives';
import toggleMixin from "@/mixins/toggleMixin";

const app = createApp(App)

components.forEach(component => {
    app.component(component.name, component)
})

directives.forEach(directive => {
    app.directive(directive.name, directive)
})

app
    .use(router)
    .mount('#app')
