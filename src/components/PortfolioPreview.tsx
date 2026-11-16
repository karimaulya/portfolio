import { useState } from 'react'
import { Link } from 'react-router-dom'
import { categories, projects } from '../data/projects'
import ProjectCard from './ProjectCard'
import Reveal from './Reveal'
import { ArrowLeft, ArrowRight } from './Icons'

const PAGE_SIZE = 3

export default function PortfolioPreview() {
  const [filter, setFilter] = useState('All')
  const [page, setPage] = useState(0)

  // filter chips = the project categories
  const tags = ['All', ...categories]
  const filtered = filter === 'All' ? projects : projects.filter((p) => p.category === filter)
  const pages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE))
  const visible = filtered.slice(page * PAGE_SIZE, page * PAGE_SIZE + PAGE_SIZE)

  const pick = (t: string) => {
    setFilter(t)
    setPage(0)
  }

  return (
    <section id="project" className="portfolio">
      <div className="container">
        <Reveal className="portfolio__head">
          <h2>
            Let’s have a look at my <span className="c-purple">Portfolio</span>
          </h2>
        </Reveal>

        <Reveal className="chips" delay={100}>
          {tags.map((t) => (
            <button
              key={t}
              type="button"
              className={`chip ${filter === t ? 'is-active' : ''}`}
              onClick={() => pick(t)}
            >
              {t}
            </button>
          ))}
        </Reveal>

        <div className="portfolio__grid" key={`${filter}-${page}`}>
          {visible.map((p, i) => (
            <Reveal className="portfolio__project" key={p.slug} delay={i * 120}>
              <ProjectCard project={p} />
              <div className="portfolio__info">
                <Link to={`/projects/${p.slug}`} className="portfolio__title">
                  <span className="portfolio__subtitle">{p.subtitle}</span>
                </Link>
                <p>{p.summary}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {pages > 1 && (
          <div className="portfolio__controls" aria-label="Project pages">
            <button
              type="button"
              className="portfolio__arrow"
              aria-label="Previous projects"
              disabled={page === 0}
              onClick={() => setPage((currentPage) => currentPage - 1)}
            >
              <ArrowLeft size={22} />
            </button>
            <span>{page + 1} / {pages}</span>
            <button
              type="button"
              className="portfolio__arrow"
              aria-label="Next projects"
              disabled={page === pages - 1}
              onClick={() => setPage((currentPage) => currentPage + 1)}
            >
              <ArrowRight size={22} />
            </button>
          </div>
        )}

        <div className="portfolio__footer">
          <Link to="/projects" className="portfolio__view-all">
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  )
}
