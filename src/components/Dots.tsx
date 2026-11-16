interface Props {
  count: number
  active: number
  onSelect?: (i: number) => void
  label?: string
}

export default function Dots({ count, active, onSelect, label = 'Pagination' }: Props) {
  if (count < 2) return null
  return (
    <div className="dots" role="tablist" aria-label={label}>
      {Array.from({ length: count }, (_, i) => (
        <button
          key={i}
          type="button"
          role="tab"
          aria-selected={i === active}
          aria-label={`Go to ${i + 1}`}
          className={`dots__item ${i === active ? 'is-active' : ''}`}
          onClick={() => onSelect?.(i)}
        />
      ))}
    </div>
  )
}
