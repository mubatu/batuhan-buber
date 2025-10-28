import { GrMail } from 'react-icons/gr';
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
          <GrMail className="mail-icon" aria-hidden="true" />
          Contact: batuhan@buber.tr
        </a>
      </div>
    </footer>
  );
}

