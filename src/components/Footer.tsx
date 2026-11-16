import { profile } from '../data/profile'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__bottom">
        <p>Copyright © {new Date().getFullYear()} {profile.name}. All Rights Reserved.</p>
      </div>
    </footer>
  )
}
