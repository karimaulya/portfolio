import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useScrollSpy } from '../hooks/useScrollSpy'

const links = [
  { id: 'about', label: 'About' },
  { id: 'service', label: 'Skills' },
  { id: 'resume', label: 'Experience' },
  { id: 'project', label: 'Project' },
  { id: 'contact', label: 'Contact' },
]

export default function Navbar() {
  const { pathname } = useLocation()
  const [open, setOpen] = useState(false)
  const [selected, setSelected] = useState<string | null>(null)
  const spy = useScrollSpy(links.map((l) => l.id))
  const active = pathname.startsWith('/projects') ? 'project' : pathname === '/' ? selected ?? spy : ''

  useEffect(() => setOpen(false), [pathname])
  useEffect(() => setSelected(null), [spy])

  return (
    <header className={`nav ${open ? 'is-open' : ''}`}>
      <Link to="/" className="nav__brand">
        Karima Ulya Hermawan<span>.</span>
      </Link>
      <ul className="nav__links">
        {links.map((l) => (
          <li key={l.id}>
            <Link
              to={{ pathname: '/', hash: `#${l.id}` }}
              className={`nav__link ${active === l.id ? 'is-active' : ''}`}
              onClick={() => {
                setSelected(l.id)
                setOpen(false)
              }}
            >
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
      <button
        type="button"
        className="nav__toggle"
        aria-label="Toggle menu"
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
      >
        <span />
        <span />
      </button>
    </header>
  )
}
