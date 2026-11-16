/**
 * HOW TO ADD OR EDIT A PROJECT
 * ----------------------------
 * 1. Add (or edit) an object in the `rawProjects` array below. The first ones appear first on the home page.
 * 2. Images need NO code: put them in  src/assets/projects/  named after the slug:
 *      <slug>.png      cover image        (example: solarcast.png)
 *      <slug>-1.png    extra screenshots  (example: solarcast-1.png, solarcast-2.png)
 *    Without a cover image a colored gradient is shown instead.
 * 3. Home page, /projects and /projects/<slug> update automatically.
 */
import { coverFor, galleryFor } from './images'

export const categories = ['UI/UX Design', 'Web Development', 'Graphic Design', 'AI & Data'] as const
export type Category = (typeof categories)[number]

export interface Project {
  slug: string // unique, used in the URL: /projects/<slug>
  title: string
  subtitle: string // short one-liner
  category: Category
  tags: string[]
  year: string
  role: string
  summary: string // shown on cards / home
  details: string[] // paragraphs on the detail page
  techStack: string[]
  cover?: string // optional: overrides the automatic image
  gallery?: string[] // optional: overrides the automatic images
  liveUrl?: string
  repoUrl?: string
  accent?: 0 | 1 | 2 | 3 // gradient used when there is no cover image
}

// TODO: check the year of each project and add more detail paragraphs in `details`.
const rawProjects: Project[] = [
  {
    slug: 'web-sertifikasi-lpm',
    title: 'Web Sertifikasi LPM',
    subtitle: 'Competency certification system for UIN Bandung',
    category: 'Web Development',
    tags: ['Full-stack', 'UI/UX', 'Next.js'],
    year: '2026',
    role: 'Full-stack Developer & UI/UX Designer',
    summary:
      'A full-stack certification registration system for LPM UIN Sunan Gunung Djati Bandung, built with Next.js and TypeScript.',
    details: [
      'Web Sertifikasi LPM is the competency certification system of UIN Sunan Gunung Djati Bandung. I designed the interface and built the full-stack application with Next.js and TypeScript.',
    ],
    techStack: ['Next.js', 'TypeScript', 'UI/UX Design'],
    liveUrl: 'https://lsp-uin-sgd.vercel.app',
    repoUrl: 'https://github.com/KP-LPM/web-sertifikasi-lpm',
    accent: 0,
  },
  {
    slug: 'solarcast',
    title: 'SolarCast',
    subtitle: 'Solar power output prediction with LSTM',
    category: 'AI & Data',
    tags: ['Machine Learning', 'Deep Learning', 'Data'],
    year: '2026',
    role: 'Machine Learning',
    summary:
      'An LSTM model that predicts the output of a solar power plant. It beat linear regression and an MLP baseline, with R² of 0.917.',
    details: [
      'SolarCast predicts the DC power output of a solar plant from ambient temperature, module temperature and irradiation, using hourly data from the public Kaggle “Solar Power Generation Data” (Plant 1).',
      'I compared Linear Regression, a Multilayer Perceptron and an LSTM with a 24-hour lookback window. The LSTM scored best (R² 0.917, MAE about 15.3 kW against 17.9 kW for the baseline, roughly 14% lower), although the margin over the baseline is modest.',
      'The project was made for a scientific infographic competition, and the repository includes the poster graphics of the results.',
    ],
    techStack: ['Python', 'TensorFlow', 'pandas', 'scikit-learn'],
    repoUrl: 'https://github.com/karimaulya/SolarCast',
    accent: 3,
  },
  {
    slug: 'web-kesling-linggar',
    title: 'Web Kesling Linggar',
    subtitle: 'Environmental health monitoring for Puskesmas Linggar',
    category: 'Web Development',
    tags: ['Frontend', 'UI/UX', 'Commission'],
    year: '2026',
    role: 'UI/UX Designer & Frontend Developer',
    summary:
      'A commissioned web app for Puskesmas Linggar that helps health officers monitor environmental health.',
    details: [
      'Web Kesling is an environmental health monitoring application commissioned by Puskesmas Linggar. I designed the interface and built the frontend.',
      'The app is for signed-in health officers, so the live link opens the sign-in page.',
    ],
    techStack: ['Frontend', 'UI/UX Design'],
    liveUrl: 'https://www.kesling-linggar.web.id/',
    repoUrl: 'https://github.com/Kesling-Rancaekek/web-kesling',
    accent: 1,
  },
  {
    slug: 'gamu',
    title: 'GamU',
    subtitle: 'Content-based game recommender',
    category: 'AI & Data',
    tags: ['Machine Learning', 'Recommendation', 'Data'],
    year: '2026',
    role: 'Machine Learning Engineer',
    summary:
      'The recommendation engine of GamU: content-based filtering over 40,484 Steam games using TF-IDF and cosine similarity.',
    details: [
      'GamU recommends games by comparing their tags and descriptions. TF-IDF turns the text into 471 tag features, and cosine similarity ranks the most similar games.',
      'Because it does not depend on other users’ history, the approach avoids the cold-start problem. The trained model is exported as .pkl files so a backend can use it directly.',
    ],
    techStack: ['Python', 'pandas', 'scikit-learn'],
    repoUrl: 'https://github.com/GamU-Labs/machine-learning',
    accent: 2,
  },
  {
    slug: 'treasure-temaram',
    title: 'Treasure Temaram',
    subtitle: 'Alternative-universe frontend app',
    category: 'Web Development',
    tags: ['Frontend', 'UI/UX'],
    year: '2026',
    role: 'UI/UX Designer & Frontend Developer',
    summary: 'A frontend web app set in an alternative universe, designed and built end to end.',
    details: [
      'Treasure Temaram is a frontend-only app. I handled both the interface design and its implementation.',
    ],
    techStack: ['Frontend', 'UI/UX Design'],
    liveUrl: 'https://treasure-temaram.web.id',
    repoUrl: 'https://github.com/karimaulya/au-temaram',
    accent: 3,
  },
  {
    slug: 'popatpic',
    title: 'Popatpic',
    subtitle: 'Team product project',
    category: 'Web Development',
    tags: ['Team project', 'Full-stack', 'UI/UX'],
    year: '2026',
    role: 'Project Manager, UI/UX Designer, Full-stack Developer & System Analyst',
    summary:
      'A team project where I took four roles: project manager, UI/UX designer, full-stack developer and system analyst.',
    details: [
      'Popatpic was built by a team. I coordinated the project, analyzed the system requirements, designed the interface and developed the full-stack application.',
    ],
    techStack: ['Full-stack', 'UI/UX Design', 'System Analysis'],
    repoUrl: 'https://github.com/Pop-Pic-Teams/popatpic-app',
    liveUrl: 'https://popatpic.netlify.app', 
    accent: 0,
  },
  {
    slug: 'nutrilens',
    title: 'Nutrilens',
    subtitle: 'AI-based nutrition management',
    category: 'UI/UX Design',
    tags: ['AI', 'Business competition'],
    year: '2026',
    role: 'Team member',
    summary:
      'An AI-based nutrition management app that won 3rd place at the Makarapreneur International Business Competition.',
    details: [
      'The app was built for the Makarapreneur International Business Competition and won 3rd place.',
    ],
    techStack: ['AI', 'Product Design'],
    liveUrl: 'https://www.figma.com/proto/0DEti2r03n3CgW3aupxW84/UI-UX-Project?node-id=1044-1590&starting-point-node-id=1044%3A1926',
    accent: 1,
  },
    {
    slug: 'clily',
    title: 'Clily',
    subtitle: 'Location-based ecosystem monitoring application',
    category: 'UI/UX Design',
    tags: ['UI/UX Competition'],
    year: '2025',
    role: 'Team member',
    summary:
      'An location-based ecosystem monitoring application that can monitor ecosystem in a certain area. There is also classification of flora and fauna based on kingdom, phylum, class, order, family, genus and species.',
    details: [
      'The app was built for the IT FAIR XIV UI/UX Competition.',
    ],
    techStack: ['UI/UX', 'Product Design'],
    liveUrl: 'https://www.figma.com/proto/STl0qT1uiiNSWlPHvLXZd7/YUUU-AAIIII?node-id=197-345&p=f&viewport=203%2C664%2C0.27&t=gjPDsfweqsYMXuGq-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=197%3A345&show-proto-sidebar=1&page-id=0%3A1',
    accent: 1,
  },
  {
    slug: 'dimensi-web-media-kit',
    title: 'Dimensi Web Media Kit',
    subtitle: 'Promotional & educational materials',
    category: 'Graphic Design',
    tags: ['Branding', 'Social Media'],
    year: '2026',
    role: 'Head of Media & Publication',
    summary:
      '30+ promotional and educational designs for BSO Dimensi Web, published across 2 social media platforms.',
    details: [
      'As Head of Media & Publication I am responsible for the visual communication of BSO Dimensi Web: posters, educational posts and event materials.',
    ],
    techStack: ['Figma', 'Adobe Illustrator', 'Canva'],
    accent: 3,
  },
  {
    slug: 'sakti-podcast-visuals',
    title: 'SAKTI Podcast Visuals',
    subtitle: 'Visual assets for a department podcast',
    category: 'Graphic Design',
    tags: ['Branding', 'Social Media'],
    year: '2026',
    role: 'Graphic Designer',
    summary: '10+ visual assets for the SAKTI Podcast, covering the department’s social media and podcast.',
    details: [
      'I design and produce the visuals for the SAKTI Podcast and the department’s social media.',
    ],
    techStack: ['Adobe Illustrator', 'Canva'],
    accent: 0,
  },
  {
    slug: 'himatif-visuals',
    title: 'HIMATIF Baskara Bhavana',
    subtitle: 'Visual assets for the HIMATIF department',
    category: 'Graphic Design',
    tags: ['Branding', 'Social Media'],
    year: '2025',
    role: 'Graphic Designer',
    summary: '30+ visual assets for the HIMATIF department, covering the department’s social media and events.',
    details: [
      'I design and produce the visuals for the HIMATIF department and its various activities.',
    ],
    techStack: ['Adobe Illustrator', 'Canva'],
    accent: 0,
  },
]

// Attach images automatically from src/assets/projects/
export const projects: Project[] = rawProjects.map((p) => {
  const gallery = p.gallery ?? galleryFor(p.slug)
  return { ...p, cover: p.cover ?? coverFor(p.slug), gallery: gallery.length ? gallery : undefined }
})

export const getProject = (slug: string) => projects.find((p) => p.slug === slug)
