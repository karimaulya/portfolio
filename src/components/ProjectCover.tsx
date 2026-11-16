import type { Project } from '../data/projects'

const gradients = [
  ['#2954a3', '#c961de'],
  ['#0f103f', '#2954a3'],
  ['#c961de', '#ffead5'],
  ['#1d2939', '#2954a3'],
]

/** Shows the project's cover image, or a generated gradient placeholder when none is set. */
export default function ProjectCover({ project }: { project: Project }) {
  if (project.cover) {
    return <img className="cover" src={project.cover} alt={project.title} loading="lazy" />
  }
  const [a, b] = gradients[project.accent ?? 0]
  return (
    <div className="cover cover--fallback" style={{ background: `linear-gradient(135deg, ${a}, ${b})` }} aria-hidden="true">
      <span>{project.title.charAt(0)}</span>
    </div>
  )
}
