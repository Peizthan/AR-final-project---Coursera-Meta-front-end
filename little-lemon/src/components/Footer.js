import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      <div className="footer__inner">
        <div className="footer__brand">
          <span className="footer__logo-icon" aria-hidden="true">🍋</span>
          <p className="footer__tagline">Little Lemon – Mediterranean Cuisine</p>
        </div>

        <nav className="footer__nav" aria-label="Footer navigation">
          <h2 className="footer__heading">Navigation</h2>
          <ul className="footer__nav-list">
            <li><Link to="/" className="footer__link">Home</Link></li>
            <li><Link to="/menu" className="footer__link">Menu</Link></li>
            <li><Link to="/booking" className="footer__link">Reservations</Link></li>
          </ul>
        </nav>

        <div className="footer__contact">
          <h2 className="footer__heading">Contact</h2>
          <address>
            <p>123 Lemon Street, Chicago, IL</p>
            <p>
              Phone:{' '}
              <a href="tel:+13125550199" className="footer__link">(312) 555-0199</a>
            </p>
            <p>
              Email:{' '}
              <a href="mailto:hello@littlelemon.com" className="footer__link">
                hello@littlelemon.com
              </a>
            </p>
          </address>
        </div>

        <div className="footer__social">
          <h2 className="footer__heading">Follow Us</h2>
          <ul className="footer__social-list">
            <li>
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="footer__link" aria-label="Facebook">
                Facebook
              </a>
            </li>
            <li>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="footer__link" aria-label="Instagram">
                Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>

      <p className="footer__copy">
        &copy; {new Date().getFullYear()} Little Lemon. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
