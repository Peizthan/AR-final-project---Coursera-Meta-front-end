import { Link } from 'react-router-dom';
import './Hero.css';

function Hero() {
  return (
    <section className="hero" aria-label="Hero section">
      <div className="hero__content">
        <div className="hero__text">
          <h1 className="hero__title">Little Lemon</h1>
          <h2 className="hero__subtitle">Chicago</h2>
          <p className="hero__description">
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
          </p>
          <Link to="/booking" className="hero__cta" aria-label="Reserve a table at Little Lemon">
            Reserve a Table
          </Link>
        </div>
        <div className="hero__image" aria-hidden="true">
          <div className="hero__image-placeholder">
            <span role="img" aria-label="Restaurant food">🍽️</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
