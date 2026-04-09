import { Link } from 'react-router-dom';
import './MenuPage.css';

const MENU_SECTIONS = [
  {
    id: 'starters',
    title: 'Starters',
    items: [
      { id: 1, name: 'Greek Salad', price: '$12.99', description: 'Crispy lettuce, peppers, olives and Chicago-style feta cheese with garlic croutons.', emoji: '🥗' },
      { id: 2, name: 'Bruschetta', price: '$5.99', description: 'Grilled bread with garlic, salt, olive oil, and fresh tomatoes.', emoji: '🍞' },
      { id: 3, name: 'Hummus & Pita', price: '$7.50', description: 'Smooth traditional hummus served with warm pita bread.', emoji: '🫓' },
    ],
  },
  {
    id: 'mains',
    title: 'Mains',
    items: [
      { id: 4, name: 'Grilled Sea Bass', price: '$24.00', description: 'Fresh sea bass grilled with lemon butter, capers, and herbs.', emoji: '🐟' },
      { id: 5, name: 'Lamb Chops', price: '$28.50', description: 'Herb-crusted lamb chops served with roasted vegetables.', emoji: '🍖' },
      { id: 6, name: 'Pasta Arrabiata', price: '$15.00', description: 'Al dente penne in a spicy tomato sauce with garlic and basil.', emoji: '🍝' },
    ],
  },
  {
    id: 'desserts',
    title: 'Desserts',
    items: [
      { id: 7, name: 'Lemon Dessert', price: '$5.00', description: 'Grandma\u2019s secret lemon cake recipe \u2014 light, tangy and irresistible.', emoji: '🍋' },
      { id: 8, name: 'Baklava', price: '$4.50', description: 'Layered filo pastry with honey and crushed pistachios.', emoji: '🍯' },
      { id: 9, name: 'Tiramisu', price: '$6.00', description: 'Classic Italian tiramisu with espresso-soaked ladyfingers.', emoji: '☕' },
    ],
  },
  {
    id: 'drinks',
    title: 'Drinks',
    items: [
      { id: 10, name: 'Fresh Lemonade', price: '$3.50', description: 'House-squeezed lemonade with a hint of mint.', emoji: '🍋' },
      { id: 11, name: 'House Wine', price: '$8.00', description: 'Carefully selected red or white wine from Mediterranean vineyards.', emoji: '🍷' },
      { id: 12, name: 'Sparkling Water', price: '$2.00', description: 'Still or sparkling mineral water.', emoji: '💧' },
    ],
  },
];

function MenuPage() {
  return (
    <section className="menu-page" aria-labelledby="menu-heading">
      <div className="menu-page__inner">
        <div className="menu-page__hero">
          <h1 id="menu-heading" className="menu-page__title">Our Menu</h1>
          <p className="menu-page__subtitle">
            Traditional Mediterranean recipes with a modern Chicago twist.
          </p>
          <Link to="/booking" className="menu-page__reserve-btn">
            Reserve a Table
          </Link>
        </div>

        {MENU_SECTIONS.map((section) => (
          <article key={section.id} className="menu-section" aria-labelledby={`${section.id}-heading`}>
            <h2 id={`${section.id}-heading`} className="menu-section__title">{section.title}</h2>
            <ul className="menu-section__list">
              {section.items.map((item) => (
                <li key={item.id} className="menu-item">
                  <div className="menu-item__emoji" aria-hidden="true">{item.emoji}</div>
                  <div className="menu-item__body">
                    <div className="menu-item__header">
                      <h3 className="menu-item__name">{item.name}</h3>
                      <span className="menu-item__price">{item.price}</span>
                    </div>
                    <p className="menu-item__desc">{item.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

export default MenuPage;
