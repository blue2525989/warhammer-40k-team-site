<template>
  <div class="home">
    <!-- Hero Section -->
    <section class="hero">
      <div class="container">
        <div class="hero-content">
          <h1 class="hero-title">Welcome to the Grim Darkness</h1>
          <p class="hero-subtitle">Elite Warhammer 40k Team - For the Emperor!</p>
          <router-link to="/about" class="btn hero-btn">Learn About Our Team</router-link>
        </div>
      </div>
    </section>

    <!-- News Section -->
    <section class="news-section">
      <div class="container">
        <h2 class="section-title">Latest News</h2>
        <div class="news-grid">
          <article v-for="article in news" :key="article.id" class="news-card card">
            <div class="news-date">{{ formatDate(article.date) }}</div>
            <h3 class="news-title">{{ article.title }}</h3>
            <p class="news-excerpt">{{ article.excerpt }}</p>
            <a href="#" class="news-link">Read More</a>
          </article>
        </div>
      </div>
    </section>

    <!-- Tournaments Section -->
    <section class="tournaments-section">
      <div class="container">
        <h2 class="section-title">Upcoming Tournaments</h2>
        <div class="tournaments-grid">
          <div v-for="tournament in tournaments" :key="tournament.id" class="tournament-card card">
            <div class="tournament-header">
              <h3 class="tournament-name">{{ tournament.name }}</h3>
              <span class="tournament-status" :class="tournament.status">{{ tournament.status }}</span>
            </div>
            <div class="tournament-details">
              <div class="tournament-info">
                <span class="info-label">📅 Date:</span>
                <span>{{ formatDate(tournament.date) }}</span>
              </div>
              <div class="tournament-info">
                <span class="info-label">📍 Location:</span>
                <span>{{ tournament.location }}</span>
              </div>
              <div class="tournament-info">
                <span class="info-label">🎯 Format:</span>
                <span>{{ tournament.format }}</span>
              </div>
              <div class="tournament-info">
                <span class="info-label">👥 Team Size:</span>
                <span>{{ tournament.teamSize }}</span>
              </div>
            </div>
            <div class="tournament-actions">
              <button class="btn" v-if="tournament.status === 'Open'">Register Interest</button>
              <span v-else class="status-text">{{ getStatusText(tournament.status) }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Quick Stats Section -->
    <section class="stats-section">
      <div class="container">
        <div class="stats-grid">
          <div class="stat-card card">
            <div class="stat-number">{{ stats.members }}</div>
            <div class="stat-label">Team Members</div>
          </div>
          <div class="stat-card card">
            <div class="stat-number">{{ stats.tournaments }}</div>
            <div class="stat-label">Tournaments Played</div>
          </div>
          <div class="stat-card card">
            <div class="stat-number">{{ stats.victories }}</div>
            <div class="stat-label">Victories</div>
          </div>
          <div class="stat-card card">
            <div class="stat-number">{{ stats.paintedModels }}</div>
            <div class="stat-label">Painted Models</div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { defineComponent, ref, onMounted } from 'vue'

export default defineComponent({
  name: 'Home',
  setup() {
    const news = ref([
      {
        id: 1,
        title: "New Codex: Space Marines Released",
        excerpt: "The latest Space Marines codex brings exciting new rules and units. Our team is already adapting strategies for upcoming tournaments.",
        date: new Date('2024-03-15')
      },
      {
        id: 2,
        title: "Team Victory at Local Championship",
        excerpt: "Congratulations to our team for securing first place at the Regional Warhammer 40k Championship last weekend!",
        date: new Date('2024-03-10')
      },
      {
        id: 3,
        title: "New Team Member Spotlight",
        excerpt: "Welcome our newest member, Brother Marcus, who brings exceptional painting skills and tactical expertise to our ranks.",
        date: new Date('2024-03-05')
      }
    ])

    const tournaments = ref([
      {
        id: 1,
        name: "Grand Tournament 2024",
        date: new Date('2024-04-20'),
        location: "Convention Center, Downtown",
        format: "2000 Points Matched Play",
        teamSize: "5 Players",
        status: "Open"
      },
      {
        id: 2,
        name: "Spring Crusade Event",
        date: new Date('2024-04-15'),
        location: "Local Game Store",
        format: "Crusade Campaign",
        teamSize: "8 Players",
        status: "Registered"
      },
      {
        id: 3,
        name: "Narrative Campaign: Siege of Terra",
        date: new Date('2024-05-01'),
        location: "Gaming Club",
        format: "Narrative Play",
        teamSize: "12 Players",
        status: "Planning"
      }
    ])

    const stats = ref({
      members: 15,
      tournaments: 23,
      victories: 18,
      paintedModels: 450
    })

    const formatDate = (date) => {
      return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      })
    }

    const getStatusText = (status) => {
      switch (status) {
        case 'Registered': return 'Team Registered ✓'
        case 'Planning': return 'In Planning Phase'
        case 'Closed': return 'Registration Closed'
        default: return status
      }
    }

    return {
      news,
      tournaments,
      stats,
      formatDate,
      getStatusText
    }
  }
})
</script>

<style scoped>
.hero {
  background: linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), 
              url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 600"><rect fill="%23000" width="1200" height="600"/><polygon fill="%23333" points="0,600 400,200 800,400 1200,0 1200,600"/></svg>');
  background-size: cover;
  background-position: center;
  min-height: 60vh;
  display: flex;
  align-items: center;
  text-align: center;
}

.hero-content {
  max-width: 800px;
  margin: 0 auto;
}

.hero-title {
  font-size: 3.5rem;
  margin-bottom: 1rem;
  background: linear-gradient(45deg, #d4af37, #ffd700);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
}

.hero-subtitle {
  font-size: 1.5rem;
  margin-bottom: 2rem;
  color: #cccccc;
}

.hero-btn {
  font-size: 1.2rem;
  padding: 16px 32px;
}

.news-section,
.tournaments-section,
.stats-section {
  padding: 4rem 0;
}

.news-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.news-card {
  transition: transform 0.3s ease;
}

.news-card:hover {
  transform: translateY(-5px);
}

.news-date {
  color: #d4af37;
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
}

.news-title {
  font-size: 1.3rem;
  margin-bottom: 1rem;
  color: #ffffff;
}

.news-excerpt {
  color: #cccccc;
  line-height: 1.6;
  margin-bottom: 1rem;
}

.news-link {
  color: #d4af37;
  text-decoration: none;
  font-weight: bold;
  transition: color 0.3s ease;
}

.news-link:hover {
  color: #ffd700;
}

.tournaments-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.tournament-card {
  transition: transform 0.3s ease;
}

.tournament-card:hover {
  transform: translateY(-5px);
}

.tournament-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
}

.tournament-name {
  font-size: 1.4rem;
  color: #ffffff;
}

.tournament-status {
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: bold;
  text-transform: uppercase;
}

.tournament-status.Open {
  background: #28a745;
  color: white;
}

.tournament-status.Registered {
  background: #d4af37;
  color: #1a1a2e;
}

.tournament-status.Planning {
  background: #6c757d;
  color: white;
}

.tournament-details {
  margin-bottom: 1.5rem;
}

.tournament-info {
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
  color: #cccccc;
}

.info-label {
  font-weight: bold;
  color: #d4af37;
}

.tournament-actions {
  text-align: center;
}

.status-text {
  color: #d4af37;
  font-weight: bold;
}

.stats-section {
  background: rgba(0,0,0,0.3);
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
}

.stat-card {
  text-align: center;
  transition: transform 0.3s ease;
}

.stat-card:hover {
  transform: scale(1.05);
}

.stat-number {
  font-size: 3rem;
  font-weight: bold;
  color: #d4af37;
  margin-bottom: 0.5rem;
}

.stat-label {
  font-size: 1.1rem;
  color: #cccccc;
}

@media (max-width: 768px) {
  .hero-title {
    font-size: 2.5rem;
  }
  
  .hero-subtitle {
    font-size: 1.2rem;
  }
  
  .news-grid,
  .tournaments-grid {
    grid-template-columns: 1fr;
  }
  
  .tournament-header {
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }
  
  .stats-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
