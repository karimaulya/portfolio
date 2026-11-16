import { profile } from '../data/profile'

interface Props {
  className?: string
  iconOnly?: boolean
}

interface ContactLink {
  name: string
  label: string
  href?: string
  icon: string
  external?: boolean
}

const links: ContactLink[] = [
  {
    name: 'Email',
    label: profile.email,
    href: `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(profile.email)}`,
    icon: '/social/email.svg',
    external: true,
  },
  { name: 'Instagram', label: '@karimaulyaa', href: profile.instagram, icon: '/social/instagram.svg', external: true },
  { name: 'LinkedIn', label: '@karimaulyahermawan', href: profile.linkedin, icon: '/social/linkedin.svg', external: true },
  { name: 'GitHub', label: '@karimaulya', href: profile.github, icon: '/social/github.svg', external: true },
]

export default function ContactLinks({ className = '', iconOnly = false }: Props) {
  return (
    <div className={`contact-links ${className}`}>
      {links.map((link) => {
        const content = (
          <>
            <img src={link.icon} alt="" />
            {!iconOnly && <span>{link.label}</span>}
          </>
        )

        return link.href ? (
          <a
            key={link.name}
            className="contact-links__item"
            href={link.href}
            target={link.external ? '_blank' : undefined}
            rel={link.external ? 'noreferrer' : undefined}
            aria-label={`${link.name}: ${link.label}`}
            title={iconOnly ? link.name : undefined}
          >
            {content}
          </a>
        ) : (
          <span key={link.name} className="contact-links__item" aria-label={`${link.name} username placeholder`}>
            {content}
          </span>
        )
      })}
    </div>
  )
}
