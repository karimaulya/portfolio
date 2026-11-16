import placeholder from '../assets/hero-placeholder.png'
import { heroPhoto } from './images'
import type { Category } from './projects'

/** Everything about you that is shown on the home page. Edit the text between the quotes. */
export const profile = {
  name: 'Karima Ulya Hermawan',
  email: 'karimaulya13@gmail.com',
  github: 'https://github.com/karimaulya',
  linkedin: 'https://www.linkedin.com/in/karimaulyahermawan',
  instagram: 'https://www.instagram.com/karimaulyaa',

  // The giant outlined word behind your photo
  heroWord: "ULYA'S PORTFOLIO ",

  // Photo: save a transparent PNG as  src/assets/hero.png  and it is picked up automatically.
  heroImage: heroPhoto() ?? placeholder,

  // Left and right text next to the photo
  about: [
    'I’m a Computer Science student at UIN Sunan Gunung Djati Bandung. I like building web pages that are clean and easy to use. I also work with data and machine learning, like predicting solar power and recommending games.',
    'Besides coding, I design and draw. I have made 90+ visuals for campus organizations and won awards in illustration competitions. I also won 3rd place in an international business competition, which taught me to look at technology from a business view.',
  ],
}

export type SkillLevel = 'confident' | 'working' | 'learning'

export const skillLevels: Record<SkillLevel, { label: string; dots: number }> = {
  confident: { label: 'Confident', dots: 3 },
  working: { label: 'Working knowledge', dots: 2 },
  learning: { label: 'Learning', dots: 1 },
}

export interface SkillGroup {
  title: string
  category?: Category
  skills: { name: string; level: SkillLevel }[]
}

export const skillGroups: SkillGroup[] = [
  {
    title: 'UI/UX Design',
    category: 'UI/UX Design',
    skills: [
      { name: 'Figma', level: 'confident' },
      { name: 'Canva', level: 'confident' },
    ],
  },
  {
    title: 'Web Development',
    category: 'Web Development',
    skills: [
      { name: 'HTML', level: 'confident' },
      { name: 'CSS', level: 'confident' },
      { name: 'JavaScript', level: 'working' },
      { name: 'TypeScript', level: 'working' },
      { name: 'React', level: 'working' },
      { name: 'Next.js', level: 'working' },
      { name: 'Vite', level: 'working' },
    ],
  },
  {
    title: 'Backend & Database',
    category: 'Web Development',
    skills: [
      { name: 'Node.js', level: 'working' },
      { name: 'Express', level: 'working' },
      { name: 'Flask', level: 'learning' },
      { name: 'MySQL', level: 'working' },
      { name: 'PostgreSQL', level: 'learning' },
      { name: 'Supabase', level: 'working' },
    ],
  },
  {
    title: 'Graphic Design',
    category: 'Graphic Design',
    skills: [
      { name: 'Adobe Illustrator', level: 'working' },
      { name: 'Figma', level: 'confident' },
      { name: 'Canva', level: 'confident' },
    ],
  },
  {
    title: 'Data & Machine Learning',
    category: 'AI & Data',
    skills: [
      { name: 'Python', level: 'working' },
      { name: 'Pandas', level: 'working' },
      { name: 'Scikit-learn', level: 'working' },
      { name: 'TensorFlow', level: 'working' },
      { name: 'PyTorch', level: 'learning' },
    ],
  },
  {
    title: 'Mobile & Developer Tools',
    skills: [
      { name: 'Kotlin', level: 'working' },
      { name: 'Java', level: 'learning' },
      { name: 'Android Studio', level: 'working' },
      { name: 'Docker', level: 'working' },
    ],
  },
]

export interface Achievement {
  title: string
  period: string
  result: string
  description: string
  image?: string
}

export interface ExperienceItem {
  org: string
  period: string
  role: string
  description: string
  image?: string
}

export interface TrainingItem {
  title: string
  period: string
  program: string
  description: string
  image?: string
}

// Sorted newest first. Add a new object at the top to add an entry.
export const experience: ExperienceItem[] = [
  {
    org: 'SAKTI Podcast',
    period: 'Feb 2026 – Present',
    role: 'Graphic Designer',
    description:
      'Designing and producing 10+ visual assets for the department’s social media and podcast.',
  },
  {
    org: 'BSO Dimensi Web',
    period: 'Dec 2025 – Present',
    role: 'Head of Media & Publication',
    description:
      'Designed 30+ promotional and educational materials and managed content for 2 social media platforms.',
  },
  {
    org: 'ISSI',
    period: 'Nov 2025 – Present',
    role: 'Junior High Science Tutor',
    description:
      'Running weekly science sessions for 12+ students and turning complex concepts into easy explanations.',
  },
  {
    org: 'HIMATIF',
    period: 'Mar 2025 – Jan 2026',
    role: 'Kominfo Member · PDD Lead',
    description:
      'Produced 50+ visual assets and led the visual strategy for 2 major programs.',
    image: '/experience/himatif.jpeg',
  },
    {
    org: 'OSIS SMA Negeri 1 Cileunyi',
    period: 'Sep 2021 – Okt 2023',
    role: 'Secretary',
    description:
      'Managed the organization’s internal secretary and documentation.',
    image: '/experience/osis.jpg',
  },
]

export const achievements: Achievement[] = [
  {
    title: 'Makarapreneur International Business Competition',
    period: '2026',
    result: '3rd Place',
    description: 'Recognized for an AI-based nutrition management app.',
    image: '/experience/makarapreneur.jpeg',
  },
  {
    title: 'INFEST 6.0',
    period: '2025',
    result: '1st Place · Illustration',
    description: 'First place in the Illustration Art category (department-level competition).',
  },
  {
    title: 'INFEST 5.0',
    period: '2024',
    result: '2nd Place · Illustration',
    description: 'Second place in the Illustration Art category (department-level competition).',
  },
  
]

export const training: TrainingItem[] = [
  {
    title: 'Cohort AI Fullstack Developer',
    period: '2026 – Ongoing', 
    program: 'Asah led by Dicoding x GoTo',
    description: 'Learning to build full-stack applications with AI features.',
    image: '/experience/asah.jpeg',
  },
  {
    title: 'Cohort AI Engineer',
    period: '2026', 
    program: 'Pijak x IBM Skillsbuild', 
    description: 'Learning to perform data analysis with Python.',
    image: '/experience/pijak.jpg',
  },
]

// The scrolling band above "Let’s discuss"
export const marqueeItems = [
  'Web Development',
  'UI/UX Design',
  'Data & ML',
  'Graphic Design',
  'Illustration',
]
