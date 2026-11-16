import { marqueeItems } from '../data/profile'
import { SparkleStar } from './Icons'

export default function Marquee() {
  const row = (suffix: string) =>
    marqueeItems.map((item) => (
      <span className="marquee__item" key={`${suffix}-${item}`}>
        {item}
        <SparkleStar />
      </span>
    ))

  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee__band">
        <div className="marquee__track">
          {row('a')}
          {row('b')}
        </div>
      </div>
    </div>
  )
}
