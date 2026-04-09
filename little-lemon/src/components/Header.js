import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.css';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="header" role="banner">
      <div className="header__inner">
        <Link to="/" className="header__logo" aria-label="Little Lemon home" onClick={closeMenu}>
          <span className="header__logo-circle" aria-hidden="true">🍋</span>
          <span className="header__logo-text">Little Lemon</span>
        </Link>

        <button
          className={`header__hamburger${menuOpen ? ' header__hamburger--open' : ''}`}
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          aria-controls="main-nav"
          onClick={toggleMenu}
        >
          <span className="header__hamburger-bar" aria-hidden="true" />
          <span className="header__hamburger-bar" aria-hidden="true" />
          <span className="header__hamburger-bar" aria-hidden="true" />
        </button>

        <nav
          id="main-nav"
          className={`header__nav${menuOpen ? ' header__nav--open' : ''}`}
          aria-label="Main navigation"
        >
          <ul className="header__nav-list">
            <li>
              <NavLink to="/" end className={({ isActive }) => isActive ? 'header__nav-link active' : 'header__nav-link'} onClick={closeMenu}>Home</NavLink>
            </li>
            <li>
              <NavLink to="/menu" className={({ isActive }) => isActive ? 'header__nav-link active' : 'header__nav-link'} onClick={closeMenu}>Menu</NavLink>
            </li>
            <li>
              <NavLink to="/booking" className={({ isActive }) => isActive ? 'header__nav-link active' : 'header__nav-link'} onClick={closeMenu}>Reservations</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
