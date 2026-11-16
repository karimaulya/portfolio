import { FormEvent, useState } from 'react'
import { profile } from '../data/profile'
import ContactLinks from './ContactLinks'
import Reveal from './Reveal'

export default function ContactCta() {
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const [statusMessage, setStatusMessage] = useState('')

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const endpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT

    if (!endpoint) {
      setStatus('error')
      setStatusMessage(`The contact form isn't connected yet. Email me directly at ${profile.email}.`)
      return
    }

    setStatus('sending')
    setStatusMessage('')

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, subject, message }),
      })

      if (!response.ok) {
        setStatus('error')
        setStatusMessage(`Message couldn't be sent. Please try again or email me at ${profile.email}.`)
        return
      }

      setStatus('success')
      setStatusMessage('Thanks! Your message has been sent.')
      setEmail('')
      setSubject('')
      setMessage('')
    } catch {
      setStatus('error')
      setStatusMessage(`Message couldn't be sent. Please try again or email me at ${profile.email}.`)
    }
  }

  return (
    <section id="contact" className="cta">
      <Reveal>
        <h2>
          Have an Awesome Project Idea? <span className="c-blue">Let’s Discuss</span>
        </h2>
      </Reveal>
      <Reveal delay={150} className="cta__wrap">
        <div className="cta__layout">
          <form className="cta__form" onSubmit={onSubmit} aria-busy={status === 'sending'}>
            <span className="cta__icon"><img src="/social/email.svg" alt="" /></span>
            <input
              type="email"
              name="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter Email Address"
              aria-label="Your email address"
              autoComplete="email"
            />
            <input
              className="cta__subject"
              type="text"
              name="subject"
              required
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              placeholder="Subject"
              aria-label="Email subject"
            />
            <textarea
              required
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Write your message"
              aria-label="Your message"
              rows={4}
            />
            <button type="submit" className="btn btn--sm" disabled={status === 'sending'}>
              {status === 'sending' ? 'Sending...' : 'Send'}
            </button>
            {statusMessage && (
              <p className={`cta__status cta__status--${status}`} role="status" aria-live="polite">
                {statusMessage}
              </p>
            )}
          </form>
          <ContactLinks className="contact-links--contact" />
        </div>
      </Reveal>
    </section>
  )
}
