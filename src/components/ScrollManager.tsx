import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/** Scrolls to top on page change, or to the #section when the URL has a hash. */
export default function ScrollManager() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0 })
      return
    }
    const id = hash.slice(1)
    const t = setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    }, 60)
    return () => clearTimeout(t)
  }, [pathname, hash])

  return null
}
