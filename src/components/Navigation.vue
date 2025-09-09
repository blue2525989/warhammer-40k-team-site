<template>
  <nav class="navbar">
    <div class="nav-container">
      <router-link to="/" class="nav-logo">
        <span class="logo-icon">⚔️</span>
        <span class="logo-text">Warhammer 40k Team</span>
      </router-link>
      
      <div class="nav-menu" :class="{ active: isMenuOpen }">
        <router-link to="/" class="nav-link" @click="closeMenu">Home</router-link>
        <router-link to="/about" class="nav-link" @click="closeMenu">About</router-link>
        <router-link to="/gallery" class="nav-link" @click="closeMenu">Gallery</router-link>
        <router-link to="/contact" class="nav-link" @click="closeMenu">Contact</router-link>
        <router-link to="/sponsors" class="nav-link" @click="closeMenu">Sponsors</router-link>
      </div>
      
      <div class="nav-toggle" @click="toggleMenu">
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
      </div>
    </div>
  </nav>
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'Navigation',
  setup() {
    const isMenuOpen = ref(false)
    
    const toggleMenu = () => {
      isMenuOpen.value = !isMenuOpen.value
    }
    
    const closeMenu = () => {
      isMenuOpen.value = false
    }
    
    return {
      isMenuOpen,
      toggleMenu,
      closeMenu
    }
  }
})
</script>

<style scoped>
.navbar {
  background: rgba(26, 26, 46, 0.95);
  backdrop-filter: blur(10px);
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
  border-bottom: 2px solid #d4af37;
}

.nav-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
}

.nav-logo {
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #ffffff;
  font-size: 1.5rem;
  font-weight: bold;
}

.logo-icon {
  font-size: 2rem;
  margin-right: 10px;
}

.logo-text {
  background: linear-gradient(45deg, #d4af37, #ffd700);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.nav-menu {
  display: flex;
  gap: 2rem;
}

.nav-link {
  color: #ffffff;
  text-decoration: none;
  font-weight: 500;
  padding: 8px 16px;
  border-radius: 6px;
  transition: all 0.3s ease;
  position: relative;
}

.nav-link:hover {
  color: #d4af37;
  background: rgba(212, 175, 55, 0.1);
}

.nav-link.router-link-active {
  color: #d4af37;
  background: rgba(212, 175, 55, 0.2);
}

.nav-toggle {
  display: none;
  flex-direction: column;
  cursor: pointer;
}

.bar {
  width: 25px;
  height: 3px;
  background: #ffffff;
  margin: 3px 0;
  transition: 0.3s;
  border-radius: 2px;
}

@media (max-width: 768px) {
  .nav-menu {
    position: fixed;
    left: -100%;
    top: 70px;
    flex-direction: column;
    background: rgba(26, 26, 46, 0.98);
    width: 100%;
    text-align: center;
    transition: 0.3s;
    padding: 2rem 0;
    gap: 1rem;
  }

  .nav-menu.active {
    left: 0;
  }

  .nav-toggle {
    display: flex;
  }

  .nav-toggle.active .bar:nth-child(2) {
    opacity: 0;
  }

  .nav-toggle.active .bar:nth-child(1) {
    transform: translateY(8px) rotate(45deg);
  }

  .nav-toggle.active .bar:nth-child(3) {
    transform: translateY(-8px) rotate(-45deg);
  }
}
</style>
