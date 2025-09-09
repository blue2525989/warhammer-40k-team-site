import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import Home from './components/Home.vue'
import About from './components/About.vue'
import Gallery from './components/Gallery.vue'
import Contact from './components/Contact.vue'
import Sponsors from './components/Sponsors.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/gallery', component: Gallery },
  { path: '/contact', component: Contact },
  { path: '/sponsors', component: Sponsors }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

const app = createApp(App)
app.use(router)
app.mount('#app')
