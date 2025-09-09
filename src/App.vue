<template>
  <div id="app">
    <Navigation />
    <main class="main-content">
      <router-view />
    </main>
    <Footer />
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import Navigation from './components/Navigation.vue'
import Footer from './components/Footer.vue'

export default defineComponent({
  name: 'App',
  components: {
    Navigation,
    Footer
  }
})
</script>

<style>
.main-content {
  min-height: calc(100vh - 140px);
  padding-top: 80px;
}

/* Global styles */
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.btn {
  background: linear-gradient(45deg, #d4af37, #ffd700);
  color: #1a1a2e;
  padding: 12px 24px;
  border: none;
  border-radius: 6px;
  font-weight: bold;
  text-decoration: none;
  display: inline-block;
  transition: all 0.3s ease;
  cursor: pointer;
}

.btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(212, 175, 55, 0.3);
}

.card {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 12px;
  padding: 24px;
  margin: 16px 0;
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.section-title {
  font-size: 2.5rem;
  margin-bottom: 2rem;
  text-align: center;
  background: linear-gradient(45deg, #d4af37, #ffd700);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

@media (max-width: 768px) {
  .container {
    padding: 0 15px;
  }
  
  .section-title {
    font-size: 2rem;
  }
}
</style>
