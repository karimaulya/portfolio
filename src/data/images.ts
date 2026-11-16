/**
 * AUTOMATIC IMAGES
 * ----------------
 * Drop files into  src/assets/projects/  and name them after the project slug:
 *   solarcast.png        -> cover image of the project with slug "solarcast"
 *   solarcast-1.png      -> extra screenshots shown on the detail page (-1, -2, -3 ...)
 * Supported: png, jpg, jpeg, webp, avif, svg. No code changes needed.
 *
 * Your hero photo: put a transparent PNG named  hero.png  (or hero.webp) in  src/assets/
 */
const projectFiles = import.meta.glob('../assets/projects/*.{png,jpg,jpeg,webp,avif,svg}', {
  eager: true,
  query: '?url',
  import: 'default',
}) as Record<string, string>

const heroFiles = import.meta.glob('../assets/hero.{png,webp,jpg,jpeg}', {
  eager: true,
  query: '?url',
  import: 'default',
}) as Record<string, string>

const baseName = (path: string) => (path.split('/').pop() ?? '').replace(/\.[^.]+$/, '')

export const coverFor = (slug: string): string | undefined =>
  Object.entries(projectFiles).find(([p]) => baseName(p) === slug)?.[1]

export const galleryFor = (slug: string): string[] =>
  Object.entries(projectFiles)
    .filter(([p]) => baseName(p).startsWith(`${slug}-`))
    .sort(([a], [b]) => baseName(a).localeCompare(baseName(b), undefined, { numeric: true }))
    .map(([, url]) => url)

export const heroPhoto = (): string | undefined => Object.values(heroFiles)[0]
