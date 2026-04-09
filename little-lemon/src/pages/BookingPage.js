import { useState, useReducer } from 'react';
import { useNavigate } from 'react-router-dom';
import './BookingPage.css';

/* ── Helpers ── */
export function initializeTimes() {
  return [
    '17:00', '17:30', '18:00', '18:30', '19:00',
    '19:30', '20:00', '20:30', '21:00', '21:30',
  ];
}

export function updateTimes(state, action) {
  if (action.type === 'SET_DATE') {
    // Simulate different availability based on day-of-week
    const day = new Date(action.date).getDay();
    if (day === 5 || day === 6) {
      // Friday / Saturday – popular nights, fewer slots
      return ['18:00', '19:00', '20:00', '21:00'];
    }
    return initializeTimes();
  }
  return state;
}

/* ── Validation helpers ── */
function getTodayISO() {
  return new Date().toISOString().split('T')[0];
}

function validate(fields) {
  const errors = {};
  if (!fields.date) {
    errors.date = 'Please select a date.';
  } else if (fields.date < getTodayISO()) {
    errors.date = 'Date cannot be in the past.';
  }
  if (!fields.time) errors.time = 'Please select a time.';
  const guests = Number(fields.guests);
  if (!fields.guests || isNaN(guests) || guests < 1 || guests > 10) {
    errors.guests = 'Please enter between 1 and 10 guests.';
  }
  if (!fields.occasion) errors.occasion = 'Please select an occasion.';
  if (!fields.firstName.trim()) errors.firstName = 'First name is required.';
  if (!fields.lastName.trim()) errors.lastName = 'Last name is required.';
  const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!fields.email.trim() || !emailRe.test(fields.email)) {
    errors.email = 'Please enter a valid email address.';
  }
  return errors;
}

/* ── Component ── */
function BookingPage() {
  const navigate = useNavigate();
  const [availableTimes, dispatch] = useReducer(updateTimes, null, initializeTimes);

  const [fields, setFields] = useState({
    date: '',
    time: '',
    guests: '',
    occasion: '',
    firstName: '',
    lastName: '',
    email: '',
    specialRequests: '',
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFields((prev) => ({ ...prev, [name]: value }));
    if (name === 'date') {
      dispatch({ type: 'SET_DATE', date: value });
      setFields((prev) => ({ ...prev, date: value, time: '' }));
    }
    // Clear individual field error on change
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    const validationErrors = validate(fields);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    // Navigate to confirmation with booking details
    navigate('/confirmation', { state: { booking: fields } });
  };

  const fieldError = (name) =>
    submitted && errors[name] ? (
      <span className="booking__error" role="alert" aria-live="polite">
        {errors[name]}
      </span>
    ) : null;

  return (
    <section className="booking" aria-labelledby="booking-heading">
      <div className="booking__inner">
        <h1 id="booking-heading" className="booking__title">Reserve a Table</h1>
        <p className="booking__subtitle">
          We'd love to have you! Fill in the details below and we'll confirm your reservation.
        </p>

        <form
          className="booking__form"
          onSubmit={handleSubmit}
          noValidate
          aria-label="Table reservation form"
        >
          {/* ── Date & Time ── */}
          <fieldset className="booking__fieldset">
            <legend className="booking__legend">When would you like to visit?</legend>

            <div className="booking__field">
              <label htmlFor="date" className="booking__label">
                Date <span aria-hidden="true" className="booking__required">*</span>
              </label>
              <input
                type="date"
                id="date"
                name="date"
                className={`booking__input${submitted && errors.date ? ' booking__input--error' : ''}`}
                value={fields.date}
                min={getTodayISO()}
                onChange={handleChange}
                aria-required="true"
                aria-describedby={submitted && errors.date ? 'date-error' : undefined}
              />
              <span id="date-error">{fieldError('date')}</span>
            </div>

            <div className="booking__field">
              <label htmlFor="time" className="booking__label">
                Time <span aria-hidden="true" className="booking__required">*</span>
              </label>
              <select
                id="time"
                name="time"
                className={`booking__select${submitted && errors.time ? ' booking__input--error' : ''}`}
                value={fields.time}
                onChange={handleChange}
                aria-required="true"
                aria-describedby={submitted && errors.time ? 'time-error' : undefined}
              >
                <option value="">-- Select a time --</option>
                {availableTimes.map((t) => (
                  <option key={t} value={t}>{t}</option>
                ))}
              </select>
              <span id="time-error">{fieldError('time')}</span>
            </div>
          </fieldset>

          {/* ── Party Details ── */}
          <fieldset className="booking__fieldset">
            <legend className="booking__legend">Party details</legend>

            <div className="booking__field">
              <label htmlFor="guests" className="booking__label">
                Number of Guests <span aria-hidden="true" className="booking__required">*</span>
              </label>
              <input
                type="number"
                id="guests"
                name="guests"
                className={`booking__input${submitted && errors.guests ? ' booking__input--error' : ''}`}
                value={fields.guests}
                min="1"
                max="10"
                placeholder="1–10"
                onChange={handleChange}
                aria-required="true"
                aria-describedby={submitted && errors.guests ? 'guests-error' : undefined}
              />
              <span id="guests-error">{fieldError('guests')}</span>
            </div>

            <div className="booking__field">
              <label htmlFor="occasion" className="booking__label">
                Occasion <span aria-hidden="true" className="booking__required">*</span>
              </label>
              <select
                id="occasion"
                name="occasion"
                className={`booking__select${submitted && errors.occasion ? ' booking__input--error' : ''}`}
                value={fields.occasion}
                onChange={handleChange}
                aria-required="true"
                aria-describedby={submitted && errors.occasion ? 'occasion-error' : undefined}
              >
                <option value="">-- Select an occasion --</option>
                <option value="Birthday">Birthday</option>
                <option value="Anniversary">Anniversary</option>
                <option value="Date">Date Night</option>
                <option value="Business">Business Meal</option>
                <option value="Other">Other</option>
              </select>
              <span id="occasion-error">{fieldError('occasion')}</span>
            </div>
          </fieldset>

          {/* ── Guest Info ── */}
          <fieldset className="booking__fieldset">
            <legend className="booking__legend">Your information</legend>

            <div className="booking__row">
              <div className="booking__field">
                <label htmlFor="firstName" className="booking__label">
                  First Name <span aria-hidden="true" className="booking__required">*</span>
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  className={`booking__input${submitted && errors.firstName ? ' booking__input--error' : ''}`}
                  value={fields.firstName}
                  onChange={handleChange}
                  aria-required="true"
                  aria-describedby={submitted && errors.firstName ? 'firstName-error' : undefined}
                  autoComplete="given-name"
                />
                <span id="firstName-error">{fieldError('firstName')}</span>
              </div>

              <div className="booking__field">
                <label htmlFor="lastName" className="booking__label">
                  Last Name <span aria-hidden="true" className="booking__required">*</span>
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  className={`booking__input${submitted && errors.lastName ? ' booking__input--error' : ''}`}
                  value={fields.lastName}
                  onChange={handleChange}
                  aria-required="true"
                  aria-describedby={submitted && errors.lastName ? 'lastName-error' : undefined}
                  autoComplete="family-name"
                />
                <span id="lastName-error">{fieldError('lastName')}</span>
              </div>
            </div>

            <div className="booking__field">
              <label htmlFor="email" className="booking__label">
                Email Address <span aria-hidden="true" className="booking__required">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className={`booking__input${submitted && errors.email ? ' booking__input--error' : ''}`}
                value={fields.email}
                onChange={handleChange}
                aria-required="true"
                aria-describedby={submitted && errors.email ? 'email-error' : undefined}
                autoComplete="email"
                placeholder="you@example.com"
              />
              <span id="email-error">{fieldError('email')}</span>
            </div>

            <div className="booking__field">
              <label htmlFor="specialRequests" className="booking__label">
                Special Requests{' '}
                <span className="booking__optional">(optional)</span>
              </label>
              <textarea
                id="specialRequests"
                name="specialRequests"
                className="booking__textarea"
                value={fields.specialRequests}
                onChange={handleChange}
                rows={3}
                placeholder="Dietary requirements, seating preferences, etc."
              />
            </div>
          </fieldset>

          <p className="booking__required-note">
            <span aria-hidden="true" className="booking__required">*</span> Required fields
          </p>

          <button type="submit" className="booking__submit">
            Make Your Reservation
          </button>
        </form>
      </div>
    </section>
  );
}

export default BookingPage;
