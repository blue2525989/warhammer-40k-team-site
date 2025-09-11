# Warhammer 40k Team Website

A modern, responsive single-page application built with Vue.js 3 and the Composition API for a competitive Warhammer 40k team.

## 🚀 Features

- **Modern Vue.js 3**: Built with the latest Vue.js using the Composition API
- **Responsive Design**: Fully responsive layout that works on all devices
- **Single Page Application**: Fast navigation with Vue Router
- **Interactive Components**: Dynamic content with smooth animations
- **Warhammer 40k Themed**: Custom styling inspired by the grimdark universe

## 📋 Pages

- **Home**: Latest news, upcoming tournaments, and team statistics
- **About**: Team overview, member profiles, and team history
- **Gallery**: Showcase of painted models with filtering and modal views
- **Contact**: Multiple contact methods including Discord, email, and contact form
- **Sponsors**: Current sponsors and sponsorship opportunities

## 🛠️ Tech Stack

- **Vue.js 3** - Progressive JavaScript framework
- **Vue Router 4** - Official router for Vue.js
- **Vite** - Next generation frontend tooling
- **CSS3** - Modern styling with gradients, animations, and responsive design

## 📦 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd warhammer-team-site
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:3000`

## 🏗️ Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## 🚀 Deploy to GitHub Pages

After building for production, deploy to GitHub Pages using:

```bash
git subtree push --prefix dist origin gh-pages
```

## 📁 Project Structure

```
src/
├── components/
│   ├── About.vue          # Team and member information
│   ├── Contact.vue        # Contact methods and form
│   ├── Footer.vue         # Site footer
│   ├── Gallery.vue        # Model gallery with filtering
│   ├── Home.vue           # Homepage with news and tournaments
│   ├── Navigation.vue     # Main navigation component
│   └── Sponsors.vue       # Sponsors and partnership info
├── App.vue                # Main application component
└── main.js                # Application entry point
```

## 🎨 Design Features

- **Dark Theme**: Grimdark-inspired color scheme with gold accents
- **Gradient Backgrounds**: Beautiful CSS gradients throughout
- **Card-based Layout**: Clean, modern card components
- **Smooth Animations**: Hover effects and transitions
- **Mobile-first**: Responsive design that works on all screen sizes

## 🔧 Customization

### Colors
The main color scheme uses:
- Primary: `#d4af37` (Gold)
- Secondary: `#ffd700` (Light Gold)
- Background: `#1a1a2e` (Dark Blue)
- Text: `#ffffff` (White)
- Muted Text: `#cccccc` (Light Gray)

### Adding Content

#### News Articles
Edit the `news` array in `src/components/Home.vue`:
```javascript
const news = ref([
  {
    id: 1,
    title: "Your News Title",
    excerpt: "Brief description...",
    date: new Date('2024-03-15')
  }
])
```

#### Team Members
Edit the `teamMembers` array in `src/components/About.vue`:
```javascript
const teamMembers = ref([
  {
    id: 1,
    name: "Member Name",
    role: "Role",
    mainArmy: "Army Name",
    bio: "Member bio...",
    achievements: ["Achievement 1", "Achievement 2"]
  }
])
```

#### Gallery Models
Edit the `models` array in `src/components/Gallery.vue`:
```javascript
const models = ref([
  {
    id: 1,
    name: "Model Name",
    army: "Army",
    painter: "Painter Name",
    category: "Category",
    // ... other properties
  }
])
```

## 📱 Responsive Breakpoints

- Mobile: `< 768px`
- Tablet: `768px - 1024px`
- Desktop: `> 1024px`

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-feature`
3. Commit your changes: `git commit -am 'Add new feature'`
4. Push to the branch: `git push origin feature/new-feature`
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🎯 Future Enhancements

- [ ] Image upload functionality for gallery
- [ ] User authentication system
- [ ] Tournament bracket system
- [ ] Real-time chat integration
- [ ] Mobile app version
- [ ] Blog/news management system
- [ ] Member dashboard
- [ ] Tournament statistics tracking

## 🐛 Known Issues

- Gallery images are currently placeholders
- Contact form submission is simulated (no backend)
- Social media links are placeholder URLs

## 📞 Support

For questions or support, please contact:
- Discord: `discord.gg/warhammer40k-team`
- Email: `team@warhammer40k-team.com`

---

**For the Emperor!** ⚔️

Built with ❤️ for the Warhammer 40k community
