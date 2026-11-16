import { useEffect, useRef } from 'react'
import type { SyntheticEvent } from 'react'
import { Link } from 'react-router-dom'
import { skillGroups, skillLevels } from '../data/profile'
import { ArrowRight } from './Icons'
import Reveal from './Reveal'

const ICON_EXTENSIONS = ['svg', 'webp', 'png'] as const

const skillIconPaths = (name: string) => {
  const slug = name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
  return [...ICON_EXTENSIONS.map((ext) => `/tech/${slug}.${ext}`), '/tech/placeholder.svg']
}

/** Try the next icon format; stop after the placeholder. */
function nextIcon(event: SyntheticEvent<HTMLImageElement>, paths: string[]) {
  const image = event.currentTarget
  const step = Number(image.dataset.step ?? 0) + 1
  if (step < paths.length) {
    image.dataset.step = String(step)
    image.src = paths[step]
  } else {
    image.onerror = null
  }
}

/** Three dots: 3 = confident, 2 = working knowledge, 1 = learning */
function LevelDots({ count }: { count: number }) {
  return (
    <span className="service__level" aria-hidden="true">
      {[1, 2, 3].map((n) => (
        <i key={n} className={n <= count ? 'is-on' : ''} />
      ))}
    </span>
  )
}

type Group = (typeof skillGroups)[number]

function ServiceCard({ service, duplicate = false }: { service: Group; duplicate?: boolean }) {
  const to = service.category
    ? `/projects?category=${encodeURIComponent(service.category)}`
    : '/projects'

  return (
    <div className="services__item">
      <Link
        to={to}
        className="service"
        tabIndex={duplicate ? -1 : undefined}
        aria-hidden={duplicate || undefined}
      >
        <header className="service__head">
          <h3>{service.title}</h3>
          <span className="service__arrow" aria-hidden="true">
            <ArrowRight size={22} />
          </span>
        </header>
        <hr />
        <ul className="service__skills">
          {service.skills.map((skill) => {
            const paths = skillIconPaths(skill.name)
            const level = skillLevels[skill.level]

            return (
              <li className="service__skill" key={skill.name}>
                <div className="service__skill-info">
                  <img
                    src={paths[0]}
                    alt=""
                    loading="lazy"
                    data-step="0"
                    onError={(e) => nextIcon(e, paths)}
                  />
                  <span>{skill.name}</span>
                </div>
                <LevelDots count={level.dots} />
                <span className="sr-only">{level.label}</span>
              </li>
            )
          })}
        </ul>
      </Link>
    </div>
  )
}

export default function Services() {
  const viewport = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const view = viewport.current
    if (!view) return

    const updateCardWidth = () => {
      const style = window.getComputedStyle(view)
      const padding = parseFloat(style.paddingLeft) + parseFloat(style.paddingRight)
      const gap = parseFloat(style.getPropertyValue('--service-gap')) || 20
      const innerWidth = view.clientWidth - padding
      const columns = window.matchMedia('(max-width: 620px)').matches
        ? 1
        : window.matchMedia('(max-width: 900px)').matches
          ? 2
          : 3
      view.style.setProperty('--service-card-width', `${(innerWidth - gap * (columns - 1)) / columns}px`)
    }

    updateCardWidth()
    const observer = new ResizeObserver(updateCardWidth)
    observer.observe(view)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="service" className="services">
      <div className="container">
        <div className="services__top">
          <Reveal className="section-head section-head--row">
            <h2 className="h-light services__title">
              My <span className="c-purple">Skills</span>
            </h2>
            <p>
              A mix of design, development, data, and tools I use to turn ideas into thoughtful digital products.
            </p>
          </Reveal>

          <Reveal className="skills-legend" delay={100}>
            <ul aria-label="Skill levels">
              {Object.values(skillLevels).map((l) => (
                <li key={l.label}>
                  <LevelDots count={l.dots} />
                  {l.label}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>

      <div className="services__viewport" ref={viewport}>
        <div className="services__track">
          {[0, 1].map((copy) => (
            <div className="services__group" key={copy} aria-hidden={copy === 1}>
              {skillGroups.map((service) => (
                <ServiceCard key={service.title} service={service} duplicate={copy === 1} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}