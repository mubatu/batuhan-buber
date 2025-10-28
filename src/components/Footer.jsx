import { MdEmail } from 'react-icons/md';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <a 
          href="mailto:batuhan@buber.tr" 
          className="footer-email"
          aria-label="Send email to Batuhan Buber"
        >
          <MdEmail className="mail-icon" aria-hidden="true" />
          batuhan@buber.tr
        </a>
      </div>
    </footer>
  );
}

