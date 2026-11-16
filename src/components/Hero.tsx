import { profile } from '../data/profile'
import ContactLinks from './ContactLinks'
import Reveal from './Reveal'

export default function Hero() {
  const [left, right] = profile.about

  return (
    <section id="about" className="hero">
      {/* giant outlined word behind the photo, scrolling slowly to the left */}
      <div className="hero__bg" aria-hidden="true">
        <div className="hero__track">
          {[0, 1].map((g) => (
            <div className="hero__group" key={g}>
              {[0, 1].map((i) => (
                <span key={i}>{profile.heroWord}</span>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="hero__stage">
        <Reveal className="hero__circle" y={90}>
          <span />
        </Reveal>
        <Reveal className="hero__photo" delay={200} y={90}>
          <img src={profile.heroImage} alt={profile.name} />
        </Reveal>
      </div>

      <Reveal className="hero__left" delay={150}>
        <p className="hero__hello">Hello, I’m</p>
        <h1>{profile.name}</h1>
        <p className="hero__text">{left}</p>
      </Reveal>

      <Reveal className="hero__right" delay={300}>
        <p className="hero__text">{right}</p>
        <ContactLinks className="hero__contact-links" iconOnly />
      </Reveal>
    </section>
  )
}
