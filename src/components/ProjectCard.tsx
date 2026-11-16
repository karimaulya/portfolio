import { Link } from 'react-router-dom'
import type { Project } from '../data/projects'
import ProjectCover from './ProjectCover'
import { ArrowUpRight } from './Icons'

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      to={`/projects/${project.slug}`}
      className="pcard"
    >
      <ProjectCover project={project} />
      <span className="pcard__shade" />
      <span className="pcard__arrow">
        <ArrowUpRight size={30} />
      </span>
      <span className="pcard__title">{project.title}</span>
    </Link>
  )
}
