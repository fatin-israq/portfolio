# Portfolio Website

A modern, responsive portfolio website showcasing my projects, skills, and experience as a Computer Science undergraduate and aspiring software engineer.

**Live Site:** [https://fatin-israq.vercel.app/](https://fatin-israq.vercel.app/)

## Features

- 🎨 Modern UI with glass-morphism effects and animations
- 📱 Fully responsive design
- 📧 Contact form with EmailJS integration
- 📄 Downloadable resume
- 🚀 Fast performance with Vite

## Tech Stack

- **Frontend:** React
- **Styling:** Tailwind CSS
- **Build Tool:** Vite
- **Icons:** Lucide React
- **Email Service:** EmailJS
- **Deployment:** Vercel

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file with your EmailJS credentials:
   ```env
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   ```
4. Run the development server:
   ```bash
   npm run dev
   ```
5. Build for production:
   ```bash
   npm run build
   ```

## Project Structure

```
src/
├── components/     # Reusable UI components
├── layout/         # Layout components (Navbar, Footer)
├── sections/       # Page sections (Hero, About, Projects, etc.)
└── assets/         # Static assets
```

## License

© 2026 Fatin Israq Talha. All rights reserved.
