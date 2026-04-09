# AR Final Project – Coursera Meta Front-End Developer Capstone

## Little Lemon Restaurant 🍋

A responsive React web application built as the capstone project for the **Meta Front-End Developer Professional Certificate** on Coursera. Little Lemon is a fictional family-owned Mediterranean restaurant based in Chicago.

---

## Features

- 🏠 **Homepage** – Hero banner, featured weekly specials, customer testimonials, and an about section
- 📋 **Menu Page** – Full menu organised by category (starters, mains, desserts, drinks)
- 📅 **Reservations / Booking Page** – Table booking form with full client-side validation
- ✅ **Confirmation Page** – Booking summary shown after a successful reservation
- 📱 **Responsive Design** – Mobile-first layout using CSS Grid, Flexbox, and media queries
- ♿ **Accessibility** – Semantic HTML, ARIA labels, keyboard-navigable navigation, and visible focus rings
- 🔍 **SEO / Open Graph** – Meta description, theme colour, and OG tags in `index.html`
- 🧪 **Unit Tests** – 15 tests covering the app render, `initializeTimes`, `updateTimes`, form validation, and more

---

## Tech Stack

| Technology | Purpose |
|---|---|
| React 19 | UI library |
| React Router DOM v7 | Client-side routing |
| React Testing Library + Jest | Unit testing |
| CSS Modules (plain CSS) | Component-scoped styles |
| Create React App | Build toolchain |

---

## Getting Started

### Prerequisites

- Node.js ≥ 18
- npm ≥ 9

### Installation

```bash
cd little-lemon
npm install
```

### Running the Development Server

```bash
npm start
```

Opens [http://localhost:3000](http://localhost:3000) in your browser.

### Running Tests

```bash
npm test
```

### Building for Production

```bash
npm run build
```

The optimised production bundle is output to `little-lemon/build/`.

---

## Project Structure

```
little-lemon/
├── public/
│   └── index.html          # Meta tags, Open Graph
├── src/
│   ├── components/
│   │   ├── Header.js / .css    # Sticky nav with hamburger menu
│   │   ├── Hero.js / .css      # Landing banner with CTA
│   │   ├── Specials.js / .css  # Featured weekly specials
│   │   ├── Testimonials.js / .css
│   │   ├── About.js / .css
│   │   └── Footer.js / .css
│   ├── pages/
│   │   ├── HomePage.js
│   │   ├── BookingPage.js / .css   # Reservation form + validation
│   │   ├── ConfirmationPage.js / .css
│   │   └── MenuPage.js / .css
│   ├── tests/
│   │   └── BookingPage.test.js
│   ├── App.js               # Router setup
│   ├── App.test.js
│   └── index.css            # Global reset & base styles
└── package.json
```

---

## Key Design Decisions

- **`useReducer` for available times** – `initializeTimes` and `updateTimes` are exported pure functions, making them straightforward to unit test independently of the component.
- **Controlled form with validation** – All form fields are controlled components; errors are only shown after the first submit attempt and cleared field-by-field as the user corrects them.
- **Semantic HTML** – `<header>`, `<main>`, `<nav>`, `<section>`, `<article>`, `<footer>`, `<address>`, `<dl>` and `<fieldset>` are used throughout.

---

## License

This project was created for educational purposes as part of the Meta Front-End Developer Professional Certificate.

