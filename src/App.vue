<template>
  <div id="app">
    <preload-component class="preload" v-if="loading"></preload-component>

    <div class="content" v-else>
      <NavbarComponent></NavbarComponent>
      <header></header>

      <HeroComponent />

      <div id="experience">
        <ExperienceComponent />
      </div>

      <div id="project">
        <ProjectComponent />
      </div>

      <div id="about">
        <AboutComponent />
      </div>

      <div id="contact">
        <ContactComponent />
      </div>
      <footer id="footer">
        <FooterComponent />
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      loading: true
    }
  },
  components: {
    NavbarComponent,
    HeroComponent,
    ExperienceComponent,
    ProjectComponent,
    AboutComponent,
    ContactComponent,
    FooterComponent,
    'preload-component': PreloadComponent
  },
  mounted() {
    setTimeout(() => {
      this.loading = false
    }, 6000)
  }
}
</script>

<script setup>
import NavbarComponent from './components/Navbar.vue'
import HeroComponent from './components/Hero.vue'
import ExperienceComponent from './components/Experience.vue'
import ProjectComponent from './components/Project.vue'
import AboutComponent from './components/About.vue'
import ContactComponent from './components/Contact.vue'
import FooterComponent from './components/Footer.vue'
import PreloadComponent from './components/Preload.vue'
</script>

<style>
.content {
  opacity: 0;
  animation: fade-in 0.5s ease-in-out forwards;
}

@keyframes fade-in {
  from {
    opacity: 0.5;
  }
  to {
    opacity: 1;
  }
}
</style>
