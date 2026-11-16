import type { CSSProperties, ElementType, ReactNode } from 'react'
import { useReveal } from '../hooks/useReveal'

interface Props {
  children: ReactNode
  /** delay in ms (use it to stagger siblings) */
  delay?: number
  /** how far (px) the element travels up from below */
  y?: number
  as?: ElementType
  className?: string
}

/** Wrap anything in <Reveal> to make it fade + slide up from the bottom when scrolled into view. */
export default function Reveal({ children, delay = 0, y = 48, as, className = '' }: Props) {
  const Tag: ElementType = as ?? 'div'
  const { ref, visible } = useReveal<HTMLElement>()
  const style = { '--reveal-delay': `${delay}ms`, '--reveal-y': `${y}px` } as CSSProperties
  return (
    <Tag ref={ref} className={`reveal ${visible ? 'is-visible' : ''} ${className}`} style={style}>
      {children}
    </Tag>
  )
}
