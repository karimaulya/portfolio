import { Link, useSearchParams } from 'react-router-dom'
import { categories, projects } from '../data/projects'
import type { Project } from '../data/projects'
import ProjectCover from '../components/ProjectCover'
import Reveal from '../components/Reveal'
import { ArrowLeft, ArrowUpRight } from '../components/Icons'

function Card({ p }: { p: Project }) {
  return (
    <Link to={`/projects/${p.slug}`} className="pc">
      <div className="pc__media">
        <ProjectCover project={p} />
        <span className="pc__go" aria-hidden="true">
          <ArrowUpRight size={20} />
        </span>
      </div>
      <div className="pc__body">
        <div className="pc__meta">
          <span className="pc__cat">{p.category}</span>
          <span>{p.year}</span>
        </div>
        <h2 className="pc__title">{p.title}</h2>
        <p className="pc__sub">{p.subtitle}</p>
        <ul className="pc__tags">
          {p.tags.slice(0, 3).map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
      </div>
    </Link>
  )
}

export default function Projects() {
  const [params, setParams] = useSearchParams()
  const count = (c: string) => (c === 'All' ? projects.length : projects.filter((p) => p.category === c).length)

  // sembunyikan kategori yang belum punya project (mis. UI/UX Design) supaya tidak ada filter kosong
  const filters = ['All', ...categories.filter((c) => count(c) > 0)]
  const requested = params.get('category') ?? 'All'
  const category = filters.includes(requested) ? requested : 'All'
  const list = category === 'All' ? projects : projects.filter((p) => p.category === category)

  const select = (c: string) => (c === 'All' ? setParams({}) : setParams({ category: c }))

  return (
    <section className="page projects-page">
      <div className="container">
        <Reveal>
          <Link to="/" className="back">
            <ArrowLeft size={20} /> Back home
          </Link>
          <h1 className="page__title">
            All <span className="c-purple">Projects</span>
          </h1>
          <p className="page__lead">A collection of things I’ve designed and built. Pick a category to filter.</p>
        </Reveal>

        <Reveal className="filter" delay={100}>
          <div className="filter__list" role="group" aria-label="Filter projects by category">
            {filters.map((c) => (
              <button
                key={c}
                type="button"
                className={`filter__btn ${category === c ? 'is-active' : ''}`}
                aria-pressed={category === c}
                onClick={() => select(c)}
              >
                {c} <small>{count(c)}</small>
              </button>
            ))}
          </div>
          <p className="filter__count">
            Showing {list.length} of {projects.length} projects
          </p>
        </Reveal>

        <div className="pc-grid" key={category}>
          {list.map((p, i) => (
            <Reveal key={p.slug} delay={(i % 3) * 100}>
              <Card p={p} />
            </Reveal>
          ))}
        </div>

        {list.length === 0 && <p className="page__lead">No projects in this category yet.</p>}
      </div>
    </section>
  )
}