<template>
  <div class="contact">
    <!-- Contact Header -->
    <section class="contact-header">
      <div class="container">
        <h1 class="section-title">Contact Us</h1>
        <p class="contact-subtitle">
          Ready to join our ranks or have questions about our team? 
          Reach out through any of the channels below. For the Emperor!
        </p>
      </div>
    </section>

    <!-- Contact Methods -->
    <section class="contact-methods">
      <div class="container">
        <div class="methods-grid">
          <!-- Discord Section -->
          <div class="contact-method card">
            <div class="method-icon">
              <span class="icon">💬</span>
            </div>
            <h3>Join Our Discord</h3>
            <p>Connect with our team members, discuss strategies, and participate in our community events.</p>
            <div class="discord-info">
              <div class="server-name">Warhammer 40k Team Server</div>
              <div class="server-invite">
                <code>discord.gg/warhammer40k-team</code>
                <button class="copy-btn" @click="copyToClipboard('discord.gg/warhammer40k-team')">
                  {{ copiedText === 'discord' ? 'Copied!' : 'Copy' }}
                </button>
              </div>
            </div>
            <a href="https://discord.gg/warhammer40k-team" class="btn discord-btn" target="_blank">
              Join Discord Server
            </a>
          </div>

          <!-- Email Section -->
          <div class="contact-method card">
            <div class="method-icon">
              <span class="icon">📧</span>
            </div>
            <h3>Email Us</h3>
            <p>Send us detailed inquiries, tournament information, or partnership proposals.</p>
            <div class="email-info">
              <div class="email-address">
                <code>team@warhammer40k-team.com</code>
                <button class="copy-btn" @click="copyToClipboard('team@warhammer40k-team.com')">
                  {{ copiedText === 'email' ? 'Copied!' : 'Copy' }}
                </button>
              </div>
            </div>
            <a href="mailto:team@warhammer40k-team.com" class="btn email-btn">
              Send Email
            </a>
          </div>

          <!-- Meeting Section -->
          <div class="contact-method card">
            <div class="method-icon">
              <span class="icon">🎲</span>
            </div>
            <h3>Meet In Person</h3>
            <p>Find us at local gaming stores and tournaments. Check our schedule for upcoming events.</p>
            <div class="meeting-info">
              <div class="location-item">
                <strong>Primary Location:</strong>
                <span>Dragon's Den Gaming Store</span>
              </div>
              <div class="location-item">
                <strong>Weekly Meetup:</strong>
                <span>Saturdays, 2:00 PM - 8:00 PM</span>
              </div>
            </div>
            <router-link to="/" class="btn meeting-btn">
              View Schedule
            </router-link>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Form -->
    <section class="contact-form-section">
      <div class="container">
        <div class="form-container">
          <h2 class="form-title">Send Us a Message</h2>
          <form @submit.prevent="submitForm" class="contact-form">
            <div class="form-row">
              <div class="form-group">
                <label for="name">Name *</label>
                <input 
                  type="text" 
                  id="name" 
                  v-model="form.name" 
                  required 
                  :class="{ error: errors.name }"
                >
                <span v-if="errors.name" class="error-message">{{ errors.name }}</span>
              </div>
              <div class="form-group">
                <label for="email">Email *</label>
                <input 
                  type="email" 
                  id="email" 
                  v-model="form.email" 
                  required 
                  :class="{ error: errors.email }"
                >
                <span v-if="errors.email" class="error-message">{{ errors.email }}</span>
              </div>
            </div>

            <div class="form-group">
              <label for="subject">Subject *</label>
              <select id="subject" v-model="form.subject" required :class="{ error: errors.subject }">
                <option value="">Select a subject...</option>
                <option value="join-team">Join the Team</option>
                <option value="tournament">Tournament Information</option>
                <option value="partnership">Partnership/Sponsorship</option>
                <option value="general">General Inquiry</option>
                <option value="other">Other</option>
              </select>
              <span v-if="errors.subject" class="error-message">{{ errors.subject }}</span>
            </div>

            <div class="form-group">
              <label for="experience">Warhammer 40k Experience</label>
              <select id="experience" v-model="form.experience">
                <option value="">Select your experience level...</option>
                <option value="beginner">Beginner (0-1 years)</option>
                <option value="intermediate">Intermediate (2-5 years)</option>
                <option value="advanced">Advanced (5+ years)</option>
                <option value="veteran">Veteran (10+ years)</option>
              </select>
            </div>

            <div class="form-group">
              <label for="armies">Favorite Armies (Optional)</label>
              <input 
                type="text" 
                id="armies" 
                v-model="form.armies" 
                placeholder="e.g., Space Marines, Chaos, Eldar..."
              >
            </div>

            <div class="form-group">
              <label for="message">Message *</label>
              <textarea 
                id="message" 
                v-model="form.message" 
                required 
                rows="6" 
                :class="{ error: errors.message }"
                placeholder="Tell us about yourself, your interests, or your inquiry..."
              ></textarea>
              <span v-if="errors.message" class="error-message">{{ errors.message }}</span>
            </div>

            <div class="form-actions">
              <button type="submit" class="btn submit-btn" :disabled="isSubmitting">
                {{ isSubmitting ? 'Sending...' : 'Send Message' }}
              </button>
            </div>
          </form>

          <!-- Success Message -->
          <div v-if="showSuccess" class="success-message card">
            <span class="success-icon">✅</span>
            <h3>Message Sent Successfully!</h3>
            <p>Thank you for reaching out. We'll get back to you within 24-48 hours.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="faq-section">
      <div class="container">
        <h2 class="section-title">Frequently Asked Questions</h2>
        <div class="faq-grid">
          <div v-for="faq in faqs" :key="faq.id" class="faq-item card">
            <h3 class="faq-question">{{ faq.question }}</h3>
            <p class="faq-answer">{{ faq.answer }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { defineComponent, ref, reactive } from 'vue'

export default defineComponent({
  name: 'Contact',
  setup() {
    const copiedText = ref('')
    const isSubmitting = ref(false)
    const showSuccess = ref(false)
    
    const form = reactive({
      name: '',
      email: '',
      subject: '',
      experience: '',
      armies: '',
      message: ''
    })
    
    const errors = reactive({
      name: '',
      email: '',
      subject: '',
      message: ''
    })

    const faqs = ref([
      {
        id: 1,
        question: 'How can I join your team?',
        answer: 'We welcome new members! Contact us through Discord or email, and we\'ll invite you to our next meetup. We accept players of all skill levels.'
      },
      {
        id: 2,
        question: 'Do I need to own armies to join?',
        answer: 'Not necessarily! We have loaner armies for beginners, and we can help you choose and build your first army. The most important thing is enthusiasm for the hobby.'
      },
      {
        id: 3,
        question: 'What tournaments do you participate in?',
        answer: 'We participate in local, regional, and some national tournaments. Check our homepage for upcoming events and our tournament schedule.'
      },
      {
        id: 4,
        question: 'Do you offer painting lessons?',
        answer: 'Yes! Our team includes skilled painters who regularly host painting workshops and one-on-one tutoring sessions for members.'
      },
      {
        id: 5,
        question: 'What are your meetup times?',
        answer: 'We meet every Saturday from 2:00 PM to 8:00 PM at Dragon\'s Den Gaming Store. We also have additional events throughout the week.'
      },
      {
        id: 6,
        question: 'Are you looking for sponsors?',
        answer: 'We\'re always open to partnership opportunities with gaming stores, hobby companies, and local businesses. Contact us to discuss sponsorship options.'
      }
    ])

    const copyToClipboard = async (text) => {
      try {
        await navigator.clipboard.writeText(text)
        copiedText.value = text.includes('discord') ? 'discord' : 'email'
        setTimeout(() => {
          copiedText.value = ''
        }, 2000)
      } catch (err) {
        console.error('Failed to copy text: ', err)
      }
    }

    const validateForm = () => {
      // Reset errors
      Object.keys(errors).forEach(key => {
        errors[key] = ''
      })

      let isValid = true

      if (!form.name.trim()) {
        errors.name = 'Name is required'
        isValid = false
      }

      if (!form.email.trim()) {
        errors.email = 'Email is required'
        isValid = false
      } else if (!/\S+@\S+\.\S+/.test(form.email)) {
        errors.email = 'Please enter a valid email address'
        isValid = false
      }

      if (!form.subject) {
        errors.subject = 'Please select a subject'
        isValid = false
      }

      if (!form.message.trim()) {
        errors.message = 'Message is required'
        isValid = false
      } else if (form.message.trim().length < 10) {
        errors.message = 'Message must be at least 10 characters long'
        isValid = false
      }

      return isValid
    }

    const submitForm = async () => {
      if (!validateForm()) {
        return
      }

      isSubmitting.value = true

      // Simulate form submission
      setTimeout(() => {
        isSubmitting.value = false
        showSuccess.value = true
        
        // Reset form
        Object.keys(form).forEach(key => {
          form[key] = ''
        })

        // Hide success message after 5 seconds
        setTimeout(() => {
          showSuccess.value = false
        }, 5000)
      }, 1500)
    }

    return {
      copiedText,
      isSubmitting,
      showSuccess,
      form,
      errors,
      faqs,
      copyToClipboard,
      submitForm
    }
  }
})
</script>

<style scoped>
.contact-header {
  padding: 4rem 0 2rem;
  text-align: center;
}

.contact-subtitle {
  max-width: 600px;
  margin: 0 auto;
  color: #cccccc;
  font-size: 1.1rem;
  line-height: 1.6;
}

.contact-methods {
  padding: 2rem 0;
}

.methods-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.contact-method {
  text-align: center;
  transition: transform 0.3s ease;
}

.contact-method:hover {
  transform: translateY(-5px);
}

.method-icon {
  margin-bottom: 1.5rem;
}

.method-icon .icon {
  font-size: 3rem;
}

.contact-method h3 {
  color: #d4af37;
  margin-bottom: 1rem;
  font-size: 1.5rem;
}

.contact-method p {
  color: #cccccc;
  margin-bottom: 1.5rem;
  line-height: 1.6;
}

.discord-info,
.email-info {
  margin-bottom: 1.5rem;
}

.server-name {
  color: #ffffff;
  font-weight: bold;
  margin-bottom: 0.5rem;
}

.server-invite,
.email-address {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
}

.server-invite code,
.email-address code {
  background: rgba(255, 255, 255, 0.1);
  padding: 8px 12px;
  border-radius: 6px;
  color: #d4af37;
  font-family: 'Courier New', monospace;
}

.copy-btn {
  background: rgba(212, 175, 55, 0.2);
  color: #d4af37;
  border: 1px solid rgba(212, 175, 55, 0.3);
  padding: 4px 8px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.8rem;
  transition: all 0.3s ease;
}

.copy-btn:hover {
  background: #d4af37;
  color: #1a1a2e;
}

.discord-btn {
  background: #5865f2;
  border-color: #5865f2;
}

.discord-btn:hover {
  background: #4752c4;
  transform: translateY(-2px);
}

.email-btn {
  background: #ea4335;
  border-color: #ea4335;
}

.email-btn:hover {
  background: #d33b2c;
  transform: translateY(-2px);
}

.meeting-btn {
  background: #28a745;
  border-color: #28a745;
}

.meeting-btn:hover {
  background: #218838;
  transform: translateY(-2px);
}

.meeting-info {
  text-align: left;
  margin-bottom: 1.5rem;
}

.location-item {
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
  color: #cccccc;
}

.location-item strong {
  color: #d4af37;
}

.contact-form-section {
  padding: 4rem 0;
  background: rgba(0, 0, 0, 0.3);
}

.form-container {
  max-width: 600px;
  margin: 0 auto;
}

.form-title {
  text-align: center;
  color: #d4af37;
  margin-bottom: 2rem;
  font-size: 2rem;
}

.contact-form {
  background: rgba(255, 255, 255, 0.05);
  padding: 2rem;
  border-radius: 12px;
  border: 1px solid rgba(212, 175, 55, 0.2);
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group label {
  display: block;
  color: #d4af37;
  margin-bottom: 0.5rem;
  font-weight: 500;
}

.form-group input,
.form-group select,
.form-group textarea {
  width: 100%;
  padding: 12px;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 6px;
  color: #ffffff;
  font-size: 1rem;
  transition: all 0.3s ease;
}

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
  outline: none;
  border-color: #d4af37;
  box-shadow: 0 0 0 2px rgba(212, 175, 55, 0.2);
}

.form-group input::placeholder,
.form-group textarea::placeholder {
  color: #888888;
}

.form-group input.error,
.form-group select.error,
.form-group textarea.error {
  border-color: #dc3545;
}

.error-message {
  color: #dc3545;
  font-size: 0.8rem;
  margin-top: 0.25rem;
  display: block;
}

.form-actions {
  text-align: center;
  margin-top: 2rem;
}

.submit-btn {
  padding: 12px 32px;
  font-size: 1.1rem;
}

.submit-btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.success-message {
  text-align: center;
  margin-top: 2rem;
  padding: 2rem;
  background: rgba(40, 167, 69, 0.2);
  border: 1px solid rgba(40, 167, 69, 0.3);
}

.success-icon {
  font-size: 2rem;
  margin-bottom: 1rem;
  display: block;
}

.success-message h3 {
  color: #28a745;
  margin-bottom: 1rem;
}

.success-message p {
  color: #cccccc;
}

.faq-section {
  padding: 4rem 0;
}

.faq-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.faq-item {
  transition: transform 0.3s ease;
}

.faq-item:hover {
  transform: translateY(-3px);
}

.faq-question {
  color: #d4af37;
  margin-bottom: 1rem;
  font-size: 1.2rem;
}

.faq-answer {
  color: #cccccc;
  line-height: 1.6;
}

@media (max-width: 768px) {
  .methods-grid {
    grid-template-columns: 1fr;
  }
  
  .form-row {
    grid-template-columns: 1fr;
  }
  
  .contact-form {
    padding: 1.5rem;
  }
  
  .server-invite,
  .email-address {
    flex-direction: column;
    gap: 0.5rem;
  }
  
  .faq-grid {
    grid-template-columns: 1fr;
  }
}
</style>
