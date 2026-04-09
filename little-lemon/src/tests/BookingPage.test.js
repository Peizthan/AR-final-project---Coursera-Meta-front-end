import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import BookingPage, { initializeTimes, updateTimes } from '../pages/BookingPage';

// Wrap component in router since it uses useNavigate
const renderBookingPage = () =>
  render(
    <MemoryRouter>
      <BookingPage />
    </MemoryRouter>
  );

// ── initializeTimes ──────────────────────────────────────────────
describe('initializeTimes', () => {
  test('returns an array of time strings', () => {
    const times = initializeTimes();
    expect(Array.isArray(times)).toBe(true);
    expect(times.length).toBeGreaterThan(0);
    times.forEach((t) => expect(typeof t).toBe('string'));
  });

  test('times are in HH:MM format', () => {
    const timeRegex = /^\d{2}:\d{2}$/;
    initializeTimes().forEach((t) => expect(t).toMatch(timeRegex));
  });
});

// ── updateTimes ──────────────────────────────────────────────────
describe('updateTimes', () => {
  test('returns same state for unknown action type', () => {
    const state = ['18:00', '19:00'];
    expect(updateTimes(state, { type: 'UNKNOWN' })).toBe(state);
  });

  test('returns reduced slots for a Friday (busy night)', () => {
    // Find a Friday: new Date('2024-01-05') is a Friday
    const result = updateTimes([], { type: 'SET_DATE', date: '2024-01-05' });
    const defaultTimes = initializeTimes();
    expect(result.length).toBeLessThan(defaultTimes.length);
  });

  test('returns full slots for a weekday (non-peak)', () => {
    // 2024-01-08 is a Monday
    const result = updateTimes([], { type: 'SET_DATE', date: '2024-01-08' });
    expect(result).toEqual(initializeTimes());
  });
});

// ── BookingPage rendering ─────────────────────────────────────────
describe('BookingPage', () => {
  test('renders heading', () => {
    renderBookingPage();
    expect(screen.getByRole('heading', { name: /reserve a table/i })).toBeInTheDocument();
  });

  test('renders all required form fields', () => {
    renderBookingPage();
    expect(screen.getByLabelText(/date/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/time/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/number of guests/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/occasion/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/first name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/last name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email address/i)).toBeInTheDocument();
  });

  test('renders submit button', () => {
    renderBookingPage();
    expect(screen.getByRole('button', { name: /make your reservation/i })).toBeInTheDocument();
  });

  test('shows validation errors when submitted with empty fields', () => {
    renderBookingPage();
    fireEvent.click(screen.getByRole('button', { name: /make your reservation/i }));
    expect(screen.getByText(/please select a date/i)).toBeInTheDocument();
    expect(screen.getByText(/please select a time/i)).toBeInTheDocument();
    expect(screen.getByText(/please enter between 1 and 10 guests/i)).toBeInTheDocument();
    expect(screen.getByText(/please select an occasion/i)).toBeInTheDocument();
    expect(screen.getByText(/first name is required/i)).toBeInTheDocument();
    expect(screen.getByText(/last name is required/i)).toBeInTheDocument();
    expect(screen.getByText(/please enter a valid email address/i)).toBeInTheDocument();
  });

  test('clears individual error when field is corrected', () => {
    renderBookingPage();
    fireEvent.click(screen.getByRole('button', { name: /make your reservation/i }));
    expect(screen.getByText(/first name is required/i)).toBeInTheDocument();

    fireEvent.change(screen.getByLabelText(/first name/i), { target: { value: 'Alice' } });
    expect(screen.queryByText(/first name is required/i)).not.toBeInTheDocument();
  });
});
