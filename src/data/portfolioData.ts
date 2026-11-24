import { Category, Project, ProfileInfo } from '../types/portfolio';

/**
 * =========================================================================
 * THROUGH.ADYS — CENTRALIZED PORTFOLIO DATA
 * =========================================================================
 */

export const DEFAULT_PROFILE: ProfileInfo = {
  name: 'Gladys Brajagukguk',
  handle: 'through.adys',
  role: 'Digital Business & Visual Designer',
  institution: 'Politeknik International Bali',
  location: 'Bali & Jakarta, Indonesia',
  avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=600&auto=format&fit=crop',
  bio: 'A student of Digital Business at Politeknik International Bali with a strong passion for visual design, content creation, and digital media. Experienced in creating engaging content and developing creative concepts through various projects. Currently expanding skills in UI/UX design and digital product development, with an interest in building meaningful and user-centered digital experiences.',
  email: 'gladysbrajagukguk@gmail.com',
  skills: ['Visual Design', 'Content Creation', 'UI/UX Design', 'Digital Media', 'Digital Business'],
};

export const DEFAULT_CATEGORIES: Category[] = [
  {
    id: 'brand-strategy',
    title: 'BRAND STRATEGY',
    tagline: 'Brand identity, logos, branding projects, and advertising.',
    description:
      'Crafting timeless visual identities, strategic logos, and cohesive brand systems that resonate deeply across digital and physical touchpoints.',
    coverImage:
      'https://images.unsplash.com/photo-1600132806370-bf17e65e942f?q=80&w=1000&auto=format&fit=crop',
    accentColor: '#38BDF8',
    accentBg: 'rgba(56, 189, 248, 0.12)',
  },
  {
    id: 'ui-ux-design',
    title: 'UI/UX DESIGN',
    tagline: 'User flows, wireframes, interfaces, and design decisions.',
    description:
      'Architecting intuitive digital journeys, refined mobile interfaces, and human-centric design systems built with precision and clarity.',
    coverImage:
      'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?q=80&w=1000&auto=format&fit=crop',
    accentColor: '#60A5FA',
    accentBg: 'rgba(96, 165, 250, 0.12)',
  },
  {
    id: 'digital-products',
    title: 'DIGITAL PRODUCTS',
    tagline: 'Polaris and other digital product concepts or prototypes.',
    description:
      'Product architecture, modular systems, and functional prototypes including the Polaris ecosystem designed to scale productively.',
    coverImage:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop',
    accentColor: '#818CF8',
    accentBg: 'rgba(129, 140, 248, 0.12)',
  },
  {
    id: 'content-photography',
    title: 'CONTENT & PHOTOGRAPHY',
    tagline: 'Photography, video, event documentation, and social media.',
    description:
      'Capturing raw emotion, architectural nuance, and dynamic event moments through curated visual storytelling and cinematic direction.',
    coverImage:
      'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1000&auto=format&fit=crop',
    accentColor: '#2DD4BF',
    accentBg: 'rgba(45, 212, 191, 0.12)',
  },
  {
    id: 'creative-projects',
    title: 'CREATIVE PROJECTS',
    tagline: 'Other graphic design and visual communication work.',
    description:
      'Experimental typography, tactile editorial layouts, 3D explorations, and bespoke graphic design pushing the boundaries of visual medium.',
    coverImage:
      'https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=1000&auto=format&fit=crop',
    accentColor: '#F472B6',
    accentBg: 'rgba(244, 114, 182, 0.12)',
  },
];

export const DEFAULT_PROJECTS: Project[] = [
  // ==========================================
  // BRAND STRATEGY
  // ==========================================
  {
    id: 'growbalization-logo',
    title: 'Growbalization Logo',
    category: 'brand-strategy',
    shortDesc:
      'Strategic identity and corporate brand mark for an international market expansion consultancy.',
    fullDesc:
      'Growbalization required a distinctive, modern corporate mark representing exponential organic growth, cross-border velocity, and multilateral synergy. The resulting logomark synthesizes continuous geometric loops with clean Swiss typography, ensuring immediate legibility from mobile app icons to multinational summit banners.',
    role: 'Lead Brand Strategist & Identity Designer',
    year: '2024',
    client: 'Growbalization Advisory Group',
    deliverables: [
      'Primary & Secondary Logomarks',
      'Brand Guidelines System',
      'Color Palette & Typography',
      'Stationery Suite',
      'Digital Asset Kit',
    ],
    coverImage:
      'https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=1000&auto=format&fit=crop',
    galleryImages: [
      {
        url: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=1000&auto=format&fit=crop',
        caption: 'Growbalization Identity Grid & Geometric Construction',
        aspectRatio: 'landscape',
      },
      {
        url: 'https://images.unsplash.com/photo-1542744094-3a31f272c490?q=80&w=1000&auto=format&fit=crop',
        caption: 'Corporate Brand Application & Executive Presentation',
        aspectRatio: 'landscape',
      },
      {
        url: 'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?q=80&w=1000&auto=format&fit=crop',
        caption: 'Embossed Stationery & Foil-stamped Business Cards',
        aspectRatio: 'landscape',
      },
    ],
    metricsOrHighlights: [
      'Deconstructed 40+ competitor marks to establish distinct market territory',
      'Engineered responsive SVG logo variants for sub-16px micro displays',
      'Developed 64-page comprehensive brand guideline manual',
    ],
  },
  {
    id: 'the-logo',
    title: 'The Logo',
    category: 'brand-strategy',
    shortDesc:
      'An exploration of purest minimalist monogram aesthetics and negative space balance.',
    fullDesc:
      '“The Logo” project is an auteur study in formal reduction. Stripping away non-essential ornamentation, it investigates how pure geometric tension, negative space, and typographic cadence evoke authority and enduring relevance in modern brand identity.',
    role: 'Identity Designer & Typographer',
    year: '2023',
    client: 'Internal Exploration / Studio Showcase',
    deliverables: [
      'Monogram Concept',
      'Negative Space Grid Systems',
      'Motion ID Stinger',
      'App Icon Adaptation',
    ],
    coverImage:
      'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1000&auto=format&fit=crop',
    galleryImages: [
      {
        url: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1000&auto=format&fit=crop',
        caption: 'Monogram Exploration on Dark Matte Substrates',
        aspectRatio: 'landscape',
      },
      {
        url: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop',
        caption: 'Dynamic Geometric Proportions & Visual Weight',
        aspectRatio: 'landscape',
      },
    ],
    metricsOrHighlights: [
      'Pure mathematical golden-ratio construction',
      'High contrast legibility across both dark and light modes',
      'Adapted for dynamic micro-animation stingers',
    ],
  },
  {
    id: 'brand-batibri-ya',
    title: 'Brand Batibri-ya',
    category: 'brand-strategy',
    shortDesc:
      'Artisanal luxury brand identity, heritage storytelling, and tactile packaging system.',
    fullDesc:
      'Batibri-ya unites ancient botanical heritage with contemporary sustainable luxury. We engineered a complete brand narrative encompassing custom organic typography, earth-derived chromatic palettes, bespoke wax seals, and recyclable tactile packaging that conveys unhurried craftsmanship.',
    role: 'Creative Director & Brand Strategist',
    year: '2024',
    client: 'Batibri-ya Botanicals',
    deliverables: [
      'Brand Narrative & Positioning',
      'Custom Wordmark',
      'Sustainable Packaging Suite',
      'Unboxing Experience',
      'Storefront Environmental Signage',
    ],
    coverImage:
      'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1000&auto=format&fit=crop',
    galleryImages: [
      {
        url: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1000&auto=format&fit=crop',
        caption: 'Batibri-ya Glass Bottle Packaging & Blind Debossing',
        aspectRatio: 'landscape',
      },
      {
        url: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=1000&auto=format&fit=crop',
        caption: 'Tactile Paper Texture & Unboxing Presentation',
        aspectRatio: 'landscape',
      },
      {
        url: 'https://images.unsplash.com/photo-1608248597359-21696a1a675d?q=80&w=1000&auto=format&fit=crop',
        caption: 'Natural Botanical Ingredients & Ambient Product Staging',
        aspectRatio: 'landscape',
      },
    ],
    metricsOrHighlights: [
      '100% plastic-free packaging engineering',
      'Awarded Best Emerging Sustainable Brand Identity',
      '+180% surge in organic social engagement post-launch',
    ],
  },
  {
    id: 'batibri-ya-ads',
    title: 'Batibri-ya Ads',
    category: 'brand-strategy',
    shortDesc:
      'Multi-channel advertising campaign, billboard art direction, and digital promotional collateral.',
    fullDesc:
      'Following the identity rollout, Batibri-ya needed a high-impact advertising rollout targeting discerning metropolitan audiences. The campaign combined high-fashion editorial photography, evocative typographic headlines, and cinematic digital billboards across prime urban locations.',
    role: 'Art Director & Campaign Strategist',
    year: '2024',
    client: 'Batibri-ya Botanicals',
    deliverables: [
      'OOH Billboard Placements',
      'Print Magazine Spreads',
      'Social Video Ads (9:16 & 1:1)',
      'Digital Performance Assets',
      'Copywriting & Tagline Development',
    ],
    coverImage:
      'https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1000&auto=format&fit=crop',
    galleryImages: [
      {
        url: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1000&auto=format&fit=crop',
        caption: 'High-Fashion Editorial Lighting & Product Feature',
        aspectRatio: 'landscape',
      },
      {
        url: 'https://images.unsplash.com/photo-1542204165-65bf26472b9b?q=80&w=1000&auto=format&fit=crop',
        caption: 'Large Format Street Billboard Art Direction',
        aspectRatio: 'landscape',
      },
      {
        url: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1000&auto=format&fit=crop',
        caption: 'Digital Campaign Assets & Social Storytelling',
        aspectRatio: 'landscape',
      },
    ],
    metricsOrHighlights: [
      'Over 2.4M combined impressions across OOH and digital',
      '3.8x return on ad spend (ROAS) during initial seasonal campaign',
    ],
  },
  {
    id: 'umah-dewata',
    title: 'Umah Dewata',
    category: 'brand-strategy',
    shortDesc:
      'Hospitality and boutique sanctuary branding in Bali, cultural iconography, and guest experience collateral.',
    fullDesc:
      'Umah Dewata is a boutique eco-luxury resort nestled in the lush terraces of Ubud, Bali. The branding was conceived to honor Balinese philosophical balance (Tri Hita Karana) through delicate hand-drawn botanical motifs, warm sandstone textures, and serene guest collateral including custom bamboo keycards and culinary menus.',
    role: 'Lead Brand Designer & Creative Consultant',
    year: '2023',
    client: 'Umah Dewata Bali Sanctuary',
    deliverables: [
      'Resort Identity & Seal',
      'Custom Wayfinding & Room Plaques',
      'Menu & Bar Identity',
      'Guest Welcome Keepsakes',
      'Digital Booking Experience',
    ],
    coverImage:
      'https://images.unsplash.com/photo-1540541338287-41700207dee6?q=80&w=1000&auto=format&fit=crop',
    galleryImages: [
      {
        url: 'https://images.unsplash.com/photo-1540541338287-41700207dee6?q=80&w=1000&auto=format&fit=crop',
        caption: 'Tropical Sanctuary Architecture & Natural Palette',
        aspectRatio: 'landscape',
      },
      {
        url: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=1000&auto=format&fit=crop',
        caption: 'Artisanal Resort Collateral & Custom Printed Menus',
        aspectRatio: 'landscape',
      },
      {
        url: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=1000&auto=format&fit=crop',
        caption: 'Lush Tropical Scenery & Serene Atmosphere',
        aspectRatio: 'landscape',
      },
    ],
    metricsOrHighlights: [
      'Comprehensive on-site touchpoint overhaul spanning 80+ assets',
      'Preserved cultural authenticity while elevating luxury appeal',
      '98% guest satisfaction rating on resort brand collateral',
    ],
  },

  // ==========================================
  // UI/UX DESIGN
  // ==========================================
  {
    id: 'polaris-ui-ux',
    title: 'Polaris UI/UX',
    category: 'ui-ux-design',
    shortDesc:
      'Flagship enterprise UI/UX system, token architecture, and high-density mobile interface components.',
    fullDesc:
      'Polaris UI/UX represents a systematic approach to high-density digital interfaces. Balancing deep information architecture with airy, human-friendly ergonomics, this project features reusable interaction patterns, dark-mode ergonomics, accessible contrast ratios, and micro-interactions designed to reduce cognitive load.',
    role: 'Lead Product & UI/UX Designer',
    year: '2024',
    client: 'Polaris Systems',
    deliverables: [
      'Information Architecture',
      'Interactive Prototypes',
      'Component Library & Token Engine',
      'UX Research & Usability Audits',
      'Mobile & Tablet Adaptive Layouts',
    ],
    coverImage:
      'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?q=80&w=1000&auto=format&fit=crop',
    galleryImages: [
      {
        url: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?q=80&w=1000&auto=format&fit=crop',
        caption: 'Component Architecture & Auto-layout Token System',
        aspectRatio: 'landscape',
      },
      {
        url: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1000&auto=format&fit=crop',
        caption: 'Mobile Screen Flows & Tactile Micro-interactions',
        aspectRatio: 'landscape',
      },
      {
        url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop',
        caption: 'Dark Mode Contrast & Data Visualizations',
        aspectRatio: 'landscape',
      },
    ],
    metricsOrHighlights: [
      'Achieved strict WCAG AAA contrast accessibility',
      '42% reduction in user task completion duration',
      'Universal token mapping across iOS, Android, and Web',
    ],
  },
  {
    id: 'ui-ux-web-design',
    title: 'UI/UX & Web Design',
    category: 'ui-ux-design',
    shortDesc:
      'Modern responsive web experience for creative studios with interactive motion and typographic rhythm.',
    fullDesc:
      'An expressive yet disciplined web experience crafted for modern creative agencies. Featuring bespoke layout grids, smooth scroll choreography, modular content blocks, and instantaneous mobile navigation that leaves a lasting visual impression.',
    role: 'Senior UI/UX & Web Designer',
    year: '2024',
    client: 'Apex Creative Studio',
    deliverables: [
      'Wireframing & Journey Mapping',
      'Hi-Fi Visual Design',
      'Motion Specifications',
      'Responsive Breakpoint Matrix',
    ],
    coverImage:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop',
    galleryImages: [
      {
        url: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop',
        caption: 'Responsive Web Architecture & Grid Alignment',
        aspectRatio: 'landscape',
      },
      {
        url: 'https://images.unsplash.com/photo-1522542550221-31fd19575a2d?q=80&w=1000&auto=format&fit=crop',
        caption: 'Mobile First Layouts & Touch-Friendly Interactions',
        aspectRatio: 'landscape',
      },
    ],
    metricsOrHighlights: [
      '99/100 Google Lighthouse Performance & Accessibility',
      'Zero layout shift (CLS 0.00)',
      '+65% time spent on project showcase pages',
    ],
  },
  {
    id: 'ecommerce-ui-ux',
    title: 'E-Commerce UI/UX',
    category: 'ui-ux-design',
    shortDesc:
      'Direct-to-consumer seamless checkout experience with micro-interactions and tactile product preview.',
    fullDesc:
      'Rethinking consumer e-commerce friction through one-thumb mobile navigation, dynamic quick-view sheets, frictionless Apple Pay integration, and intelligent predictive sizing guides that drastically reduce cart abandonment.',
    role: 'Product Designer (Contract)',
    year: '2023',
    client: 'Kroma Apparel',
    deliverables: [
      'Checkout Funnel Redesign',
      'Product Detail Page (PDP)',
      'Mobile Bag Modal',
      'Search & Filtering UX',
    ],
    coverImage:
      'https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=1000&auto=format&fit=crop',
    galleryImages: [
      {
        url: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=1000&auto=format&fit=crop',
        caption: 'Tactile Product Detail Page & Floating Bag Bar',
        aspectRatio: 'landscape',
      },
      {
        url: 'https://images.unsplash.com/photo-1556742049-0a67c5574f73?q=80&w=1000&auto=format&fit=crop',
        caption: 'Instant Checkout & Payment Confirmation Screen',
        aspectRatio: 'landscape',
      },
    ],
    metricsOrHighlights: [
      '+31% mobile checkout completion rate',
      'Drop-off reduced by 22% during address entry step',
    ],
  },
  {
    id: 'music-ui-ux-design',
    title: 'Music UI/UX Design',
    category: 'ui-ux-design',
    shortDesc:
      'Immersive audio streaming and discovery mobile application with spatial album art and vinyl gestures.',
    fullDesc:
      'A love letter to tactile music appreciation in the streaming era. The interface allows users to scrub through waveforms like physical vinyl, explore album liner notes in an interactive sheet, and curate playlists with gestural card flicking.',
    role: 'Lead Mobile UI Designer',
    year: '2024',
    client: 'Resonance Sound',
    deliverables: [
      'iOS Native UI Concepts',
      'Gesture-Driven Player',
      'Interactive Vinyl Scrubbing',
      'Curated Editorial Pages',
    ],
    coverImage:
      'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=1000&auto=format&fit=crop',
    galleryImages: [
      {
        url: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=1000&auto=format&fit=crop',
        caption: 'Now Playing Screen with Dynamic Waveform Visualizer',
        aspectRatio: 'landscape',
      },
      {
        url: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=1000&auto=format&fit=crop',
        caption: 'Audio Spectrum & Tactile Volume Knobs',
        aspectRatio: 'landscape',
      },
    ],
    metricsOrHighlights: [
      'Interactive Framer prototype tested with 50+ music enthusiasts',
      'Average session duration increased to 28 minutes',
    ],
  },
  {
    id: 'fintech-mobile-ux',
    title: 'FinTech Mobile UX',
    category: 'ui-ux-design',
    shortDesc:
      'Calm, transparent mobile banking experience prioritizing financial clarity and effortless transfers.',
    fullDesc:
      'Demystifying financial data with calming typography, progressive disclosure of transaction fees, and one-tap biometric money transfers. The app replaces dense spreadsheets with clean charts and actionable spending insights.',
    role: 'Lead UI/UX Designer',
    year: '2023',
    client: 'Aura Financial',
    deliverables: [
      'Design System Tokens',
      'Account Dashboard',
      'Transfer Flow',
      'Spending Category Analytics',
    ],
    coverImage:
      'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1000&auto=format&fit=crop',
    galleryImages: [
      {
        url: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1000&auto=format&fit=crop',
        caption: 'Visual Spending Breakdown & Minimalist Card UI',
        aspectRatio: 'landscape',
      },
    ],
    metricsOrHighlights: [
      'Rated 4.9/5 in consumer ease-of-use tests',
      'Fast-track 3-second biometric transfer flow',
    ],
  },

  // ==========================================
  // DIGITAL PRODUCTS
  // ==========================================
  {
    id: 'polaris-design-system',
    title: 'Polaris Design System',
    category: 'digital-products',
    shortDesc:
      'Scalable multi-platform component library, Figma variables, tokens, and comprehensive documentation.',
    fullDesc:
      'The foundational core of the Polaris digital product suite. A unified design system comprising 80+ modular components, semantic token structures for color, spacing, typography, and elevation, synchronized with production codebases via automated token pipelines.',
    role: 'Product Architect & Design Systems Lead',
    year: '2024',
    client: 'Polaris Labs',
    deliverables: [
      'Figma Variable Library',
      'Token Architecture (JSON)',
      'React Component Documentation',
      'Accessibility Guidelines',
      'Changelog & Versioning Strategy',
    ],
    coverImage:
      'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1000&auto=format&fit=crop',
    galleryImages: [
      {
        url: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1000&auto=format&fit=crop',
        caption: 'Figma Variables & Color Primitive Hierarchy',
        aspectRatio: 'landscape',
      },
      {
        url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop',
        caption: 'Interactive Component States & Documentation Portal',
        aspectRatio: 'landscape',
      },
    ],
    metricsOrHighlights: [
      'Over 80 components with 100% test coverage',
      'Adopted across 4 core engineering teams',
      'Cut frontend implementation time by 45%',
    ],
  },
  {
    id: 'polaris-saas-dashboard',
    title: 'Polaris SaaS Dashboard',
    category: 'digital-products',
    shortDesc:
      'Multi-tenant analytics platform with real-time operational metrics and custom widget canvas.',
    fullDesc:
      'A next-generation enterprise SaaS dashboard engineered for deep operational visibility. Users can customize widget grids via drag-and-drop, filter millions of data records with instant client-side responsiveness, and export board-ready reports in one click.',
    role: 'Lead Product Designer',
    year: '2024',
    client: 'Polaris Labs',
    deliverables: [
      'Customizable Grid Engine',
      'Data Visualizations & Charts',
      'Multi-tenant Permissions UI',
      'Export Pipeline Design',
    ],
    coverImage:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop',
    galleryImages: [
      {
        url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop',
        caption: 'Executive Overview Dashboard with Real-Time Latency Gauges',
        aspectRatio: 'landscape',
      },
      {
        url: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop',
        caption: 'Custom Widget Grid and Column Configuration',
        aspectRatio: 'landscape',
      },
    ],
    metricsOrHighlights: [
      'Sub-50ms render response on 10,000+ data rows',
      '89% positive NPS score from executive beta testers',
    ],
  },
  {
    id: 'ai-prompt-workspace',
    title: 'AI Prompt Workspace',
    category: 'digital-products',
    shortDesc:
      'Productivity tool for generative workflows, versioning, prompt chaining, and evaluation testing.',
    fullDesc:
      'A clean canvas for engineers and creatives to test, benchmark, and deploy generative AI prompts. Supports multi-model comparative viewing, parameter tuning, historical token spend analytics, and team collaboration.',
    role: 'Founding Product Designer',
    year: '2024',
    client: 'PromptKit Studio',
    deliverables: [
      'Prompt Evaluation Canvas',
      'Side-by-Side Model Comparator',
      'Token Cost Calculator',
      'Version Diff Visualizer',
    ],
    coverImage:
      'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop',
    galleryImages: [
      {
        url: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop',
        caption: 'Prompt Chaining Canvas & Node Connections',
        aspectRatio: 'landscape',
      },
    ],
    metricsOrHighlights: [
      'Eliminated context-switching for prompt engineers',
      'Processed 150k+ test runs in initial private beta',
    ],
  },
  {
    id: 'modular-flow-builder',
    title: 'Modular Flow Builder',
    category: 'digital-products',
    shortDesc:
      'Visual canvas for logic node chaining, API automation pipelines, and trigger workflows.',
    fullDesc:
      'Empowering non-technical creators to build complex business logic through an intuitive node-based canvas. Features snap-to-grid connections, live payload debugging, and condition branching.',
    role: 'Principal UX Architect',
    year: '2023',
    client: 'FlowCraft Inc.',
    deliverables: [
      'Node Interaction Mechanics',
      'Infinite Canvas Viewport',
      'Condition Logic Modals',
      'Debugging Drawer',
    ],
    coverImage:
      'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1000&auto=format&fit=crop',
    galleryImages: [
      {
        url: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1000&auto=format&fit=crop',
        caption: 'Node Connections & Infinite Canvas Zoom',
        aspectRatio: 'landscape',
      },
    ],
    metricsOrHighlights: [
      'Zero-latency 60fps canvas dragging powered by WebGL/Canvas',
      'Reduced automation setup time from hours to minutes',
    ],
  },

  // ==========================================
  // CONTENT & PHOTOGRAPHY
  // ==========================================
  {
    id: 'architectural-streetscapes',
    title: 'Architectural & Streetscapes',
    category: 'content-photography',
    shortDesc:
      'Fine art urban geometry and tropical architectural study across Jakarta and Bali.',
    fullDesc:
      'A continuous photographic exploration examining the juxtaposition of raw concrete brutalism, tropical foliage, and daily pedestrian rhythms. Shot on 35mm film and medium format digital with careful geometric framing and golden hour chiaroscuro.',
    role: 'Photographer & Visual Essayist',
    year: '2023 - 2024',
    client: 'Solo Exhibition & Editorial Press',
    deliverables: [
      '35mm & Medium Format Series',
      'Curated Print Portfolio',
      'Archival Fine Art Prints',
      'Editorial Book Layout',
    ],
    coverImage:
      'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1000&auto=format&fit=crop',
    galleryImages: [
      {
        url: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1000&auto=format&fit=crop',
        caption: 'Concrete Geometry & Shadow Play in Jakarta',
        aspectRatio: 'landscape',
      },
      {
        url: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1000&auto=format&fit=crop',
        caption: 'Misty Tropical Valley & Balinese Sunrise',
        aspectRatio: 'landscape',
      },
      {
        url: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000&auto=format&fit=crop',
        caption: 'Skyscrapers & Glass Facade Reflections',
        aspectRatio: 'landscape',
      },
    ],
    metricsOrHighlights: [
      'Featured in Asian Architectural Photography Collective',
      'Series of 24 prints exhibited in Jakarta contemporary gallery',
    ],
  },
  {
    id: 'documentary-event-visuals',
    title: 'Documentary & Event Visuals',
    category: 'content-photography',
    shortDesc:
      'Festival, creative conference, and cultural gathering visual storytelling and candid moments.',
    fullDesc:
      'Capturing the electric human energy of creative conferences and music festivals. Documenting unscripted backstage glances, crowd euphoria, and passionate keynote speakers with intimate, unobtrusive lenswork.',
    role: 'Official Event Documenter & Photographer',
    year: '2024',
    client: 'DesignShift Summit & Soundwaves Festival',
    deliverables: [
      'Live Real-Time Press Delivery',
      'Keynote & Panel Coverage',
      'Backstage Intimate Portraits',
      'Recap Photo Book',
    ],
    coverImage:
      'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1000&auto=format&fit=crop',
    galleryImages: [
      {
        url: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1000&auto=format&fit=crop',
        caption: 'Festival Stage Lighting & Euphoric Audience',
        aspectRatio: 'landscape',
      },
      {
        url: 'https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1000&auto=format&fit=crop',
        caption: 'Keynote Speaker & Immersive Projection Screen',
        aspectRatio: 'landscape',
      },
    ],
    metricsOrHighlights: [
      'Same-day delivery of 300+ graded press images',
      'Syndicated across 14 media and design publications',
    ],
  },
  {
    id: 'brand-campaign-photography',
    title: 'Brand Campaign Photography',
    category: 'content-photography',
    shortDesc:
      'Editorial product staging, atmospheric studio lighting, and tactile texture close-ups.',
    fullDesc:
      'Staging luxury goods, perfumes, and apparel in bespoke studio setups. Utilizing directional harsh sunlight, wet stone reflections, and organic textures to convey sensory tactile richness.',
    role: 'Editorial Commercial Photographer',
    year: '2024',
    client: 'Various Boutique Brands',
    deliverables: [
      'Studio Lighting Direction',
      'Props & Set Styling',
      'Color Grading & Retouching',
      'Multi-crop Social Formats',
    ],
    coverImage:
      'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1000&auto=format&fit=crop',
    galleryImages: [
      {
        url: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1000&auto=format&fit=crop',
        caption: 'Natural Light Refraction on Glass Containers',
        aspectRatio: 'landscape',
      },
      {
        url: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=1000&auto=format&fit=crop',
        caption: 'Minimalist Fashion Editorial & Silhouette',
        aspectRatio: 'landscape',
      },
    ],
    metricsOrHighlights: [
      '30+ high-res campaign assets delivered per brand shoot',
      'Used across national billboards and global e-commerce portals',
    ],
  },
  {
    id: 'video-reels-direction',
    title: 'Short-Form Video & Reels Direction',
    category: 'content-photography',
    shortDesc:
      'Kinetic pacing, rhythmic sound synchronization, and high-impact social motion visuals.',
    fullDesc:
      'Directing and editing vertical reels that stop the scroll in the first 0.5 seconds. Combining sound-design beats, macro transitions, kinetic typography, and authentic behind-the-scenes intimacy.',
    role: 'Director & Video Editor',
    year: '2024',
    client: 'Lifestyle Brands & Creative Creators',
    deliverables: [
      'Storyboarding & Shot Lists',
      'On-Location Camera Direction',
      'Kinetic Sound Sync Editing',
      'Color Grading (LUTs)',
    ],
    coverImage:
      'https://images.unsplash.com/photo-1536240478700-b869070f9279?q=80&w=1000&auto=format&fit=crop',
    galleryImages: [
      {
        url: 'https://images.unsplash.com/photo-1536240478700-b869070f9279?q=80&w=1000&auto=format&fit=crop',
        caption: 'Cinematic Camera Rig & On-location Shooting',
        aspectRatio: 'landscape',
      },
    ],
    metricsOrHighlights: [
      'Over 5M aggregate views across Instagram & TikTok reels',
      'Retention rates exceeding 65% past the 15-second mark',
    ],
  },
  {
    id: 'editorial-social-media',
    title: 'Editorial Social Media Content',
    category: 'content-photography',
    shortDesc:
      'Curated storytelling carousels, aesthetic grids, and consistent visual narrative systems.',
    fullDesc:
      'Developing cohesive Instagram feeds and multi-slide carousels that function as mini editorial magazines. Balancing negative space, curated color stories, and engaging educational micro-copy.',
    role: 'Content Strategist & Visual Curator',
    year: '2023 - 2024',
    client: 'Creative Influencers & Agencies',
    deliverables: [
      'Monthly Content Architecture',
      'Multi-slide Carousel Layouts',
      'Story Template Systems',
      'Hashtag & Caption Strategy',
    ],
    coverImage:
      'https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1000&auto=format&fit=crop',
    galleryImages: [
      {
        url: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1000&auto=format&fit=crop',
        caption: 'Curated Grid Moodboard & Chromatic Harmony',
        aspectRatio: 'landscape',
      },
    ],
    metricsOrHighlights: [
      '300% boost in carousel saves and bookmarks',
      'Established signature aesthetic recognized across creative industry',
    ],
  },

  // ==========================================
  // CREATIVE PROJECTS
  // ==========================================
  {
    id: 'typographic-posters-series',
    title: 'Typographic Posters Series',
    category: 'creative-projects',
    shortDesc:
      'Experimental Swiss-style typography, kinetic grid systems, and architectural layout studies.',
    fullDesc:
      'A personal manifesto series exploring modernist International Typographic Style under contemporary digital constraints. Deconstructing asymmetric grids, massive grotesque lettering, and poetic micro-copy into collectible silkscreen posters.',
    role: 'Graphic Designer & Typographer',
    year: '2024',
    client: 'Studio Print Editions',
    deliverables: [
      '12 Screen-printed Posters (A1)',
      'Experimental Type Specimens',
      'Vector Print Files',
      'Virtual 3D Poster Gallery',
    ],
    coverImage:
      'https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=1000&auto=format&fit=crop',
    galleryImages: [
      {
        url: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=1000&auto=format&fit=crop',
        caption: 'Experimental Bold Typography & Asymmetric Layout',
        aspectRatio: 'landscape',
      },
      {
        url: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?q=80&w=1000&auto=format&fit=crop',
        caption: 'Screen-printing Ink Texture & Vibrant Color Contrast',
        aspectRatio: 'landscape',
      },
    ],
    metricsOrHighlights: [
      'Limited run of 100 hand-pulled silkscreen prints sold out in 48 hours',
      'Shortlisted for International Poster Biennial',
    ],
  },
  {
    id: 'editorial-magazine-layout',
    title: 'Editorial Magazine Layout',
    category: 'creative-projects',
    shortDesc:
      'Printed art and architecture publication design featuring tactile paper stocks and bespoke pacing.',
    fullDesc:
      'An independent biannual publication highlighting Southeast Asian craft, architecture, and slow living. Designed with generous white space, bespoke serif titling, and alternating paper weights to create a deeply tactile reading ritual.',
    role: 'Editorial Director & Book Designer',
    year: '2023',
    client: 'Folio Archipelago',
    deliverables: [
      'Publication Masthead',
      '140-Page Editorial Grid',
      'Typography System',
      'Pre-press Production Supervision',
    ],
    coverImage:
      'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=1000&auto=format&fit=crop',
    galleryImages: [
      {
        url: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=1000&auto=format&fit=crop',
        caption: 'Open Book Spread & Serene Typographic Layout',
        aspectRatio: 'landscape',
      },
      {
        url: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=1000&auto=format&fit=crop',
        caption: 'Thread-sewn Binding & Heavy Matte Paper Stock',
        aspectRatio: 'landscape',
      },
    ],
    metricsOrHighlights: [
      '144-page perfect-bound printed edition',
      'Stocked in curated bookstores in Tokyo, Singapore, and Berlin',
    ],
  },
  {
    id: 'exhibition-spatial-graphics',
    title: 'Exhibition Identity & Spatial Graphics',
    category: 'creative-projects',
    shortDesc:
      'Gallery wayfinding, environmental typography, and exhibition identity for contemporary art space.',
    fullDesc:
      'Translating curator intent into physical space. Large-scale vinyl wall lettering, tactile aluminum gallery plaques, and directional floor markings guiding visitors seamlessly through a multi-room retrospective.',
    role: 'Environmental Graphic Designer',
    year: '2024',
    client: 'Ruang Seni Modern',
    deliverables: [
      'Spatial Typography & Wall Text',
      'Exhibition Catalog',
      'Entry Monolith Signage',
      'Audio Guide Collateral',
    ],
    coverImage:
      'https://images.unsplash.com/photo-1531247448606-44fa91604203?q=80&w=1000&auto=format&fit=crop',
    galleryImages: [
      {
        url: 'https://images.unsplash.com/photo-1531247448606-44fa91604203?q=80&w=1000&auto=format&fit=crop',
        caption: 'White Cube Gallery Installation & Clean Wall Typography',
        aspectRatio: 'landscape',
      },
    ],
    metricsOrHighlights: [
      'Welcomed 18,000+ visitors during 6-week exhibition run',
      'Seamless ADA-compliant wayfinding and legibility',
    ],
  },
  {
    id: 'packaging-design-collateral',
    title: 'Packaging Design & Collateral',
    category: 'creative-projects',
    shortDesc:
      'Sustainable unboxing experience, embossed foil finishes, and bespoke luxury paper engineering.',
    fullDesc:
      'Developing structural carton engineering and bespoke dielines for premium lifestyle gifts. Zero glue joints, using interlocking folded geometric origami tabs, soy-based inks, and foil stamp details.',
    role: 'Packaging Designer',
    year: '2023',
    client: 'Kala Lifestyle',
    deliverables: [
      'Custom Structural Dielines',
      'Surface Print Graphics',
      'Embossing & Foil Plates',
      'Prototyping & Print Proofing',
    ],
    coverImage:
      'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=1000&auto=format&fit=crop',
    galleryImages: [
      {
        url: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=1000&auto=format&fit=crop',
        caption: 'Geometric Folded Paper Box & Minimalist Seal',
        aspectRatio: 'landscape',
      },
    ],
    metricsOrHighlights: [
      '100% biodegradable zero-plastic construction',
      'Reduced box assembly time on production line by 30%',
    ],
  },
  {
    id: '3d-visual-explorations',
    title: '3D Visual Explorations',
    category: 'creative-projects',
    shortDesc:
      'Abstract spatial forms, lighting studies, glass caustics, and procedural digital textures.',
    fullDesc:
      'A series of rendered sculptural studies investigating light transmission through frosted crystal, liquid mercury tension, and organic procedural topography. Created as hero visuals for brand keynotes and spatial interfaces.',
    role: '3D Artist & Visual Explorer',
    year: '2024',
    client: 'Digital Arts Collective',
    deliverables: [
      'High-Resolution 8K Renders',
      'Looping Spatial Animations',
      'Texture Displacement Maps',
    ],
    coverImage:
      'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?q=80&w=1000&auto=format&fit=crop',
    galleryImages: [
      {
        url: 'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?q=80&w=1000&auto=format&fit=crop',
        caption: 'Glass Caustics & Iridescent Light Refraction',
        aspectRatio: 'landscape',
      },
      {
        url: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop',
        caption: 'Liquid Metallic Waves & Kinetic Flow',
        aspectRatio: 'landscape',
      },
    ],
    metricsOrHighlights: [
      'Rendered in high-fidelity raytraced lighting',
      'Licensed for international technology keynote backdrop',
    ],
  },
];

/**
 * =========================================================================
 * DYNAMIC HELPER FUNCTIONS
 * =========================================================================
 */

/** Dapatkan semua proyek dalam kategori tertentu */
export function getProjectsByCategory(projects: Project[], categoryId: string): Project[] {
  return projects.filter((p) => p.category === categoryId);
}

/** Hitung jumlah proyek secara otomatis untuk kategori tertentu */
export function getCategoryProjectCount(projects: Project[], categoryId: string): number {
  return projects.filter((p) => p.category === categoryId).length;
}

/** Format nomor indeks dua digit: 0 -> '01', 1 -> '02' */
export function formatIndex(index: number): string {
  return String(index + 1).padStart(2, '0');
}

/** LocalStorage keys untuk mode Editor jika ada kustomisasi runtime */
export const STORAGE_KEY_CATEGORIES = 'through_adys_categories_v2';
export const STORAGE_KEY_PROJECTS = 'through_adys_projects_v2';

/** Ambil data kategori dengan fallback ke default */
export function loadCategories(): Category[] {
  if (typeof window === 'undefined') return DEFAULT_CATEGORIES;
  try {
    const saved = localStorage.getItem(STORAGE_KEY_CATEGORIES);
    if (saved) {
      const parsed = JSON.parse(saved);
      if (Array.isArray(parsed) && parsed.length > 0) return parsed;
    }
  } catch (e) {
    console.warn('Failed to parse saved categories, using defaults', e);
  }
  return DEFAULT_CATEGORIES;
}

/** Ambil data proyek dengan fallback ke default */
export function loadProjects(): Project[] {
  if (typeof window === 'undefined') return DEFAULT_PROJECTS;
  try {
    const saved = localStorage.getItem(STORAGE_KEY_PROJECTS);
    if (saved) {
      const parsed = JSON.parse(saved);
      if (Array.isArray(parsed) && parsed.length > 0) return parsed;
    }
  } catch (e) {
    console.warn('Failed to parse saved projects, using defaults', e);
  }
  return DEFAULT_PROJECTS;
}

export const STORAGE_KEY_PROFILE = 'through_adys_profile_v2';

export function loadProfile(): ProfileInfo {
  if (typeof window === 'undefined') return DEFAULT_PROFILE;
  try {
    const saved = localStorage.getItem(STORAGE_KEY_PROFILE);
    if (saved) {
      const parsed = JSON.parse(saved);
      if (parsed && parsed.name && parsed.bio) return parsed;
    }
  } catch (e) {
    console.warn('Failed to parse saved profile, using default', e);
  }
  return DEFAULT_PROFILE;
}

