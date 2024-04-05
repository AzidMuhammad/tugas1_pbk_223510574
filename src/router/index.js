import { createRouter, createWebHistory } from 'vue-router'
import App from '../App.vue'
import Experience from '@/components/Experience.vue'
import Project from '@/components/Project.vue'
import About from '@/components/About.vue'
import Contact from '@/components/Contact.vue'
import Footer from '@/components/Footer.vue'

const routes = [
  {
    path: '/',
    name: 'app',
    component: App
  },
  {
    path: '/experience',
    name: 'experience',
    component: Experience
  },
  {
    path: '/project',
    name: 'project',
    component: Project
  },
  {
    path: '/about',
    name: 'about',
    component: About
  },
  {
    path: '/contact',
    name: 'contact',
    component: Contact
  },
  {
    path: '/footer',
    name: 'footer',
    component: Footer
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router