# Creative Personal Portfolio Website

A modern, responsive portfolio website built with React.js, featuring smooth animations, dark/light mode toggle, and interactive components.

## 🚀 Features

- **Modern Design**: Clean, professional design with glassmorphism effects
- **Dark/Light Mode**: Toggle between themes with localStorage persistence
- **Smooth Animations**: Framer Motion animations and micro-interactions
- **Responsive**: Mobile-first design that works on all devices
- **Interactive Components**: Hover effects, custom cursor, scroll indicators
- **Contact Form**: Working contact form with validation
- **Project Showcase**: Filterable project gallery with modal details
- **Timeline**: Interactive career timeline
- **Skills Section**: Animated progress bars for skills
- **SEO Optimized**: Meta tags and semantic HTML structure

## 🛠️ Technologies Used

- **Frontend**: React.js 18.3+
- **Styling**: Tailwind CSS with custom configuration
- **Animations**: Framer Motion
- **Icons**: React Icons (Feather Icons)
- **Build Tool**: Vite
- **Package Manager**: NPM

## 📁 Project Structure

```
src/
├── components/
│   ├── Layout/
│   │   ├── Navbar.jsx          # Navigation with scroll effects
│   │   └── Footer.jsx          # Footer with social links
│   ├── Sections/
│   │   ├── Hero.jsx            # Hero section with typing animation
│   │   ├── About.jsx           # About section with timeline
│   │   ├── Projects.jsx        # Projects showcase with filters
│   │   └── Contact.jsx         # Contact form with validation
│   └── UI/
│       ├── Card.jsx            # Reusable card component
│       ├── Button.jsx          # Custom button component
│       └── Modal.jsx           # Modal component for project details
├── hooks/
│   ├── useDarkMode.js          # Dark mode toggle hook
│   └── useScrollPosition.js    # Scroll position tracking
├── utils/
│   └── constants.js            # App constants and data
├── App.tsx                     # Main app component
├── main.tsx                    # Entry point
└── index.css                   # Global styles and Tailwind imports
```

## 🎨 Design Features

### Color Scheme
- **Primary**: Blue gradient (#667eea → #764ba2)
- **Secondary**: Purple variations
- **Accent**: Orange highlights
- **Neutral**: Comprehensive gray scale
- **Semantic**: Success, warning, error states

### Typography
- **Headings**: Poppins (300-800 weights)
- **Body**: Inter (300-700 weights)
- **Spacing**: 8px grid system
- **Line Height**: 150% body, 120% headings

### Animations
- **Framer Motion**: Page transitions and micro-interactions
- **CSS Transitions**: Smooth hover effects (300ms ease-in-out)
- **Custom Keyframes**: Floating elements, typing animation
- **Scroll Animations**: Elements animate in on scroll

## 🚀 Getting Started

### Prerequisites
- Node.js 16+ and npm

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/portfolio-website.git
   cd portfolio-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

5. **Preview production build**
   ```bash
   npm run preview
   ```

## ⚙️ Configuration

### Environment Variables
Create a `.env` file in the root directory:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

### Customization

1. **Personal Information**: Edit `src/utils/constants.js`
2. **Colors**: Modify `tailwind.config.js`
3. **Content**: Update component data in constants file
4. **Images**: Replace placeholder images with your own

### Key Files to Customize
- `src/utils/constants.js` - All personal data and content
- `tailwind.config.js` - Design system colors and spacing
- `src/components/Sections/` - Individual page sections

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🎯 Performance Features

- **Lazy Loading**: Images load on demand
- **Code Splitting**: Components load as needed
- **Optimized Images**: WebP format support
- **Minimal Bundle**: Tree-shaking enabled
- **Fast Refresh**: Hot module replacement during development

## 🌐 SEO Optimizations

- **Meta Tags**: Open Graph and Twitter cards
- **Semantic HTML**: Proper heading hierarchy
- **Alt Text**: All images have descriptive alt text
- **Sitemap Ready**: Structured for search engines

## 🔧 Development Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
npm run typecheck    # TypeScript type checking
```

## 📦 Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Connect repository to Vercel
3. Deploy automatically on push

### Netlify
1. Run `npm run build`
2. Upload `dist` folder to Netlify
3. Configure redirects for SPA

### Custom Server
1. Build: `npm run build`
2. Serve `dist` folder with any static server
3. Configure server for SPA routing

## 🐛 Troubleshooting

### Common Issues

1. **Animations not working**
   - Check if `prefers-reduced-motion` is enabled
   - Verify Framer Motion installation

2. **Images not loading**
   - Ensure images are in `public` folder
   - Check image paths in constants.js

3. **Dark mode not persisting**
   - Check localStorage permissions
   - Verify useDarkMode hook implementation

4. **Form not submitting**
   - Configure EmailJS credentials
   - Check network permissions

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License. See [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Framer Motion** - For incredible animation library
- **Tailwind CSS** - For the utility-first CSS framework
- **React Icons** - For the comprehensive icon library
- **Pexels** - For high-quality stock photos
- **Vite** - For the fast build tool

## 📞 Support

If you have any questions or need help with setup, please:
1. Check the documentation above
2. Search existing issues
3. Create a new issue with detailed description
4. Contact: [refanggalintar@gmail.com].

---

**Built with ❤️ by [Refangga Lintar Prayoga]**

*Happy coding! 🚀*
