import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section className="not-found">
      <div className="not-found__content">
        <p className="not-found__eyebrow">Oops! The page is missing</p>
        <p className="not-found__code" aria-hidden="true">404</p>
        <h1 className="not-found__title">We can’t find that page</h1>
        <p className="not-found__message">It may have moved, or the link might be out of date.</p>
        <div className="not-found__actions">
          <Link to="/" className="btn">Back home</Link>
          <Link to="/projects" className="btn btn--ghost">Browse projects</Link>
        </div>
      </div>
    </section>
  )
}
