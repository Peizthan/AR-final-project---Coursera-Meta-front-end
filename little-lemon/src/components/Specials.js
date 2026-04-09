import { Link } from 'react-router-dom';
import './Specials.css';

const SPECIALS = [
  {
    id: 1,
    name: 'Greek Salad',
    price: '$12.99',
    description:
      'The famous Greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.',
    emoji: '🥗',
  },
  {
    id: 2,
    name: 'Bruschetta',
    price: '$5.99',
    description:
      'Our bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.',
    emoji: '🍞',
  },
  {
    id: 3,
    name: 'Lemon Dessert',
    price: '$5.00',
    description:
      'This comes straight from grandma\u2019s recipe book \u2014 every last ingredient has been sourced and is as authentic as can be.',
    emoji: '🍋',
  },
];

function Specials() {
  return (
    <section className="specials" aria-labelledby="specials-heading">
      <div className="specials__inner">
        <div className="specials__header">
          <h2 id="specials-heading" className="specials__title">
            This Week's Specials
          </h2>
          <Link to="/menu" className="specials__menu-btn" aria-label="View full menu">
            Online Menu
          </Link>
        </div>

        <ul className="specials__list">
          {SPECIALS.map((item) => (
            <li key={item.id} className="specials__card">
              <div className="specials__card-image" aria-hidden="true">
                <span role="img" aria-label={item.name}>{item.emoji}</span>
              </div>
              <div className="specials__card-body">
                <div className="specials__card-header">
                  <h3 className="specials__card-name">{item.name}</h3>
                  <span className="specials__card-price">{item.price}</span>
                </div>
                <p className="specials__card-desc">{item.description}</p>
                <Link to="/booking" className="specials__order-link" aria-label={`Order ${item.name}`}>
                  Order a Delivery 🛵
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Specials;
