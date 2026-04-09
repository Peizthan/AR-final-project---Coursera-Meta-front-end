import { useLocation, Link } from 'react-router-dom';
import './ConfirmationPage.css';

function ConfirmationPage() {
  const location = useLocation();
  const booking = location.state?.booking;

  if (!booking) {
    return (
      <section className="confirmation" aria-labelledby="conf-heading">
        <div className="confirmation__inner">
          <h1 id="conf-heading" className="confirmation__title">No Booking Found</h1>
          <p>It looks like you landed here without making a reservation.</p>
          <Link to="/booking" className="confirmation__btn">
            Make a Reservation
          </Link>
        </div>
      </section>
    );
  }

  const {
    firstName, lastName, date, time, guests, occasion, email, specialRequests,
  } = booking;

  return (
    <section className="confirmation" aria-labelledby="conf-heading">
      <div className="confirmation__inner">
        <div className="confirmation__icon" aria-hidden="true">✅</div>
        <h1 id="conf-heading" className="confirmation__title">
          Booking Confirmed!
        </h1>
        <p className="confirmation__subtitle">
          Thank you, {firstName}! We look forward to seeing you at Little Lemon.
        </p>

        <div className="confirmation__card" aria-label="Booking summary">
          <h2 className="confirmation__card-title">Reservation Summary</h2>
          <dl className="confirmation__details">
            <div className="confirmation__row">
              <dt>Guest</dt>
              <dd>{firstName} {lastName}</dd>
            </div>
            <div className="confirmation__row">
              <dt>Date</dt>
              <dd>{new Date(date + 'T12:00:00').toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</dd>
            </div>
            <div className="confirmation__row">
              <dt>Time</dt>
              <dd>{time}</dd>
            </div>
            <div className="confirmation__row">
              <dt>Guests</dt>
              <dd>{guests}</dd>
            </div>
            <div className="confirmation__row">
              <dt>Occasion</dt>
              <dd>{occasion}</dd>
            </div>
            <div className="confirmation__row">
              <dt>Email</dt>
              <dd>{email}</dd>
            </div>
            {specialRequests && (
              <div className="confirmation__row">
                <dt>Special Requests</dt>
                <dd>{specialRequests}</dd>
              </div>
            )}
          </dl>
        </div>

        <p className="confirmation__notice">
          A confirmation email has been sent to <strong>{email}</strong>.
          If you need to modify your reservation, please call us at{' '}
          <a href="tel:+13125550199" className="confirmation__link">(312) 555-0199</a>.
        </p>

        <Link to="/" className="confirmation__btn">
          Back to Home
        </Link>
      </div>
    </section>
  );
}

export default ConfirmationPage;
