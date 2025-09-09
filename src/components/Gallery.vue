<template>
  <div class="gallery">
    <!-- Gallery Header -->
    <section class="gallery-header">
      <div class="container">
        <h1 class="section-title">Model Gallery</h1>
        <p class="gallery-subtitle">
          Witness the artistry and craftsmanship of our team's painted armies. 
          Each model tells a story of dedication, skill, and passion for the hobby.
        </p>
        
        <!-- Filter Controls -->
        <div class="filter-controls">
          <button 
            v-for="category in categories" 
            :key="category"
            @click="setActiveFilter(category)"
            :class="['filter-btn', { active: activeFilter === category }]"
          >
            {{ category }}
          </button>
        </div>
      </div>
    </section>

    <!-- Gallery Grid -->
    <section class="gallery-content">
      <div class="container">
        <div class="gallery-grid">
          <div 
            v-for="model in filteredModels" 
            :key="model.id"
            class="gallery-item"
            @click="openModal(model)"
          >
            <div class="model-card card">
              <div class="model-image">
                <div class="image-placeholder">
                  <span class="placeholder-icon">🎨</span>
                  <span class="placeholder-text">{{ model.name }}</span>
                </div>
                <div class="model-overlay">
                  <span class="view-text">Click to View</span>
                </div>
              </div>
              <div class="model-info">
                <h3 class="model-name">{{ model.name }}</h3>
                <p class="model-army">{{ model.army }}</p>
                <p class="model-painter">Painted by: {{ model.painter }}</p>
                <div class="model-tags">
                  <span v-for="tag in model.tags" :key="tag" class="tag">{{ tag }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Empty State -->
        <div v-if="filteredModels.length === 0" class="empty-state">
          <div class="empty-content card">
            <span class="empty-icon">🔍</span>
            <h3>No models found</h3>
            <p>Try selecting a different category or check back later for new additions.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Modal for detailed view -->
    <div v-if="selectedModel" class="modal-overlay" @click="closeModal">
      <div class="modal-content" @click.stop>
        <button class="modal-close" @click="closeModal">&times;</button>
        <div class="modal-body">
          <div class="modal-image">
            <div class="image-placeholder large">
              <span class="placeholder-icon">🎨</span>
              <span class="placeholder-text">{{ selectedModel.name }}</span>
            </div>
          </div>
          <div class="modal-info">
            <h2>{{ selectedModel.name }}</h2>
            <div class="modal-details">
              <div class="detail-item">
                <strong>Army:</strong> {{ selectedModel.army }}
              </div>
              <div class="detail-item">
                <strong>Painter:</strong> {{ selectedModel.painter }}
              </div>
              <div class="detail-item">
                <strong>Completion Date:</strong> {{ formatDate(selectedModel.completionDate) }}
              </div>
              <div class="detail-item">
                <strong>Techniques Used:</strong>
                <div class="techniques">
                  <span v-for="technique in selectedModel.techniques" :key="technique" class="technique-tag">
                    {{ technique }}
                  </span>
                </div>
              </div>
            </div>
            <p class="model-description">{{ selectedModel.description }}</p>
            <div class="model-stats">
              <div class="stat">
                <span class="stat-label">Paint Time:</span>
                <span class="stat-value">{{ selectedModel.paintTime }}</span>
              </div>
              <div class="stat">
                <span class="stat-label">Difficulty:</span>
                <span class="stat-value">{{ selectedModel.difficulty }}/5</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref, computed } from 'vue'

export default defineComponent({
  name: 'Gallery',
  setup() {
    const activeFilter = ref('All')
    const selectedModel = ref(null)
    
    const categories = ref([
      'All', 'Space Marines', 'Chaos', 'Xenos', 'Imperial Guard', 'Vehicles', 'Characters'
    ])

    const models = ref([
      {
        id: 1,
        name: 'Captain in Terminator Armor',
        army: 'Ultramarines',
        painter: 'Captain Marcus Steel',
        category: 'Space Marines',
        tags: ['Character', 'Terminator', 'HQ'],
        completionDate: new Date('2024-02-15'),
        description: 'A masterfully painted Terminator Captain with custom weathering effects and OSL from the power sword. Features advanced edge highlighting and battle damage.',
        techniques: ['Edge Highlighting', 'OSL', 'Weathering', 'Battle Damage'],
        paintTime: '12 hours',
        difficulty: 4
      },
      {
        id: 2,
        name: 'Canoness Superior',
        army: 'Adepta Sororitas',
        painter: 'Sister Elena Voss',
        category: 'Characters',
        tags: ['Character', 'HQ', 'Sisters'],
        completionDate: new Date('2024-01-20'),
        description: 'Elegant paint scheme featuring traditional Sororitas colors with gold NMM techniques and detailed face painting.',
        techniques: ['NMM Gold', 'Face Painting', 'Robes', 'Freehand'],
        paintTime: '15 hours',
        difficulty: 5
      },
      {
        id: 3,
        name: 'Tech-Dominus',
        army: 'Adeptus Mechanicus',
        painter: 'Tech-Priest Alexis Forge',
        category: 'Characters',
        tags: ['Character', 'HQ', 'AdMech'],
        completionDate: new Date('2024-03-01'),
        description: 'Complex conversion work with extensive kitbashing. Features glowing green OSL effects and intricate mechanical details.',
        techniques: ['Kitbashing', 'OSL Green', 'Metallics', 'Conversion'],
        paintTime: '20 hours',
        difficulty: 5
      },
      {
        id: 4,
        name: 'Leman Russ Battle Tank',
        army: 'Astra Militarum',
        painter: 'Commissar Viktor Kane',
        category: 'Vehicles',
        tags: ['Vehicle', 'Tank', 'Heavy Support'],
        completionDate: new Date('2024-02-28'),
        description: 'Realistic camouflage pattern with extensive weathering and mud effects. Includes detailed crew and interior work.',
        techniques: ['Camouflage', 'Weathering', 'Mud Effects', 'Crew Painting'],
        paintTime: '18 hours',
        difficulty: 3
      },
      {
        id: 5,
        name: 'Farseer on Jetbike',
        army: 'Craftworld Eldar',
        painter: 'Farseer Lyralei Swift',
        category: 'Xenos',
        tags: ['Character', 'Jetbike', 'Psyker'],
        completionDate: new Date('2024-01-10'),
        description: 'Stunning gradient work on the robes with psychic energy effects. The jetbike features smooth color transitions and gem effects.',
        techniques: ['Gradients', 'Gem Effects', 'Energy Effects', 'Smooth Blending'],
        paintTime: '14 hours',
        difficulty: 4
      },
      {
        id: 6,
        name: 'Chaos Space Marine Squad',
        army: 'Black Legion',
        painter: 'Chaplain Thaddeus Dark',
        category: 'Chaos',
        tags: ['Troops', 'Squad', 'Chaos Marines'],
        completionDate: new Date('2024-03-10'),
        description: 'Dark and menacing paint scheme with glowing red eyes and corrupted armor effects. Each marine has unique battle damage.',
        techniques: ['Dark Colors', 'Red OSL', 'Corruption Effects', 'Battle Damage'],
        paintTime: '25 hours',
        difficulty: 3
      },
      {
        id: 7,
        name: 'Intercessor Squad',
        army: 'Imperial Fists',
        painter: 'Captain Marcus Steel',
        category: 'Space Marines',
        tags: ['Troops', 'Primaris', 'Squad'],
        completionDate: new Date('2024-02-05'),
        description: 'Clean yellow armor with precise edge highlighting. Squad markings and chapter symbols painted freehand.',
        techniques: ['Yellow Armor', 'Edge Highlighting', 'Freehand Symbols', 'Squad Markings'],
        paintTime: '16 hours',
        difficulty: 3
      },
      {
        id: 8,
        name: 'Kastelan Robot Maniple',
        army: 'Adeptus Mechanicus',
        painter: 'Tech-Priest Alexis Forge',
        category: 'Xenos',
        tags: ['Elite', 'Robots', 'AdMech'],
        completionDate: new Date('2024-01-25'),
        description: 'Metallic paint scheme with rust effects and glowing power sources. Each robot has unique wear patterns.',
        techniques: ['Metallics', 'Rust Effects', 'Power Glow', 'Weathering'],
        paintTime: '22 hours',
        difficulty: 4
      }
    ])

    const filteredModels = computed(() => {
      if (activeFilter.value === 'All') {
        return models.value
      }
      return models.value.filter(model => model.category === activeFilter.value)
    })

    const setActiveFilter = (category) => {
      activeFilter.value = category
    }

    const openModal = (model) => {
      selectedModel.value = model
    }

    const closeModal = () => {
      selectedModel.value = null
    }

    const formatDate = (date) => {
      return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      })
    }

    return {
      activeFilter,
      selectedModel,
      categories,
      models,
      filteredModels,
      setActiveFilter,
      openModal,
      closeModal,
      formatDate
    }
  }
})
</script>

<style scoped>
.gallery-header {
  padding: 4rem 0 2rem;
  text-align: center;
}

.gallery-subtitle {
  max-width: 600px;
  margin: 0 auto 3rem;
  color: #cccccc;
  font-size: 1.1rem;
  line-height: 1.6;
}

.filter-controls {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
}

.filter-btn {
  background: rgba(255, 255, 255, 0.1);
  color: #cccccc;
  border: 1px solid rgba(212, 175, 55, 0.3);
  padding: 8px 16px;
  border-radius: 20px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.filter-btn:hover,
.filter-btn.active {
  background: #d4af37;
  color: #1a1a2e;
  border-color: #d4af37;
}

.gallery-content {
  padding: 2rem 0 4rem;
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
}

.gallery-item {
  cursor: pointer;
}

.model-card {
  transition: all 0.3s ease;
  overflow: hidden;
}

.model-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(212, 175, 55, 0.2);
}

.model-image {
  position: relative;
  height: 200px;
  overflow: hidden;
}

.image-placeholder {
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #2a2a3e, #3a3a5e);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #d4af37;
}

.image-placeholder.large {
  height: 400px;
}

.placeholder-icon {
  font-size: 3rem;
  margin-bottom: 0.5rem;
}

.placeholder-text {
  font-size: 1rem;
  text-align: center;
  padding: 0 1rem;
}

.model-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.model-card:hover .model-overlay {
  opacity: 1;
}

.view-text {
  color: #d4af37;
  font-weight: bold;
  font-size: 1.1rem;
}

.model-info {
  padding: 1.5rem;
}

.model-name {
  color: #ffffff;
  margin-bottom: 0.5rem;
  font-size: 1.2rem;
}

.model-army {
  color: #d4af37;
  font-weight: 500;
  margin-bottom: 0.5rem;
}

.model-painter {
  color: #cccccc;
  font-size: 0.9rem;
  margin-bottom: 1rem;
}

.model-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tag {
  background: rgba(212, 175, 55, 0.2);
  color: #d4af37;
  padding: 2px 8px;
  border-radius: 10px;
  font-size: 0.8rem;
  border: 1px solid rgba(212, 175, 55, 0.3);
}

.empty-state {
  grid-column: 1 / -1;
  display: flex;
  justify-content: center;
  margin-top: 4rem;
}

.empty-content {
  text-align: center;
  padding: 3rem;
  max-width: 400px;
}

.empty-icon {
  font-size: 4rem;
  margin-bottom: 1rem;
  display: block;
}

.empty-content h3 {
  color: #ffffff;
  margin-bottom: 1rem;
}

.empty-content p {
  color: #cccccc;
}

/* Modal Styles */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 2rem;
}

.modal-content {
  background: rgba(26, 26, 46, 0.95);
  border-radius: 12px;
  max-width: 800px;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
  border: 2px solid #d4af37;
}

.modal-close {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  color: #ffffff;
  font-size: 2rem;
  cursor: pointer;
  z-index: 1001;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: background 0.3s ease;
}

.modal-close:hover {
  background: rgba(255, 255, 255, 0.1);
}

.modal-body {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  padding: 2rem;
}

.modal-image {
  display: flex;
  align-items: center;
}

.modal-info h2 {
  color: #d4af37;
  margin-bottom: 1.5rem;
  font-size: 1.8rem;
}

.modal-details {
  margin-bottom: 1.5rem;
}

.detail-item {
  margin-bottom: 1rem;
  color: #cccccc;
}

.detail-item strong {
  color: #ffffff;
  display: block;
  margin-bottom: 0.25rem;
}

.techniques {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 0.5rem;
}

.technique-tag {
  background: rgba(212, 175, 55, 0.2);
  color: #d4af37;
  padding: 4px 8px;
  border-radius: 12px;
  font-size: 0.8rem;
  border: 1px solid rgba(212, 175, 55, 0.3);
}

.model-description {
  color: #cccccc;
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.model-stats {
  display: flex;
  gap: 2rem;
}

.stat {
  text-align: center;
}

.stat-label {
  display: block;
  color: #d4af37;
  font-weight: bold;
  margin-bottom: 0.25rem;
}

.stat-value {
  color: #ffffff;
  font-size: 1.2rem;
}

@media (max-width: 768px) {
  .filter-controls {
    justify-content: flex-start;
    overflow-x: auto;
    padding-bottom: 1rem;
  }
  
  .filter-btn {
    white-space: nowrap;
  }
  
  .gallery-grid {
    grid-template-columns: 1fr;
  }
  
  .modal-body {
    grid-template-columns: 1fr;
    padding: 1rem;
  }
  
  .modal-content {
    margin: 1rem;
    max-height: 95vh;
  }
  
  .model-stats {
    justify-content: space-around;
  }
}
</style>
