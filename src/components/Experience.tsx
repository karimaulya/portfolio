import { achievements, experience, training } from '../data/profile'
import Reveal from './Reveal'

const DOC_PLACEHOLDER = '/experience/documentation-placeholder.svg'

function DocPhoto({ image, label }: { image?: string; label: string }) {
  return (
    <div className="experience__documentation">
      <img
        src={image ?? DOC_PLACEHOLDER}
        alt={`${label} photo`}
        loading="lazy"
        onError={(e) => {
          const img = e.currentTarget
          img.onerror = null
          img.src = DOC_PLACEHOLDER
        }}
      />
    </div>
  )
}

export default function Experience() {
  return (
    <section id="resume" className="experience">
      <div className="container experience__content">
        {/* ---------- Achievements + Bootcamps ---------- */}
        <section className="experience__group" aria-labelledby="achievement-title">
          <Reveal className="experience__title">
            <h2 id="achievement-title">
              <span className="c-blue">Achievements</span>
            </h2>
          </Reveal>
          <div className="timeline">
            {achievements.map((item, i) => (
              <Reveal key={item.title} className="timeline__row" delay={i * 80}>
                <div className="timeline__left" tabIndex={0}>
                  <h3>{item.title}</h3>
                  <p>{item.period}</p>
                </div>
                <div className="timeline__node" aria-hidden="true"><span /></div>
                <div className="timeline__right">
                  <h3>{item.result}</h3>
                  <p>{item.description}</p>
                </div>
                <DocPhoto image={item.image} label={item.title} />
              </Reveal>
            ))}
          </div>

          <Reveal className="experience__title experience__title--next">
            <h2 id="bootcamp-title">
              <span className="c-blue">Bootcamps</span>
            </h2>
          </Reveal>
          <div className="timeline">
            {training.map((item, i) => (
              <Reveal key={item.title} className="timeline__row" delay={i * 80}>
                <div className="timeline__left" tabIndex={0}>
                  <h3>{item.title}</h3>
                  <p>{item.period}</p>
                </div>
                <div className="timeline__node" aria-hidden="true"><span /></div>
                <div className="timeline__right">
                  <h3>{item.program}</h3>
                  <p>{item.description}</p>
                </div>
                <DocPhoto image={item.image} label={item.title} />
              </Reveal>
            ))}
          </div>
        </section>

        {/* ---------- Experience ---------- */}
        <section className="experience__group" aria-labelledby="experience-title">
          <Reveal className="experience__title">
            <h2 id="experience-title">
              <span className="c-blue">Experience</span>
            </h2>
          </Reveal>
          <div className="timeline">
            {experience.map((e, i) => (
              <Reveal key={e.org} className="timeline__row" delay={i * 80}>
                <div className="timeline__left" tabIndex={0}>
                  <h3>{e.org}</h3>
                  <p>{e.period}</p>
                </div>
                <div className="timeline__node" aria-hidden="true"><span /></div>
                <div className="timeline__right">
                  <h3>{e.role}</h3>
                  <p>{e.description}</p>
                </div>
                <DocPhoto image={e.image} label={e.org} />
              </Reveal>
            ))}
          </div>
        </section>
      </div>

      <a className="btn experience__cv" href="Karima-Ulya-Hermawan-CV.pdf" download="Karima-Ulya-Hermawan-CV.pdf">
        Download CV
      </a>
    </section>
  )
}