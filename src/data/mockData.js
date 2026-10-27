export const photographerData = {
  profile: {
    name: "John Carter",
    brandName: "Photographer X",
    role: "Professional Photographer & Visual Artist",
    location: "New York & Los Angeles",
    tagline: "Crafting atmospheric imagery at the intersection of shadow, form, and emotion.",
    bio: "With over a decade behind the lens, I specialize in commercial, editorial, and fine-art photography. My work emphasizes natural geometry, high-contrast monochrome textures, and cinematic mood.",
    mission: "My only mission: Capture captivating moments that transcend time and resonate with authentic human intimacy.",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80",
    portraitHero: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1000&q=80",
    behindTheScenes: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1000&q=80",
    cameraHolding: "https://images.unsplash.com/photo-1554048612-b6a482bc67e5?auto=format&fit=crop&w=1000&q=80",
    contactEmail: "inquiries@johncarter.studio",
    contactPhone: "+1 (310) 892-4150",
    studioAddress: "740 Broadway, 9th Floor, New York, NY 10003",
    availability: "Available for worldwide commissions Q3/Q4"
  },
  stats: [
    { label: "Years Behind Lens", value: "12+" },
    { label: "Completed Projects", value: "480+" },
    { label: "Exhibitions & Awards", value: "32" },
    { label: "Global Clients", value: "120+" }
  ],
  services: [
    {
      id: "01",
      number: "01",
      title: "Commercial Photography",
      description: "High-impact visual campaigns for global brands, luxury products, tech hardware, and automotive design.",
      deliverables: ["Creative Direction", "High-res Master RAWs", "Global Usage Rights", "Product Staging"]
    },
    {
      id: "02",
      number: "02",
      title: "Editorial & Fashion",
      description: "Concept-driven stories for magazine spreads, designer lookbooks, and high-fashion model portfolios.",
      deliverables: ["Location Scouting", "Lookbook Curation", "Stylist Collaboration", "Editorial Retouching"]
    },
    {
      id: "03",
      number: "03",
      title: "Artistic Retouching",
      description: "Meticulous color grading, skin tone refinement, clean compositing, and fine-art printing prep.",
      deliverables: ["Color Grading", "Composite Mastery", "Print Color Profiles", "Batch Delivery"]
    },
    {
      id: "04",
      number: "04",
      title: "Architecture & Spaces",
      description: "Documenting spatial poetry, brutalist structures, and modern interior environments with precision framing.",
      deliverables: ["Dusk/Dawn Bracket Exposure", "Perspective Correction", "Drone Aerials", "Interior Details"]
    }
  ],
  categories: ["All", "Commercial", "Editorial", "Portrait", "Architecture", "Fine Art"],
  projects: [
    {
      id: "proj-1",
      title: "Monolith & Brutalism",
      category: "Architecture",
      client: "ArchDigest Magazine",
      year: "2025",
      coverImage: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80",
      aspect: "landscape",
      featured: true,
      description: "A stark study of geometric concrete shadows, light slivers, and brutalist architecture in downtown Los Angeles.",
      cameraInfo: "Leica SL2 • 35mm Summicron-SL f/2 • ISO 100 • 1/500s"
    },
    {
      id: "proj-2",
      title: "Nocturne: Tokyo Rain",
      category: "Fine Art",
      client: "Solo Gallery Exhibition",
      year: "2024",
      coverImage: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=1200&q=80",
      aspect: "portrait",
      featured: true,
      description: "Rain-slicked asphalt, neon reflections, and solitary silhouettes in the Shinjuku district after midnight.",
      cameraInfo: "Hasselblad X2D 100C • XCD 55mm f/2.5 • ISO 400 • 1/125s"
    },
    {
      id: "proj-3",
      title: "The Alchemist's Watch",
      category: "Commercial",
      client: "Vacheron & Co.",
      year: "2025",
      coverImage: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1200&q=80",
      aspect: "square",
      featured: true,
      description: "Macro product campaign highlighting intricate horological complications against volcanic slate stones.",
      cameraInfo: "Sony A7R V • 90mm Macro G OSS • ISO 50 • Studio Flash"
    },
    {
      id: "proj-4",
      title: "Velvet Shadows: Elena",
      category: "Portrait",
      client: "Vanity Fair Noir",
      year: "2024",
      coverImage: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1200&q=80",
      aspect: "portrait",
      featured: true,
      description: "Chiaroscuro studio portrait capturing raw vulnerability through deep natural shadows and soft key lighting.",
      cameraInfo: "Leica M11-P • Noctilux-M 50mm f/0.95 • ISO 64 • 1/250s"
    },
    {
      id: "proj-5",
      title: "Verve Autumn Campaign",
      category: "Editorial",
      client: "Maison De L'Ombre",
      year: "2025",
      coverImage: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1200&q=80",
      aspect: "landscape",
      featured: false,
      description: "Minimalist fashion narrative shot on the dramatic wind-swept sand dunes of Death Valley.",
      cameraInfo: "Fujifilm GFX 100 II • GF 110mm f/2 • ISO 100 • 1/1000s"
    },
    {
      id: "proj-6",
      title: "Obsidian Supercar Series",
      category: "Commercial",
      client: "Apex Motorwerks",
      year: "2025",
      coverImage: "https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=1200&q=80",
      aspect: "landscape",
      featured: true,
      description: "Aerodynamic contours sculpted with light painting and dark backdrop studio reflection strips.",
      cameraInfo: "Phase One IQ4 150MP • Schneider 80mm LS • ISO 50 • Strobes"
    },
    {
      id: "proj-7",
      title: "Nordic Glacial Silence",
      category: "Fine Art",
      client: "National Geographic Special",
      year: "2024",
      coverImage: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80",
      aspect: "landscape",
      featured: false,
      description: "Sublime mountain peaks wrapped in dense cloud banks, highlighting nature's quiet power.",
      cameraInfo: "Sony A7R V • 24-70mm GM II • ISO 100 • 1/320s"
    },
    {
      id: "proj-8",
      title: "Echoes of Soul: Marcus",
      category: "Portrait",
      client: "Rolling Stone Feature",
      year: "2024",
      coverImage: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=1200&q=80",
      aspect: "portrait",
      featured: false,
      description: "Intimate musician portraiture emphasizing raw expression, intense gaze, and monochrome tonality.",
      cameraInfo: "Leica SL2 • 50mm Apo-Summicron • ISO 200 • 1/160s"
    }
  ],
  gear: [
    { category: "Primary Bodies", items: ["Leica M11-P Rangefinder", "Hasselblad X2D 100C", "Sony A7R V"] },
    { category: "Prime Glass", items: ["Leica 50mm Noctilux f/0.95", "Hasselblad 55mm f/2.5", "Sony 90mm Macro G OSS"] },
    { category: "Lighting & Grip", items: ["Profoto B10X Plus Monolights", "Elinchrom Rotalux Softboxes", "Avenger C-Stands"] },
    { category: "Post & Color", items: ["EIZO ColorEdge 4K Displays", "Capture One Pro 24", "Hahnemühle FineArt Paper"] }
  ],
  testimonials: [
    {
      quote: "John's eye for balance and darkness transformed our flagship campaign. He doesn't just take photos; he directs unforgettable atmosphere.",
      author: "Julian Vance",
      title: "Creative Director",
      company: "Atelier Mode Paris"
    },
    {
      quote: "Working with Photographer X was seamless. The precision, speed, and mastery of light delivered imagery that elevated our brand value immensely.",
      author: "Sophia Chen",
      title: "VP of Brand",
      company: "Kinetix Audio"
    },
    {
      quote: "The black-and-white portraits for our retrospective book were breathtaking. True artistry and discipline in every single shot.",
      author: "David Stern",
      title: "Chief Editor",
      company: "The Monochrome Review"
    }
  ],
  socials: [
    { name: "Instagram", url: "https://instagram.com", handle: "@johncarter_noir" },
    { name: "Behance", url: "https://behance.net", handle: "johncarterphoto" },
    { name: "Twitter/X", url: "https://x.com", handle: "@jcarter_photo" },
    { name: "Vogue Portfolio", url: "https://vogue.com", handle: "jcarter-collection" }
  ]
};
