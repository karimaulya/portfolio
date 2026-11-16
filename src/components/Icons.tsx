interface P {
  size?: number
}
const base = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.8,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  'aria-hidden': true,
}

export const ArrowUpRight = ({ size = 24 }: P) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...base}>
    <path d="M7 17 17 7" />
    <path d="M8 7h9v9" />
  </svg>
)

export const ArrowLeft = ({ size = 24 }: P) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...base}>
    <path d="M19 12H5" />
    <path d="m11 6-6 6 6 6" />
  </svg>
)

export const ArrowRight = ({ size = 24 }: P) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...base}>
    <path d="M5 12h14" />
    <path d="m13 6 6 6-6 6" />
  </svg>
)

export const Star = ({ size = 32 }: P) => (
  <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
    <path
      fill="#fdb022"
      d="m12 2.8 2.7 5.8 6.3.7-4.7 4.3 1.3 6.3L12 16.7 6.4 20l1.3-6.3L3 9.3l6.3-.7z"
    />
  </svg>
)

export const SparkleStar = ({ size = 34 }: P) => (
  <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
    <path fill="#c961de" d="M12 1c.7 6.2 4.8 10.3 11 11-6.2.7-10.3 4.8-11 11-.7-6.2-4.8-10.3-11-11 6.2-.7 10.3-4.8 11-11Z" />
  </svg>
)

export const Quote = ({ size = 36 }: P) => (
  <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
    <path
      fill="#0f103f"
      d="M4 17.5V13c0-4 1.8-6.600 5.500-7.500l.7 1.500C8.400 7.700 7.600 9 7.500 10.500H10V17.500H4Zm9 0V13c0-4 1.800-6.600 5.500-7.500l.7 1.500c-1.800.7-2.600 2-2.700 3.500H19v7H13Z"
    />
  </svg>
)

export const Mail = ({ size = 32 }: P) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...base} stroke="#0f103f">
    <rect x="3" y="5" width="18" height="14" rx="3" />
    <path d="m4 8 8 6 8-6" />
  </svg>
)
