# Software Engineer Portfolio Website

A modern, responsive portfolio website template built with React. Features a beautiful dark theme with smooth animations and a professional layout perfect for showcasing your projects and skills.

## ✨ Features

- **Modern Design**: Clean, professional dark theme with gradient accents
- **Fully Responsive**: Looks great on all devices - desktop, tablet, and mobile
- **Smooth Animations**: Engaging animations and transitions throughout
- **Easy Customization**: Simple to customize with your own content and colors
- **Performance Optimized**: Built with Vite for lightning-fast development and builds
- **SEO Friendly**: Proper semantic HTML and meta tags

## 🚀 Sections

- **Hero**: Eye-catching introduction with animated gradient background
- **About**: Showcase your story and what makes you unique
- **Projects**: Display your best work with images, descriptions, and tech stacks
- **Skills**: Highlight your technical skills organized by category
- **Contact**: Contact form and information for getting in touch
- **Footer**: Social links and additional navigation

## 📦 Installation

1. **Clone or download this repository**

2. **Install dependencies**
```bash
npm install
```

3. **Start the development server**
```bash
npm run dev
```

4. **Open your browser**
Navigate to `http://localhost:5173` (or the URL shown in your terminal)

## 🎨 Customization

### Personal Information

Update the following files with your information:

1. **Hero Section** (`src/components/Hero.jsx`)
   - Change your name
   - Update the description
   - Add your social media links

2. **About Section** (`src/components/About.jsx`)
   - Write your personal story
   - Update the highlight cards

3. **Projects Section** (`src/components/Projects.jsx`)
   - Replace with your actual projects
   - Update project descriptions, technologies, and links
   - Add project screenshots (replace gradient backgrounds)

4. **Skills Section** (`src/components/Skills.jsx`)
   - Add/remove skills based on your expertise
   - Organize them into relevant categories

5. **Contact Section** (`src/components/Contact.jsx`)
   - Update your email, phone, and location
   - Configure form submission (integrate with EmailJS, Formspree, etc.)

### Styling

All styling is in CSS files located in `src/components/`. Key customization points:

- **Colors**: Modify CSS variables in `src/index.css`
  ```css
  --primary-color: #6366f1;
  --secondary-color: #ec4899;
  --bg-dark: #0f172a;
  ```

- **Fonts**: Change font imports in `index.html` and update `src/index.css`

### Adding Your Project Images

Replace the gradient backgrounds in the Projects section:

1. Add your images to a `public/images` folder
2. In `src/components/Projects.jsx`, update the `image` property:
   ```jsx
   image: '/images/your-project.jpg'
   ```
3. Update CSS in `src/components/Projects.css` to display images instead of gradients

## 🛠️ Tech Stack

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **React Icons** - Icon library
- **CSS3** - Styling with custom properties and animations

## 📝 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint

## 🌐 Deployment

### Netlify

1. Build your site: `npm run build`
2. Deploy the `dist` folder to Netlify
3. Or connect your Git repository for automatic deployments

### Vercel

1. Import your project to Vercel
2. Vercel will automatically detect Vite and configure the build
3. Deploy!

### GitHub Pages

1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json:
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```
3. Update `vite.config.js`:
   ```js
   export default defineConfig({
     plugins: [react()],
     base: '/your-repo-name/'
   })
   ```
4. Run: `npm run deploy`

## 📄 License

This template is open source and available for personal and commercial use.

## 🤝 Contributing

Feel free to fork this project and customize it for your needs. If you have suggestions for improvements, please open an issue or submit a pull request!

## 💡 Tips

- **Keep it updated**: Regularly update your projects and skills
- **Add analytics**: Integrate Google Analytics to track visitors
- **Optimize images**: Use WebP format and lazy loading for better performance
- **Add testimonials**: Consider adding a testimonials section
- **Blog section**: Add a blog to share your knowledge and improve SEO

## 📧 Support

If you have any questions or need help customizing this template, feel free to reach out!

---

Made with ❤️ using React

