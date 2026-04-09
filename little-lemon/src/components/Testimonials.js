import './Testimonials.css';

const TESTIMONIALS = [
  {
    id: 1,
    name: 'Maria G.',
    rating: 5,
    comment:
      "The food is absolutely amazing! The Greek salad is the best I've had outside of Greece.",
    avatar: '👩',
  },
  {
    id: 2,
    name: 'James T.',
    rating: 5,
    comment:
      'Great atmosphere, friendly staff, and the lemon dessert is out of this world. Will definitely be back!',
    avatar: '👨',
  },
  {
    id: 3,
    name: 'Sofia A.',
    rating: 4,
    comment:
      'Lovely Mediterranean flavors in a warm, welcoming environment. Highly recommend the bruschetta.',
    avatar: '👩',
  },
  {
    id: 4,
    name: 'David K.',
    rating: 5,
    comment:
      'Such a gem in Chicago! Authentic recipes with a modern twist. The reservations system is super easy to use.',
    avatar: '👨',
  },
];

function StarRating({ rating }) {
  return (
    <div className="testimonial__stars" aria-label={`Rating: ${rating} out of 5`} role="img">
      {Array.from({ length: 5 }, (_, i) => (
        <span key={i} aria-hidden="true">{i < rating ? '★' : '☆'}</span>
      ))}
    </div>
  );
}

function Testimonials() {
  return (
    <section className="testimonials" aria-labelledby="testimonials-heading">
      <div className="testimonials__inner">
        <h2 id="testimonials-heading" className="testimonials__title">
          What Our Customers Say
        </h2>

        <ul className="testimonials__list">
          {TESTIMONIALS.map((t) => (
            <li key={t.id} className="testimonial__card">
              <StarRating rating={t.rating} />
              <div className="testimonial__avatar" aria-hidden="true">
                {t.avatar}
              </div>
              <p className="testimonial__name">{t.name}</p>
              <blockquote className="testimonial__comment">
                <p>"{t.comment}"</p>
              </blockquote>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Testimonials;
