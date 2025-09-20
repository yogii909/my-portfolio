# Yogesh Pruthi - Portfolio Website

## Project Overview
- **Name**: Dynamic Portfolio Website
- **Goal**: Create a stunning, animated portfolio website with switchable Software/Networking profiles
- **Features**: 
  - Opening animation with glowing sparks
  - Portfolio switcher between Software and Networking
  - Animated particle background
  - Smooth section transitions
  - Interactive hover effects
  - Responsive design

## Live Demo
- **Development**: http://localhost:3000
- **Production**: [To be deployed]

## Features

### Completed Features ✅
- Opening animation with name reveal
- Animated particle background with mouse interaction
- Portfolio switcher (Software/Networking)
- Hero section with typing animation
- About Me section with contact info
- Skills display with animated cards
- Projects showcase with modal details
- Experience timeline
- Education cards
- Achievements section
- Contact form with validation
- Fully responsive design
- Glowing cursor effect
- Smooth scroll animations
- Section reveal on scroll

### Tech Stack
- **Framework**: React
- **Styling**: Vanilla CSS (no frameworks)
- **Animations**: CSS animations and transitions
- **Icons**: Font Awesome
- **Fonts**: Google Fonts (Kalam for handwriting, Poppins for body)

## Project Structure
```
webapp/
├── public/
│   ├── index.html
│   ├── manifest.json
│   └── robots.txt
├── src/
│   ├── components/
│   │   ├── About.js/css
│   │   ├── Achievements.js/css
│   │   ├── Contact.js/css
│   │   ├── Education.js/css
│   │   ├── Experience.js/css
│   │   ├── Hero.js/css
│   │   ├── Navbar.js/css
│   │   ├── OpeningAnimation.js/css
│   │   ├── ParticleBackground.js/css
│   │   ├── Projects.js/css
│   │   └── Skills.js/css
│   ├── App.js
│   ├── App.css
│   ├── data.js
│   ├── index.js
│   └── index.css
└── package.json
```

## Data Management
All portfolio data is stored in `src/data.js` with the following structure:
- **common**: Name, contact info, education, achievements
- **software**: Software-specific skills, projects, experience
- **networking**: Networking-specific skills, projects, experience

## Installation & Setup

1. **Clone the repository**
   ```bash
   git clone [repository-url]
   cd webapp
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm start
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

## Customization Guide

### To Update Content
1. Edit `src/data.js` to update:
   - Personal information
   - Skills
   - Projects
   - Experience
   - Education
   - Achievements

### To Modify Styling
1. Global styles: `src/App.css`
2. Component-specific styles: Each component has its own CSS file
3. Color scheme: Update CSS variables in `src/App.css`

### To Add New Sections
1. Create new component in `src/components/`
2. Add corresponding CSS file
3. Import and use in `src/App.js`
4. Update navigation in `src/components/Navbar.js`

## Available Scripts
- `npm start`: Run development server
- `npm build`: Build for production
- `npm test`: Run tests
- `npm eject`: Eject from Create React App (not recommended)

## Browser Support
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance Optimizations
- Lazy loading for images
- Optimized animations using CSS transforms
- Efficient particle system with canvas
- Debounced scroll events
- Optimized re-renders with React hooks

## Future Enhancements
- [ ] Add actual profile photos
- [ ] Implement backend for contact form
- [ ] Add downloadable resume PDFs
- [ ] Add blog section
- [ ] Implement dark/light mode toggle
- [ ] Add more portfolio projects
- [ ] Integrate with GitHub API for live project stats
- [ ] Add testimonials section

## Author
**Yogesh Pruthi**
- Email: pruthiyogesh3@gmail.com
- LinkedIn: [yogesh-pruthi-a76375274](https://www.linkedin.com/in/yogesh-pruthi-a76375274)
- GitHub: [To be added]

## License
This project is open source and available under the MIT License.

## Deployment
To deploy this application:
1. Run `npm run build`
2. Deploy the `build` folder to any static hosting service (Netlify, Vercel, GitHub Pages, etc.)

---

Last Updated: December 2024