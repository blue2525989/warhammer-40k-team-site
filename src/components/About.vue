<template>
  <div class="about">
    <!-- Team Overview Section -->
    <section class="team-overview">
      <div class="container">
        <h1 class="section-title">About Our Team</h1>
        <div class="overview-content">
          <div class="overview-text">
            <p class="lead-text">
              In the grim darkness of the far future, there is only war. But in our gaming community, 
              there is brotherhood, strategy, and the pursuit of tactical excellence.
            </p>
            <p>
              Founded in 2020, our Warhammer 40k team brings together passionate players who share 
              a love for the rich lore, strategic gameplay, and artistic hobby aspects of the game. 
              We compete in tournaments, organize narrative campaigns, and help each other improve 
              our painting and tactical skills.
            </p>
            <p>
              Whether you're a veteran of countless crusades or a fresh recruit just beginning your 
              journey into the 41st millennium, our team welcomes all who share our passion for this 
              incredible hobby.
            </p>
          </div>
          <div class="overview-stats">
            <div class="stat-item">
              <h3>{{ teamStats.founded }}</h3>
              <p>Year Founded</p>
            </div>
            <div class="stat-item">
              <h3>{{ teamStats.members }}</h3>
              <p>Active Members</p>
            </div>
            <div class="stat-item">
              <h3>{{ teamStats.armies }}</h3>
              <p>Different Armies</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Team Values Section -->
    <section class="team-values">
      <div class="container">
        <h2 class="section-title">Our Values</h2>
        <div class="values-grid">
          <div v-for="value in teamValues" :key="value.id" class="value-card card">
            <div class="value-icon">{{ value.icon }}</div>
            <h3>{{ value.title }}</h3>
            <p>{{ value.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Team Members Section -->
    <section class="team-members">
      <div class="container">
        <h2 class="section-title">Meet Our Team</h2>
        <div class="members-grid">
          <div v-for="member in teamMembers" :key="member.id" class="member-card card">
            <div class="member-avatar">
              <span class="avatar-placeholder">{{ member.initials }}</span>
            </div>
            <div class="member-info">
              <h3 class="member-name">{{ member.name }}</h3>
              <p class="member-role">{{ member.role }}</p>
              <p class="member-army">
                <span class="army-label">Main Army:</span> {{ member.mainArmy }}
              </p>
              <p class="member-bio">{{ member.bio }}</p>
              <div class="member-achievements">
                <span v-for="achievement in member.achievements" :key="achievement" class="achievement-badge">
                  {{ achievement }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Team History Section -->
    <section class="team-history">
      <div class="container">
        <h2 class="section-title">Our Journey</h2>
        <div class="timeline">
          <div v-for="event in timeline" :key="event.id" class="timeline-item">
            <div class="timeline-date">{{ event.year }}</div>
            <div class="timeline-content card">
              <h3>{{ event.title }}</h3>
              <p>{{ event.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'About',
  setup() {
    const teamStats = ref({
      founded: 2020,
      members: 15,
      armies: 12
    })

    const teamValues = ref([
      {
        id: 1,
        icon: '🎯',
        title: 'Strategic Excellence',
        description: 'We strive for tactical mastery and continuous improvement in our gameplay, studying the meta and developing innovative strategies.'
      },
      {
        id: 2,
        icon: '🎨',
        title: 'Artistic Passion',
        description: 'We celebrate the hobby aspect of Warhammer 40k, encouraging creativity in painting, converting, and storytelling.'
      },
      {
        id: 3,
        icon: '🤝',
        title: 'Brotherhood',
        description: 'We support each other both in victory and defeat, fostering a welcoming community for all skill levels.'
      },
      {
        id: 4,
        icon: '📚',
        title: 'Lore Appreciation',
        description: 'We dive deep into the rich universe of Warhammer 40k, creating narrative campaigns and themed events.'
      }
    ])

    const teamMembers = ref([
      {
        id: 1,
        name: 'Captain Marcus Steel',
        initials: 'MS',
        role: 'Team Captain & Tournament Organizer',
        mainArmy: 'Ultramarines',
        bio: 'A veteran player with 8+ years of experience. Marcus leads our competitive efforts and organizes our tournament participation.',
        achievements: ['Regional Champion 2023', 'Best General Award', 'Painting Competition Winner']
      },
      {
        id: 2,
        name: 'Sister Elena Voss',
        initials: 'EV',
        role: 'Narrative Campaign Master',
        mainArmy: 'Adepta Sororitas',
        bio: 'Elena crafts our immersive narrative campaigns and helps new players learn the lore and rules of the game.',
        achievements: ['Narrative Event Organizer', 'Lore Expert', 'Community Builder']
      },
      {
        id: 3,
        name: 'Tech-Priest Alexis Forge',
        initials: 'AF',
        role: 'Painting & Conversion Specialist',
        mainArmy: 'Adeptus Mechanicus',
        bio: 'Our resident artist who teaches painting techniques and leads conversion workshops for the team.',
        achievements: ['Golden Daemon Finalist', 'Conversion Master', 'Workshop Leader']
      },
      {
        id: 4,
        name: 'Commissar Viktor Kane',
        initials: 'VK',
        role: 'Strategy Analyst',
        mainArmy: 'Astra Militarum',
        bio: 'Viktor analyzes tournament meta and helps team members optimize their army lists and tactics.',
        achievements: ['Meta Analyst', 'List Building Expert', 'Tactical Advisor']
      },
      {
        id: 5,
        name: 'Farseer Lyralei Swift',
        initials: 'LS',
        role: 'New Player Mentor',
        mainArmy: 'Craftworld Eldar',
        bio: 'Lyralei welcomes new members and helps them get started with their first armies and learn the basics.',
        achievements: ['Mentor of the Year', 'Teaching Excellence', 'Community Ambassador']
      },
      {
        id: 6,
        name: 'Chaplain Thaddeus Dark',
        initials: 'TD',
        role: 'Event Coordinator',
        mainArmy: 'Black Templars',
        bio: 'Thaddeus coordinates our team events, social gatherings, and manages our tournament calendar.',
        achievements: ['Event Organizer', 'Team Spirit Award', 'Logistics Master']
      }
    ])

    const timeline = ref([
      {
        id: 1,
        year: '2020',
        title: 'Team Formation',
        description: 'A small group of friends decided to form a competitive Warhammer 40k team, starting with just 5 members and big dreams.'
      },
      {
        id: 2,
        year: '2021',
        title: 'First Tournament Victory',
        description: 'Our team achieved its first major tournament win at the Regional Championships, putting us on the map in the competitive scene.'
      },
      {
        id: 3,
        year: '2022',
        title: 'Community Growth',
        description: 'We expanded to 12 members and started hosting our own narrative events, becoming a pillar of the local gaming community.'
      },
      {
        id: 4,
        year: '2023',
        title: 'Championship Season',
        description: 'Our most successful year yet, with multiple tournament victories and recognition as one of the top teams in the region.'
      },
      {
        id: 5,
        year: '2024',
        title: 'New Horizons',
        description: 'Continuing to grow and evolve, we\'re now 15 strong and looking toward national-level competition while maintaining our community focus.'
      }
    ])

    return {
      teamStats,
      teamValues,
      teamMembers,
      timeline
    }
  }
})
</script>

<style scoped>
.team-overview {
  padding: 4rem 0;
}

.overview-content {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 4rem;
  margin-top: 2rem;
}

.lead-text {
  font-size: 1.3rem;
  color: #d4af37;
  margin-bottom: 1.5rem;
  font-style: italic;
}

.overview-text p {
  color: #cccccc;
  line-height: 1.8;
  margin-bottom: 1.5rem;
}

.overview-stats {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.stat-item {
  text-align: center;
  padding: 1.5rem;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  border: 1px solid rgba(212, 175, 55, 0.3);
}

.stat-item h3 {
  font-size: 2.5rem;
  color: #d4af37;
  margin-bottom: 0.5rem;
}

.stat-item p {
  color: #cccccc;
  font-weight: 500;
}

.team-values {
  padding: 4rem 0;
  background: rgba(0, 0, 0, 0.3);
}

.values-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.value-card {
  text-align: center;
  transition: transform 0.3s ease;
}

.value-card:hover {
  transform: translateY(-5px);
}

.value-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.value-card h3 {
  color: #d4af37;
  margin-bottom: 1rem;
}

.value-card p {
  color: #cccccc;
  line-height: 1.6;
}

.team-members {
  padding: 4rem 0;
}

.members-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.member-card {
  display: flex;
  gap: 1.5rem;
  transition: transform 0.3s ease;
}

.member-card:hover {
  transform: translateY(-5px);
}

.member-avatar {
  flex-shrink: 0;
}

.avatar-placeholder {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: linear-gradient(45deg, #d4af37, #ffd700);
  color: #1a1a2e;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: bold;
}

.member-info {
  flex: 1;
}

.member-name {
  color: #ffffff;
  margin-bottom: 0.5rem;
}

.member-role {
  color: #d4af37;
  font-weight: 500;
  margin-bottom: 0.5rem;
}

.member-army {
  color: #cccccc;
  margin-bottom: 1rem;
}

.army-label {
  font-weight: bold;
}

.member-bio {
  color: #cccccc;
  line-height: 1.6;
  margin-bottom: 1rem;
}

.member-achievements {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.achievement-badge {
  background: rgba(212, 175, 55, 0.2);
  color: #d4af37;
  padding: 4px 8px;
  border-radius: 12px;
  font-size: 0.8rem;
  border: 1px solid rgba(212, 175, 55, 0.3);
}

.team-history {
  padding: 4rem 0;
  background: rgba(0, 0, 0, 0.3);
}

.timeline {
  margin-top: 2rem;
  position: relative;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 2px;
  height: 100%;
  background: #d4af37;
}

.timeline-item {
  display: flex;
  align-items: center;
  margin-bottom: 3rem;
  position: relative;
}

.timeline-item:nth-child(odd) {
  flex-direction: row;
}

.timeline-item:nth-child(even) {
  flex-direction: row-reverse;
}

.timeline-date {
  width: 100px;
  text-align: center;
  font-size: 1.2rem;
  font-weight: bold;
  color: #d4af37;
  background: #1a1a2e;
  padding: 0.5rem;
  border-radius: 6px;
  border: 2px solid #d4af37;
  position: relative;
  z-index: 2;
}

.timeline-content {
  flex: 1;
  margin: 0 2rem;
  max-width: 400px;
}

.timeline-content h3 {
  color: #ffffff;
  margin-bottom: 1rem;
}

.timeline-content p {
  color: #cccccc;
  line-height: 1.6;
}

@media (max-width: 768px) {
  .overview-content {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  .overview-stats {
    flex-direction: row;
    justify-content: space-around;
  }
  
  .values-grid {
    grid-template-columns: 1fr;
  }
  
  .members-grid {
    grid-template-columns: 1fr;
  }
  
  .member-card {
    flex-direction: column;
    text-align: center;
  }
  
  .timeline::before {
    left: 20px;
  }
  
  .timeline-item {
    flex-direction: row !important;
    padding-left: 60px;
  }
  
  .timeline-date {
    position: absolute;
    left: 0;
    width: 60px;
    font-size: 1rem;
  }
  
  .timeline-content {
    margin: 0;
    max-width: none;
  }
}
</style>
