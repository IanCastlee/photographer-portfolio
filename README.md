# 📷 Photographer X — Minimalist & Editorial Portfolio

> A modern, luxury-editorial photography portfolio website built with **React**, **Tailwind CSS**, and **Vite**. Designed with an **Atomic Design Architecture**, full **Dark & Light Mode** support, a **cinematic opening preloader**, and an interactive **lightbox modal** with camera EXIF/shot metadata.

---

## ✨ Features

- **🖤 Deep Charcoal Monochrome Theme**: Inspired by minimalist luxury and editorial publications (`#0b0b0c` primary background with `#141416` card surfaces).
- **☀️ Seamless Light Mode**: Instant toggle between high-contrast dark mode and clean gallery light mode (`#f8f9fa`).
- **🎬 Cinematic Opening Preloader**: Mechanical aperture rotation, live organic progress counter (`0% → 100%`), and a smooth curtain reveal animation.
- **🖥️ 1-Screen Desktop Fit (`100vh`)**: Hero section is calibrated to fit completely within a single desktop screen height without unwanted overflow or cutoff.
- **🧱 Strict Atomic Design Architecture**: Separated cleanly into Atoms, Molecules, Organisms, and Templates for maximum reusability and scalability.
- **🖼️ Interactive Lightbox Modal**: Click any photo to inspect high-resolution images, complete with technical camera gear specs (e.g., *Leica M11-P • 50mm f/0.95 • ISO 64*), arrow key navigation (`←` / `→`), and `Esc` key handling.
- **🎯 Dynamic Category Filter**: Switch between *All, Commercial, Editorial, Portrait, Architecture,* and *Fine Art* shoots in real time.
- **⚡ Fully Reusable Mock Data**: All profile details, galleries, services, gear lists, and testimonials are isolated in a single configuration file (`src/data/mockData.js`).
- **📱 100% Mobile & Tablet Responsive**: Optimized typography, smooth sticky navigation, and collapsible mobile drawer.

---

## 🏗️ Atomic Architecture

```
src/
├── context/
│   ├── ThemeContext.jsx          # Dark / Light mode provider with localStorage persistence
│   └── LightboxContext.jsx       # Fullscreen modal state & keyboard controls
│
├── data/
│   └── mockData.js               # Centralized photography portfolio data
│
├── components/
│   ├── atoms/                    # Fundamental building blocks
│   │   ├── Button.jsx            # Pill-shaped interactive buttons (Primary, Outline, Ghost)
│   │   ├── Badge.jsx             # Category chips, status indicators, and numbered tags
│   │   ├── Typography.jsx        # Editorial serif headings, body text, and section eyebrows
│   │   ├── IconButton.jsx        # Circular action buttons
│   │   ├── Input.jsx             # Themed form inputs
│   │   └── TextArea.jsx          # Multiline inquiry textarea
│   │
│   ├── molecules/                # Combinations of atoms
│   │   ├── InitialLoader.jsx     # Cinematic preloader with spinning aperture & progress bar
│   │   ├── ThemeToggle.jsx       # Sun / Moon theme switch
│   │   ├── ProjectCard.jsx       # Image card with hover zoom, tags, and lightbox trigger
│   │   ├── ServiceCard.jsx       # Numbered service card (01, 02, 03, 04) with deliverables
│   │   ├── FilterTabs.jsx        # Category selector pills
│   │   ├── StatCounter.jsx       # Experience and awards counter
│   │   ├── TestimonialCard.jsx   # Client editorial quote card
│   │   └── ContactForm.jsx       # Inquiry commission form with success state
│   │
│   ├── organisms/                # Complex distinct UI sections
│   │   ├── Navbar.jsx            # Frosted sticky header with navigation & CTA
│   │   ├── HeroSection.jsx       # 1-screen viewport hero with signature portrait collage
│   │   ├── PortfolioSection.jsx  # Filterable grid showcase
│   │   ├── ServicesSection.jsx   # 4-column capabilities overview
│   │   ├── AboutSection.jsx      # Artist bio, mission statement, and equipment list
│   │   ├── TestimonialsSection.jsx # Press quotes & creative director endorsements
│   │   ├── ContactSection.jsx    # Studio addresses, direct contacts, and booking form
│   │   ├── LightboxModal.jsx     # High-res viewer with EXIF metadata & navigation
│   │   └── Footer.jsx            # Studio locations (NYC & LA), socials, and back-to-top
│   │
│   └── templates/                # Page layout coordinator
│       └── PortfolioTemplate.jsx # Assembles all organisms into a unified experience
│
├── App.jsx                       # Application entry point
├── main.jsx                      # React DOM mounting
└── index.css                     # Tailwind CSS and global styling
```

---

## 🚀 Tech Stack

- **Framework**: [React 18](https://react.dev/)
- **Build Tool**: [Vite 6](https://vitejs.dev/)
- **Styling**: [Tailwind CSS 3](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Fonts**: *Plus Jakarta Sans* & *Playfair Display* (via Google Fonts)

---

## 🛠️ Getting Started

### Prerequisites

Ensure you have **Node.js** (v18 or newer) and **npm** installed:
```bash
node -v
npm -v
```

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/photographer-portfolio.git
   cd photographer-portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```
   Open your browser at `http://localhost:5173` (or the port shown in your terminal).

4. **Build for production:**
   ```bash
   npm run build
   ```
   The production-ready assets will be created in the `dist/` directory.

5. **Preview the production build:**
   ```bash
   npm run preview
   ```

---

## 🎨 Customizing Content (Using Mock Data)

To personalize the website for yourself or a client, simply edit [`src/data/mockData.js`](src/data/mockData.js):

- **Photographer Info**: Name, location, bio, avatar, and social links.
- **Projects / Photos**: Add your own high-resolution image URLs, shoot titles, clients, and camera EXIF information (`cameraInfo`).
- **Services**: Change titles, numbers, descriptions, and package deliverables.
- **Gear**: Update camera bodies, lenses, studio lighting, and color displays.
- **Testimonials**: Add authentic client feedback and company roles.

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).
