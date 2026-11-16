import { Link, useParams } from 'react-router-dom'
import { getProject, projects } from '../data/projects'
import ProjectCover from '../components/ProjectCover'
import Reveal from '../components/Reveal'
import { ArrowLeft, ArrowRight, ArrowUpRight } from '../components/Icons'
import NotFound from './NotFound'

export default function ProjectDetail() {
  const { slug = '' } = useParams()
  const project = getProject(slug)
  if (!project) return <NotFound />

  const index = projects.findIndex((p) => p.slug === project.slug)
  const prev = projects[(index - 1 + projects.length) % projects.length]
  const next = projects[(index + 1) % projects.length]

  return (
    <article className="page detail">
      <div className="container">
        <Reveal>
          <Link to="/projects" className="back">
            <ArrowLeft size={20} /> All projects
          </Link>
          <p className="detail__cat">{project.category}</p>
          <h1 className="page__title">{project.title}</h1>
          <p className="page__lead">{project.subtitle}</p>
        </Reveal>

        <Reveal className="detail__cover" delay={100} y={70}>
          <ProjectCover project={project} />
        </Reveal>

        <div className="detail__body">
          <Reveal as="aside" className="detail__meta">
            <dl>
              <div><dt>Year</dt><dd>{project.year}</dd></div>
              <div><dt>Role</dt><dd>{project.role}</dd></div>
              <div><dt>Category</dt><dd>{project.category}</dd></div>
              <div>
                <dt>Tech &amp; tools</dt>
                <dd className="detail__tags">
                  {project.techStack.map((t) => (
                    <span className="chip chip--light chip--sm" key={t}>{t}</span>
                  ))}
                </dd>
              </div>
            </dl>
            <div className="detail__links">
              {project.liveUrl && (
                <a className="btn btn--sm" href={project.liveUrl} target="_blank" rel="noreferrer">
                  Live demo <ArrowUpRight size={20} />
                </a>
              )}
              {project.repoUrl && (
                <a className="btn btn--sm btn--ghost" href={project.repoUrl} target="_blank" rel="noreferrer">
                  GitHub <ArrowUpRight size={20} />
                </a>
              )}
            </div>
          </Reveal>

          <div className="detail__text">
            <Reveal><h2>Overview</h2></Reveal>
            {project.details.map((para, i) => (
              <Reveal as="p" key={i} delay={i * 80}>{para}</Reveal>
            ))}
            {project.gallery?.map((src) => (
              <Reveal key={src} className="detail__shot">
                <img src={src} alt={`${project.title} screenshot`} loading="lazy" />
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal className="detail__nav">
          <Link to={`/projects/${prev.slug}`}>
            <ArrowLeft size={20} /> <span>{prev.title}</span>
          </Link>
          <Link to={`/projects/${next.slug}`}>
            <span>{next.title}</span> <ArrowRight size={20} />
          </Link>
        </Reveal>
      </div>
    </article>
  )
}
