<template>
  <div>
    <nav class="navbar" :class="{ 'navbar-scroll': isScrolled }">
      <div class="container">
        <router-link v-if="isScrolled" to="/" class="navbar-logo">
          <img src="@/assets/image/logo.png" alt="Logo" />
        </router-link>
        <div class="sidebar-mobile" @click="toggleMobileSidebar">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul class="navbar-nav" :class="{ active: isMobileSidebarOpen }">
          <li class="nav-item">
            <router-link
              class="nav-link"
              to="/"
              @click.native="
                () => {
                  scrollToSection('app')
                  closeMobileSidebar()
                }
              "
              >// home</router-link
            >
          </li>
          <li class="nav-item">
            <router-link
              class="nav-link"
              to="/experience"
              @click.native="scrollToSection('experience')"
              >// experience</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/project" @click.native="scrollToSection('project')"
              >// project</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/about" @click.native="scrollToSection('about')"
              >// about</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/contact" @click.native="scrollToSection('contact')"
              >// contact</router-link
            >
          </li>
          <li class="nav-socmed" v-if="isScrolled">
            <a href="https://www.instagram.com/azidmuhammadd" target="_blank">
              <img src="@/assets/image/instagram.png" alt="Instagram" class="nav-icon" />
            </a>
            <a href="https://github.com/AzidMuhammad" target="_blank">
              <img src="@/assets/image/github.png" alt="GitHub" class="nav-icon" />
            </a>
            <a href="https://www.linkedin.com/in/azidmuhammad" target="_blank">
              <img src="@/assets/image/idn.png" alt="LinkedIn" class="nav-icon" />
            </a>
            <a href="https://www.tiktok.com/@jddzz_" target="_blank">
              <img src="@/assets/image/tiktok.png" alt="TikTok" class="nav-icon" />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
import { onMounted, onUnmounted } from 'vue'
import { RouterLink } from 'vue-router'

export default {
  name: 'NavbarComponent',
  data() {
    return {
      isScrolled: false,
      beforeScroll: true,
      isMobileSidebarOpen: false
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  unmounted() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      this.isScrolled = window.scrollY > 0
      if (this.beforeScroll && this.isScrolled) {
        this.beforeScroll = false
      }
    },
    closeMobileSidebar() {
      this.isMobileSidebarOpen = false
    },
    scrollToSection(sectionId) {
      const section = document.getElementById(sectionId)
      if (section) {
        window.scrollTo({
          top: section.offsetTop,
          behavior: 'smooth'
        })
      }
    },
    toggleMobileSidebar() {
      this.isMobileSidebarOpen = !this.isMobileSidebarOpen
      if (this.isMobileSidebarOpen) {
        this.isScrolled = true
      } else {
        this.isScrolled = window.scrollY > 0
      }
    }
  }
}
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: 10px 0;
  background-color: white;
  width: 100%;
  font-family: 'Courier New', Courier, monospace;
  font-size: 20px;
  font-weight: bolder !important;
  display: flex;
  justify-content: space-around;
  align-items: center;
  z-index: 1000;
  transition: transform 0.1s;
  transform: translateY(-15%);
}

.navbar-scroll {
  background-color: rgba(99, 99, 99, 0.5);
  backdrop-filter: blur(5px);
  transition-delay: 2.5s;
  transition: transform 2.5s ease-in-out;
  transform: translateY(0%);
}

.navbar-logo {
  width: 60px;
  height: 60px;
  margin-right: 100px;
}

.container {
  margin-right: 50px;
  margin-left: 50px;
  display: flex;
  justify-content: center;
}

.navbar-nav {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  gap: 20px;
}

.nav-item {
  margin-top: 15px;
  margin-right: 10px;
}

.nav-link {
  color: black;
  text-decoration: none;
  cursor: pointer;
}

.navbar-scroll .nav-link {
  color: white;
  text-decoration: none;
}

.nav-item:hover .nav-link {
  color: gray;
}

.nav-socmed {
  margin-top: 12px;
  margin-left: 50px;
  display: flex;
  gap: 20px;
}

.nav-icon {
  width: 30px;
  height: 30px;
}

.sidebar-mobile {
  display: none;
  cursor: pointer;
}

.sidebar-mobile span {
  display: block;
  width: 25px;
  height: 3px;
  background-color: black;
  margin: 5px;
  transition: transform 0.5s ease-in-out;
  margin-left: -40px;
}

.navbar-nav.active {
  display: flex;
  flex-direction: column;
  margin-left: -30px;
  margin-top: -5px;
}

.navbar-scroll .sidebar-mobile span {
  background-color: white;
}

.navbar-nav.active .sidebar-mobile span:nth-child(1) {
  transform: rotate(45deg) translate(5px, 5px);
}

.navbar-nav.active .sidebar-mobile span:nth-child(2) {
  opacity: 0;
}

.navbar-nav.active .sidebar-mobile span:nth-child(3) {
  transform: rotate(-45deg) translate(4px, -4px);
}

@media (max-width: 768px) {

  .sidebar-mobile {
    display: flex;
    flex-direction: column;
    padding: 10px;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1001;
  }

  .sidebar-mobile span {
    width: 25px;
    height: 3px;
    background-color: black;
    margin: 5px;
    transition: transform 0.5s ease-in-out;
    position: absolute;
  }

  .navbar-nav.active {
    margin-top: 50px;
    margin-left: -40px;
  }

  .sidebar-mobile span:nth-child(1) {
    top: 10px;
    position: absolute;
  }

  .sidebar-mobile span:nth-child(2) {
    top: 18px;
  }

  .sidebar-mobile span:nth-child(3) {
    top: 26px;
  }

  .navbar-nav.active + .sidebar-mobile span {
    display: none;
  }

  .navbar-nav {
    display: none;
    margin-top: 40px;
    z-index: 999;
  }

  .navbar-scroll {
    z-index: 999;
    transition: transform 1s ease-in-out;
  }

  .navbar-scroll .navbar-nav {
    z-index: 999;
    margin-top: 30px;
  }

  .container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .navbar-nav {
    display: none;
    flex-direction: column;
    gap: 10px;
  }

  .navbar-logo {
    display: none;
  }

  .nav-socmed {
    margin-top: 20px;
    margin-left: -5px;
    display: flex;
    gap: 20px;
  }
}

@media (min-width: 769px) and (max-width: 1024px) {
  .container {
    display: flex;
    justify-content: center;
    white-space: nowrap;
    padding: 10 0px;
    margin-left: 50px;
  }

  .navbar-scroll .navbar-nav {
    list-style: none;
    display: flex;
    justify-content: center;
    margin-left: 40px;
    margin-top: -5px;
    gap: 10px;
    justify-content: center;
  }

  .navbar-scroll .nav-link {
    color: white;
    text-decoration: none;
    font-size: 16px;
    transition: background-color 0.3s ease;
    white-space: nowrap;
  }

  .navbar-scroll .nav-link:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }

  .navbar-logo {
    width: 80px;
    height: 60px;
    margin-right: -30px;
    margin-left: -30px;
    margin-top: -15px;
  }

  .nav-item {
    margin-bottom: 10px;
  }

  .nav-icon {
    width: 25px;
    height: 25px;
  }

  .nav-socmed {
    margin-right: -30px;
    margin-left: -1px;
    margin-top: 17px;
    display: flex;
    gap: 10px;
  }

  .sidebar-mobile {
    display: none;
  }
}

@media (min-width: 1024px) and (max-width: 1025px) {
  .nav-item {
    margin-top: 20px;
  }

  .nav-socmed {
    margin-left: 10px;
    margin-top: 15px;
    display: flex;
    gap: 10px;
  }

  .navbar-logo {
    width: 80px;
    height: 60px;
    margin-right: -20px;
    margin-top: -15px;
  }
}
</style>
