<template>
  <footer class="footer">
    <div class="footer-container">
      <div class="footer-content">
        <div class="footer-section">
          <h3>Warhammer 40k Team</h3>
          <p>For the Emperor! Join us in the grim darkness of the far future.</p>
        </div>
        <div class="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><router-link to="/">Home</router-link></li>
            <li><router-link to="/about">About</router-link></li>
            <li><router-link to="/gallery">Gallery</router-link></li>
            <li><router-link to="/contact">Contact</router-link></li>
          </ul>
        </div>
        <div class="footer-section">
          <h4>Connect With Us</h4>
          <div class="social-links">
            <a href="#" class="social-link">Discord</a>
            <a href="#" class="social-link">Email</a>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; 2024 Warhammer 40k Team. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Footer'
})
</script>

<style scoped>
.footer {
  background: rgba(26, 26, 46, 0.95);
  border-top: 2px solid #d4af37;
  margin-top: auto;
}

.footer-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 20px 1rem;
}

.footer-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
}

.footer-section h3,
.footer-section h4 {
  color: #d4af37;
  margin-bottom: 1rem;
}

.footer-section p {
  color: #cccccc;
  line-height: 1.6;
}

.footer-section ul {
  list-style: none;
}

.footer-section ul li {
  margin-bottom: 0.5rem;
}

.footer-section ul li a {
  color: #cccccc;
  text-decoration: none;
  transition: color 0.3s ease;
}

.footer-section ul li a:hover {
  color: #d4af37;
}

.social-links {
  display: flex;
  gap: 1rem;
}

.social-link {
  color: #cccccc;
  text-decoration: none;
  padding: 8px 16px;
  border: 1px solid #d4af37;
  border-radius: 6px;
  transition: all 0.3s ease;
}

.social-link:hover {
  background: #d4af37;
  color: #1a1a2e;
}

.footer-bottom {
  text-align: center;
  padding-top: 2rem;
  border-top: 1px solid rgba(212, 175, 55, 0.3);
  color: #888888;
}

@media (max-width: 768px) {
  .footer-content {
    grid-template-columns: 1fr;
    text-align: center;
  }
  
  .social-links {
    justify-content: center;
  }
}
</style>
