<template>
  <div class="sponsors">
    <!-- Sponsors Header -->
    <section class="sponsors-header">
      <div class="container">
        <h1 class="section-title">Our Sponsors</h1>
        <p class="sponsors-subtitle">
          We're grateful to our amazing sponsors who support our team and help us pursue excellence 
          in the Warhammer 40k community. Their partnership enables us to compete at the highest levels 
          and grow our hobby.
        </p>
      </div>
    </section>

    <!-- Current Sponsors -->
    <section class="current-sponsors">
      <div class="container">
        <h2 class="section-title">Current Partners</h2>
        <div class="sponsors-grid">
          <div v-for="sponsor in currentSponsors" :key="sponsor.id" class="sponsor-card card">
            <div class="sponsor-logo">
              <div class="logo-placeholder">
                <span class="logo-text">{{ sponsor.name }}</span>
              </div>
            </div>
            <div class="sponsor-info">
              <h3 class="sponsor-name">{{ sponsor.name }}</h3>
              <p class="sponsor-type">{{ sponsor.type }}</p>
              <p class="sponsor-description">{{ sponsor.description }}</p>
              <div class="sponsor-benefits">
                <h4>What they provide:</h4>
                <ul>
                  <li v-for="benefit in sponsor.benefits" :key="benefit">{{ benefit }}</li>
                </ul>
              </div>
              <div class="sponsor-actions">
                <a :href="sponsor.website" class="btn sponsor-btn" target="_blank">
                  Visit {{ sponsor.name }}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Sponsorship Tiers -->
    <section class="sponsorship-tiers">
      <div class="container">
        <h2 class="section-title">Sponsorship Opportunities</h2>
        <p class="tiers-intro">
          Join our community and support competitive Warhammer 40k gaming. We offer various 
          partnership levels to match your business goals and budget.
        </p>
        
        <div class="tiers-grid">
          <div v-for="tier in sponsorshipTiers" :key="tier.id" class="tier-card card">
            <div class="tier-header" :class="tier.featured ? 'featured' : ''">
              <h3 class="tier-name">{{ tier.name }}</h3>
              <div class="tier-price">{{ tier.price }}</div>
              <p class="tier-subtitle">{{ tier.subtitle }}</p>
            </div>
            <div class="tier-benefits">
              <ul>
                <li v-for="benefit in tier.benefits" :key="benefit" class="benefit-item">
                  <span class="benefit-icon">✓</span>
                  {{ benefit }}
                </li>
              </ul>
            </div>
            <div class="tier-actions">
              <router-link to="/contact" class="btn" :class="tier.featured ? 'featured-btn' : ''">
                {{ tier.cta }}
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Partnership Benefits -->
    <section class="partnership-benefits">
      <div class="container">
        <h2 class="section-title">Why Partner With Us?</h2>
        <div class="benefits-grid">
          <div v-for="benefit in partnershipBenefits" :key="benefit.id" class="benefit-card card">
            <div class="benefit-icon">{{ benefit.icon }}</div>
            <h3>{{ benefit.title }}</h3>
            <p>{{ benefit.description }}</p>
            <div class="benefit-stats" v-if="benefit.stats">
              <div v-for="stat in benefit.stats" :key="stat.label" class="stat-item">
                <span class="stat-number">{{ stat.value }}</span>
                <span class="stat-label">{{ stat.label }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Success Stories -->
    <section class="success-stories">
      <div class="container">
        <h2 class="section-title">Success Stories</h2>
        <div class="stories-grid">
          <div v-for="story in successStories" :key="story.id" class="story-card card">
            <div class="story-quote">
              <span class="quote-mark">"</span>
              <p>{{ story.quote }}</p>
              <span class="quote-mark">"</span>
            </div>
            <div class="story-author">
              <div class="author-info">
                <h4>{{ story.author }}</h4>
                <p>{{ story.title }}, {{ story.company }}</p>
              </div>
            </div>
            <div class="story-results">
              <h5>Results:</h5>
              <ul>
                <li v-for="result in story.results" :key="result">{{ result }}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Call to Action -->
    <section class="sponsor-cta">
      <div class="container">
        <div class="cta-content">
          <h2>Ready to Join Our Team?</h2>
          <p>
            Partner with us and become part of the Warhammer 40k community. 
            Let's achieve greatness together in the grim darkness of the far future.
          </p>
          <div class="cta-actions">
            <router-link to="/contact" class="btn cta-btn">
              Become a Sponsor
            </router-link>
            <a href="mailto:partnerships@warhammer40k-team.com" class="btn cta-btn-secondary">
              Partnership Inquiry
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'Sponsors',
  setup() {
    const currentSponsors = ref([
      {
        id: 1,
        name: 'Dragon\'s Den Gaming',
        type: 'Local Game Store Partner',
        description: 'Our primary gaming venue and longtime supporter, providing space for our weekly meetups and tournaments.',
        benefits: [
          'Weekly gaming space rental',
          'Tournament venue hosting',
          'Product discounts for team members',
          'Prize support for events'
        ],
        website: 'https://dragonsden-gaming.com'
      },
      {
        id: 2,
        name: 'Citadel Paints Pro',
        type: 'Hobby Supply Sponsor',
        description: 'Premium paint supplier supporting our painting workshops and helping team members achieve professional results.',
        benefits: [
          'Monthly paint supply packages',
          'Workshop material sponsorship',
          'New product testing opportunities',
          'Painting competition prizes'
        ],
        website: 'https://citadel-paints-pro.com'
      },
      {
        id: 3,
        name: 'Forge World Miniatures',
        type: 'Model Sponsor',
        description: 'Exclusive miniature supplier providing rare and unique models for our collection and competitive play.',
        benefits: [
          'Exclusive model access',
          'Tournament army support',
          'Custom conversion parts',
          'Limited edition releases'
        ],
        website: 'https://forgeworld-miniatures.com'
      }
    ])

    const sponsorshipTiers = ref([
      {
        id: 1,
        name: 'Battle-Brother',
        price: '$500/year',
        subtitle: 'Perfect for local businesses',
        featured: false,
        benefits: [
          'Logo on team website',
          'Social media mentions',
          'Tournament thank you announcements',
          'Quarterly progress reports'
        ],
        cta: 'Join as Battle-Brother'
      },
      {
        id: 2,
        name: 'Captain',
        price: '$1,500/year',
        subtitle: 'Great for gaming stores',
        featured: true,
        benefits: [
          'All Battle-Brother benefits',
          'Logo on team jerseys',
          'Dedicated sponsor spotlight posts',
          'Product placement opportunities',
          'Event naming rights (small events)',
          'Monthly team updates'
        ],
        cta: 'Become a Captain'
      },
      {
        id: 3,
        name: 'Chapter Master',
        price: '$5,000/year',
        subtitle: 'Premium partnership level',
        featured: false,
        benefits: [
          'All Captain benefits',
          'Major tournament title sponsorship',
          'Custom content creation',
          'Product review opportunities',
          'Direct team consultation access',
          'Exclusive event invitations',
          'Annual partnership meeting'
        ],
        cta: 'Lead as Chapter Master'
      }
    ])

    const partnershipBenefits = ref([
      {
        id: 1,
        icon: '👥',
        title: 'Engaged Community',
        description: 'Connect with passionate Warhammer 40k players and hobbyists who are deeply invested in the community.',
        stats: [
          { value: '500+', label: 'Discord Members' },
          { value: '1,200+', label: 'Social Followers' }
        ]
      },
      {
        id: 2,
        icon: '🏆',
        title: 'Competitive Excellence',
        description: 'Associate your brand with a winning team that competes at regional and national tournaments.',
        stats: [
          { value: '15+', label: 'Tournament Wins' },
          { value: '50+', label: 'Top 3 Finishes' }
        ]
      },
      {
        id: 3,
        icon: '📈',
        title: 'Growing Reach',
        description: 'Benefit from our expanding online presence and increasing tournament visibility.',
        stats: [
          { value: '25%', label: 'Monthly Growth' },
          { value: '10K+', label: 'Monthly Views' }
        ]
      },
      {
        id: 4,
        icon: '🎨',
        title: 'Content Creation',
        description: 'Professional content creation including battle reports, tutorials, and product showcases.',
        stats: null
      }
    ])

    const successStories = ref([
      {
        id: 1,
        quote: 'Partnering with this team has brought so many new customers to our store. Their weekly events have become the highlight of our gaming calendar.',
        author: 'Sarah Mitchell',
        title: 'Store Manager',
        company: 'Dragon\'s Den Gaming',
        results: [
          '40% increase in Warhammer 40k product sales',
          '60+ new regular customers',
          'Successful monthly tournament series'
        ]
      },
      {
        id: 2,
        quote: 'The team\'s painting tutorials featuring our products have been incredibly effective. We\'ve seen a significant boost in paint sales and brand awareness.',
        author: 'Marcus Rodriguez',
        title: 'Marketing Director',
        company: 'Citadel Paints Pro',
        results: [
          '200% increase in online paint kit sales',
          '15K+ tutorial video views',
          'Featured in 3 hobby magazines'
        ]
      }
    ])

    return {
      currentSponsors,
      sponsorshipTiers,
      partnershipBenefits,
      successStories
    }
  }
})
</script>

<style scoped>
.sponsors-header {
  padding: 4rem 0 2rem;
  text-align: center;
}

.sponsors-subtitle {
  max-width: 700px;
  margin: 0 auto;
  color: #cccccc;
  font-size: 1.1rem;
  line-height: 1.6;
}

.current-sponsors {
  padding: 2rem 0 4rem;
}

.sponsors-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.sponsor-card {
  display: flex;
  gap: 1.5rem;
  transition: transform 0.3s ease;
}

.sponsor-card:hover {
  transform: translateY(-5px);
}

.sponsor-logo {
  flex-shrink: 0;
  width: 120px;
  height: 120px;
}

.logo-placeholder {
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #d4af37, #ffd700);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #1a1a2e;
  font-weight: bold;
  text-align: center;
  padding: 1rem;
}

.sponsor-info {
  flex: 1;
}

.sponsor-name {
  color: #d4af37;
  margin-bottom: 0.5rem;
  font-size: 1.4rem;
}

.sponsor-type {
  color: #888888;
  font-size: 0.9rem;
  margin-bottom: 1rem;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.sponsor-description {
  color: #cccccc;
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.sponsor-benefits h4 {
  color: #ffffff;
  margin-bottom: 0.5rem;
  font-size: 1rem;
}

.sponsor-benefits ul {
  list-style: none;
  margin-bottom: 1.5rem;
}

.sponsor-benefits li {
  color: #cccccc;
  margin-bottom: 0.25rem;
  padding-left: 1rem;
  position: relative;
}

.sponsor-benefits li::before {
  content: '•';
  color: #d4af37;
  position: absolute;
  left: 0;
}

.sponsor-btn {
  background: linear-gradient(45deg, #d4af37, #ffd700);
  color: #1a1a2e;
}

.sponsorship-tiers {
  padding: 4rem 0;
  background: rgba(0, 0, 0, 0.3);
}

.tiers-intro {
  text-align: center;
  max-width: 600px;
  margin: 0 auto 3rem;
  color: #cccccc;
  font-size: 1.1rem;
  line-height: 1.6;
}

.tiers-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.tier-card {
  text-align: center;
  transition: transform 0.3s ease;
  position: relative;
}

.tier-card:hover {
  transform: translateY(-5px);
}

.tier-header {
  padding: 2rem 1.5rem 1.5rem;
  border-bottom: 1px solid rgba(212, 175, 55, 0.3);
  margin-bottom: 1.5rem;
}

.tier-header.featured {
  background: linear-gradient(135deg, rgba(212, 175, 55, 0.1), rgba(255, 215, 0, 0.1));
  position: relative;
}

.tier-header.featured::before {
  content: 'Most Popular';
  position: absolute;
  top: -10px;
  left: 50%;
  transform: translateX(-50%);
  background: #d4af37;
  color: #1a1a2e;
  padding: 4px 16px;
  border-radius: 12px;
  font-size: 0.8rem;
  font-weight: bold;
}

.tier-name {
  color: #d4af37;
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
}

.tier-price {
  font-size: 2rem;
  font-weight: bold;
  color: #ffffff;
  margin-bottom: 0.5rem;
}

.tier-subtitle {
  color: #cccccc;
  font-size: 0.9rem;
}

.tier-benefits ul {
  list-style: none;
  text-align: left;
  margin-bottom: 2rem;
}

.benefit-item {
  display: flex;
  align-items: center;
  margin-bottom: 0.75rem;
  color: #cccccc;
}

.benefit-icon {
  color: #d4af37;
  margin-right: 0.75rem;
  font-weight: bold;
}

.featured-btn {
  background: linear-gradient(45deg, #d4af37, #ffd700);
  color: #1a1a2e;
  transform: scale(1.05);
}

.partnership-benefits {
  padding: 4rem 0;
}

.benefits-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.benefit-card {
  text-align: center;
  transition: transform 0.3s ease;
}

.benefit-card:hover {
  transform: translateY(-5px);
}

.benefit-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.benefit-card h3 {
  color: #d4af37;
  margin-bottom: 1rem;
}

.benefit-card p {
  color: #cccccc;
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.benefit-stats {
  display: flex;
  justify-content: space-around;
}

.stat-item {
  text-align: center;
}

.stat-number {
  display: block;
  font-size: 1.5rem;
  font-weight: bold;
  color: #d4af37;
}

.stat-label {
  font-size: 0.8rem;
  color: #888888;
}

.success-stories {
  padding: 4rem 0;
  background: rgba(0, 0, 0, 0.3);
}

.stories-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.story-card {
  transition: transform 0.3s ease;
}

.story-card:hover {
  transform: translateY(-5px);
}

.story-quote {
  position: relative;
  margin-bottom: 1.5rem;
}

.quote-mark {
  font-size: 3rem;
  color: #d4af37;
  line-height: 1;
}

.story-quote p {
  color: #cccccc;
  font-style: italic;
  font-size: 1.1rem;
  line-height: 1.6;
  margin: 1rem 0;
}

.story-author {
  margin-bottom: 1.5rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid rgba(212, 175, 55, 0.3);
}

.author-info h4 {
  color: #d4af37;
  margin-bottom: 0.25rem;
}

.author-info p {
  color: #888888;
  font-size: 0.9rem;
}

.story-results h5 {
  color: #ffffff;
  margin-bottom: 0.5rem;
}

.story-results ul {
  list-style: none;
}

.story-results li {
  color: #cccccc;
  margin-bottom: 0.25rem;
  padding-left: 1rem;
  position: relative;
}

.story-results li::before {
  content: '✓';
  color: #28a745;
  position: absolute;
  left: 0;
  font-weight: bold;
}

.sponsor-cta {
  padding: 4rem 0;
  background: linear-gradient(135deg, rgba(212, 175, 55, 0.1), rgba(255, 215, 0, 0.05));
  text-align: center;
}

.cta-content h2 {
  color: #d4af37;
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.cta-content p {
  color: #cccccc;
  font-size: 1.2rem;
  max-width: 600px;
  margin: 0 auto 2rem;
  line-height: 1.6;
}

.cta-actions {
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
}

.cta-btn {
  background: linear-gradient(45deg, #d4af37, #ffd700);
  color: #1a1a2e;
  padding: 16px 32px;
  font-size: 1.1rem;
}

.cta-btn-secondary {
  background: transparent;
  color: #d4af37;
  border: 2px solid #d4af37;
  padding: 14px 30px;
  font-size: 1.1rem;
  text-decoration: none;
  border-radius: 6px;
  transition: all 0.3s ease;
}

.cta-btn-secondary:hover {
  background: #d4af37;
  color: #1a1a2e;
  transform: translateY(-2px);
}

@media (max-width: 768px) {
  .sponsors-grid {
    grid-template-columns: 1fr;
  }
  
  .sponsor-card {
    flex-direction: column;
    text-align: center;
  }
  
  .sponsor-logo {
    width: 100px;
    height: 100px;
    margin: 0 auto;
  }
  
  .tiers-grid {
    grid-template-columns: 1fr;
  }
  
  .benefits-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .stories-grid {
    grid-template-columns: 1fr;
  }
  
  .cta-actions {
    flex-direction: column;
    align-items: center;
  }
  
  .cta-btn,
  .cta-btn-secondary {
    width: 100%;
    max-width: 300px;
  }
}

@media (max-width: 480px) {
  .benefits-grid {
    grid-template-columns: 1fr;
  }
}
</style>
