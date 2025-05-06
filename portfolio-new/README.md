# Nejc Bevk Portfolio

A modern, creative portfolio website for Nejc Bevk, Frontend/Web Developer from Slovenia.

## 🚀 Tech Stack

- **Framework:** [Next.js](https://nextjs.org/) (App Router, TypeScript)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Animation:** [Framer Motion](https://www.framer.com/motion/)
- **Icons:** [Heroicons](https://heroicons.com/)
- **Deployment:** [Netlify](https://www.netlify.com/) (static export)

## ✨ Features

- Responsive, modern design
- Animated sections and transitions
- Creative dark ocean background
- Custom image logo in navigation
- Real project showcase with expandable cards (show more details/images inline)
- About and Contact sections
- Easy to customize and extend

## 📦 Getting Started

1. **Clone the repo:**
   ```bash
   git clone https://github.com/yourusername/portfolio-new.git
   cd portfolio-new
   ```
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Run locally:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🖼️ Customization

### Add/Edit Projects

- Edit `src/components/Projects.tsx`.
- Add new objects to the `projects` array. Each project can have:
  - `title`, `description`, `image` or `images`, `tags`, `link`, `details`, `moreImages`.
- Place project images in the `public/` directory and reference them as `/yourimage.jpg`.

### Change Logo

- Replace `public/logowhite_03.png` with your own logo image.
- The navigation will automatically use this image.

### Change Background

- Replace `public/ocean-bg.jpg` with your preferred background image.
- Adjust overlay or blur in `src/app/layout.tsx` if needed.

### Update About/Contact

- Edit `src/components/About.tsx` and `src/components/Contact.tsx` for your info, skills, and links.

## 🌍 Deployment (Netlify)

1. Push your code to GitHub.
2. Connect your repo to Netlify.
3. Set build command: `npm run build`
4. Set publish directory: `out`
5. Netlify will auto-deploy on push.

## 📄 License

MIT

---

Made with ❤️ by Nejc Bevk
