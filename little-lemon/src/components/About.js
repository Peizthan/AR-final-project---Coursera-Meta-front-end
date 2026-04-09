import './About.css';

function About() {
  return (
    <section className="about" aria-labelledby="about-heading">
      <div className="about__inner">
        <div className="about__text">
          <h2 id="about-heading" className="about__title">Little Lemon</h2>
          <h3 className="about__subtitle">Chicago</h3>
          <p className="about__description">
            Little Lemon is owned by two Italian brothers, Mario and Adrian,
            who moved to the United States to pursue their shared dream of
            owning a restaurant. To craft the menu, Mario relies on family
            recipes and his experience as a chef in Italy. Adrian does
            all the marketing for the restaurant and led the effort to
            expand the menu beyond regional Italian cuisine to incorporate
            Mediterranean dishes.
          </p>
        </div>
        <div className="about__images" aria-hidden="true">
          <div className="about__img about__img--back">
            <span role="img" aria-label="Chefs cooking">👨‍🍳</span>
          </div>
          <div className="about__img about__img--front">
            <span role="img" aria-label="Restaurant interior">🏛️</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
