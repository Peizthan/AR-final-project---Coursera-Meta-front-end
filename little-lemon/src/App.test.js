import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the Little Lemon brand in the header', () => {
  render(<App />);
  expect(screen.getByRole('link', { name: /little lemon home/i })).toBeInTheDocument();
});

test('renders main navigation links', () => {
  render(<App />);
  // Header nav has role="navigation" with aria-label="Main navigation"
  const nav = screen.getByRole('navigation', { name: /main navigation/i });
  expect(nav).toBeInTheDocument();
  expect(nav).toHaveTextContent(/home/i);
  expect(nav).toHaveTextContent(/menu/i);
  expect(nav).toHaveTextContent(/reservations/i);
});

test('renders hero CTA button', () => {
  render(<App />);
  expect(screen.getByRole('link', { name: /reserve a table at little lemon/i })).toBeInTheDocument();
});

test('renders specials section heading', () => {
  render(<App />);
  expect(screen.getByText(/this week's specials/i)).toBeInTheDocument();
});

test('renders testimonials section', () => {
  render(<App />);
  expect(screen.getByText(/what our customers say/i)).toBeInTheDocument();
});
