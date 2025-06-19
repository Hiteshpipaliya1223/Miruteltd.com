// src/components/TimeSlotBooking.jsx
import React, { useState, useEffect } from 'react';

const TimeSlotBooking = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const [availableSlots, setAvailableSlots] = useState([]);
  const [selectedSlotId, setSelectedSlotId] = useState('');
  const [customerName, setCustomerName] = useState('');
  const [customerEmail, setCustomerEmail] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [serviceType, setServiceType] = useState('stitching'); // Default service type
  const [notes, setNotes] = useState('');
  const [bookingOption, setBookingOption] = useState('drop-off'); // 'drop-off' or 'pickup'
  const [pickupAddress, setPickupAddress] = useState('');
  const [numItems, setNumItems] = useState(''); // Number of items for pickup
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  // Function to get today's date in YYYY-MM-DD format
  const getTodayDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  useEffect(() => {
    // Set initial date to today
    setSelectedDate(getTodayDate());
  }, []);

  useEffect(() => {
    const fetchSlots = async () => {
      if (!selectedDate) {
        setAvailableSlots([]);
        return;
      }

      setLoading(true);
      setError('');
      setMessage('');
      try {
        const response = await fetch(`/.netlify/functions/getAvailableSlots?date=${selectedDate}`);
        const data = await response.json();

        if (response.ok) {
          setAvailableSlots(data);
        } else {
          setError(data.error || 'Failed to fetch available slots.');
          setAvailableSlots([]);
        }
      } catch (err) {
        console.error('Error fetching slots:', err);
        setError('Network error or server unreachable. Failed to fetch slots.');
        setAvailableSlots([]);
      } finally {
        setLoading(false);
      }
    };

    fetchSlots();
  }, [selectedDate]); // Refetch slots when selectedDate changes

  const handleBookingSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setMessage('');

    if (!selectedSlotId) {
      setError('Please select a time slot.');
      setLoading(false);
      return;
    }
    if (!customerName || !customerEmail || !customerPhone) {
      setError('Please fill in all required customer details.');
      setLoading(false);
      return;
    }
    if (bookingOption === 'pickup' && (!pickupAddress || !numItems)) {
        setError('Please provide pickup address and number of items.');
        setLoading(false);
        return;
    }

    try {
      const response = await fetch('/.netlify/functions/bookSlot', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          slotId: selectedSlotId,
          customerName,
          customerEmail,
          customerPhone,
          serviceType,
          notes,
          bookingOption, // 'drop-off' or 'pickup'
          pickupDetails: bookingOption === 'pickup' ? { address: pickupAddress, numItems: numItems } : undefined,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage('Booking successful! We will contact you shortly to confirm details.');
        // Optionally clear form or refetch slots
        setAvailableSlots(prevSlots => prevSlots.filter(slot => slot._id !== selectedSlotId));
        setSelectedSlotId('');
        setCustomerName('');
        setCustomerEmail('');
        setCustomerPhone('');
        setNotes('');
        setPickupAddress('');
        setNumItems('');
      } else {
        setError(data.error || 'Failed to book slot.');
      }
    } catch (err) {
      console.error('Error booking slot:', err);
      setError('Network error or server unreachable. Failed to book slot.');
    } finally {
      setLoading(false);
    }
  };

  const today = getTodayDate();

  return (
    <div style={bookingStyles.container}>
      <h2 style={bookingStyles.heading}>Book Your Service Slot</h2>

      {message && <p style={bookingStyles.successMessage}>{message}</p>}
      {error && <p style={bookingStyles.errorMessage}>{error}</p>}

      <div style={bookingStyles.section}>
        <label htmlFor="bookingDate" style={bookingStyles.label}>Select Date:</label>
        <input
          type="date"
          id="bookingDate"
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
          min={today} // Prevent selecting past dates
          style={bookingStyles.input}
        />
      </div>

      <div style={bookingStyles.section}>
        <h3 style={bookingStyles.subHeading}>Available Time Slots for {selectedDate}:</h3>
        {loading ? (
          <p>Loading slots...</p>
        ) : availableSlots.length === 0 ? (
          <p>No available slots for this date. Please choose another date.</p>
        ) : (
          <div style={bookingStyles.slotGrid}>
            {availableSlots.map((slot) => (
              <button
                key={slot._id}
                style={{
                  ...bookingStyles.slotButton,
                  ...(selectedSlotId === slot._id ? bookingStyles.slotButtonSelected : {}),
                  ...(slot.isBooked ? bookingStyles.slotButtonBooked : {})
                }}
                onClick={() => !slot.isBooked && setSelectedSlotId(slot._id)}
                disabled={slot.isBooked}
              >
                {slot.time}
              </button>
            ))}
          </div>
        )}
      </div>

      {selectedSlotId && (
        <form onSubmit={handleBookingSubmit} style={bookingStyles.form}>
          <h3 style={bookingStyles.subHeading}>Your Details for Selected Slot: {
            availableSlots.find(s => s._id === selectedSlotId)?.time
          } on {selectedDate}</h3>

          <label htmlFor="customerName" style={bookingStyles.label}>Your Name:</label>
          <input
            type="text"
            id="customerName"
            value={customerName}
            onChange={(e) => setCustomerName(e.target.value)}
            required
            style={bookingStyles.input}
          />

          <label htmlFor="customerEmail" style={bookingStyles.label}>Your Email:</label>
          <input
            type="email"
            id="customerEmail"
            value={customerEmail}
            onChange={(e) => setCustomerEmail(e.target.value)}
            required
            style={bookingStyles.input}
          />

          <label htmlFor="customerPhone" style={bookingStyles.label}>Your Phone:</label>
          <input
            type="tel"
            id="customerPhone"
            value={customerPhone}
            onChange={(e) => setCustomerPhone(e.target.value)}
            required
            style={bookingStyles.input}
          />

          <label htmlFor="serviceType" style={bookingStyles.label}>Service Type:</label>
          <select
            id="serviceType"
            value={serviceType}
            onChange={(e) => setServiceType(e.target.value)}
            style={bookingStyles.input}
          >
            <option value="stitching">Custom Stitching</option>
            <option value="alterations">General Alterations</option>
            <option value="repair">Repair</option>
            <option value="consultation">Consultation</option>
            {/* Add more service types as needed */}
          </select>

          <label htmlFor="notes" style={bookingStyles.label}>Additional Notes (Optional):</label>
          <textarea
            id="notes"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            rows="4"
            style={bookingStyles.textarea}
          ></textarea>

          <div style={bookingStyles.section}>
            <h3 style={bookingStyles.subHeading}>Service Option:</h3>
            <div style={bookingStyles.radioGroup}>
              <label style={bookingStyles.radioLabel}>
                <input
                  type="radio"
                  value="drop-off"
                  checked={bookingOption === 'drop-off'}
                  onChange={(e) => setBookingOption(e.target.value)}
                  style={bookingStyles.radioInput}
                />
                Drop off at our address
              </label>
              <label style={bookingStyles.radioLabel}>
                <input
                  type="radio"
                  value="pickup"
                  checked={bookingOption === 'pickup'}
                  onChange={(e) => setBookingOption(e.target.value)}
                  style={bookingStyles.radioInput}
                />
                Pickup service (within 5 miles for many clothes)
              </label>
            </div>

            {bookingOption === 'pickup' && (
              <div style={bookingStyles.pickupDetails}>
                <label htmlFor="pickupAddress" style={bookingStyles.label}>Pickup Address:</label>
                <textarea
                  id="pickupAddress"
                  value={pickupAddress}
                  onChange={(e) => setPickupAddress(e.target.value)}
                  required
                  rows="3"
                  style={bookingStyles.textarea}
                ></textarea>
                <label htmlFor="numItems" style={bookingStyles.label}>Number of Items (approx.):</label>
                <input
                  type="number"
                  id="numItems"
                  value={numItems}
                  onChange={(e) => setNumItems(e.target.value)}
                  required
                  min="1"
                  style={bookingStyles.input}
                />
                <p style={bookingStyles.infoText}>
                  *Please note: Pickup service is subject to confirmation based on your location and number of items. We will contact you.
                </p>
              </div>
            )}
          </div>

          <button type="submit" disabled={loading} style={bookingStyles.submitButton}>
            {loading ? 'Booking...' : 'Confirm Booking'}
          </button>
        </form>
      )}
    </div>
  );
};

const bookingStyles = {
  container: {
    fontFamily: 'Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Open Sans, Helvetica Neue, sans-serif',
    padding: '30px',
    borderRadius: '10px',
    backgroundColor: 'var(--white)',
    boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
    maxWidth: '800px',
    margin: '40px auto',
    color: 'var(--text-color)',
  },
  heading: {
    fontSize: '2.5em',
    color: 'var(--primary-dark)',
    textAlign: 'center',
    marginBottom: '30px',
  },
  subHeading: {
    fontSize: '1.5em',
    color: 'var(--secondary-dark)',
    marginTop: '25px',
    marginBottom: '15px',
  },
  section: {
    marginBottom: '25px',
    borderBottom: '1px solid var(--border-color)',
    paddingBottom: '20px',
  },
  label: {
    display: 'block',
    marginBottom: '8px',
    fontWeight: 'bold',
    color: 'var(--secondary-dark)',
    fontSize: '0.95em',
  },
  input: {
    width: 'calc(100% - 22px)',
    padding: '12px 10px',
    marginBottom: '15px',
    border: '1px solid var(--border-color)',
    borderRadius: '6px',
    fontSize: '1em',
    boxSizing: 'border-box',
    transition: 'border-color 0.3s ease',
  },
  textarea: {
    width: 'calc(100% - 22px)',
    padding: '12px 10px',
    marginBottom: '15px',
    border: '1px solid var(--border-color)',
    borderRadius: '6px',
    fontSize: '1em',
    boxSizing: 'border-box',
    resize: 'vertical',
    minHeight: '80px',
    transition: 'border-color 0.3s ease',
  },
  slotGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))',
    gap: '15px',
    marginBottom: '20px',
  },
  slotButton: {
    backgroundColor: 'var(--light-bg)',
    color: 'var(--secondary-dark)',
    border: '1px solid var(--border-color)',
    padding: '12px 15px',
    borderRadius: '8px',
    cursor: 'pointer',
    fontSize: '1em',
    fontWeight: 'bold',
    transition: 'background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease',
    '&:hover': {
      backgroundColor: 'var(--primary-light)',
      color: 'var(--primary-dark)',
    },
    '&:disabled': {
      backgroundColor: 'var(--gray-light)',
      color: 'var(--gray-dark)',
      cursor: 'not-allowed',
      opacity: 0.7,
    },
  },
  slotButtonSelected: {
    backgroundColor: 'var(--primary-blue)',
    color: 'var(--white)',
    borderColor: 'var(--primary-blue)',
  },
  slotButtonBooked: {
    backgroundColor: 'var(--gray-light)',
    color: 'var(--gray-dark)',
    borderColor: 'var(--gray-dark)',
    cursor: 'not-allowed',
  },
  form: {
    marginTop: '30px',
    paddingTop: '20px',
    borderTop: '1px solid var(--border-color)',
  },
  radioGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    marginBottom: '20px',
  },
  radioLabel: {
    display: 'flex',
    alignItems: 'center',
    fontSize: '1em',
    color: 'var(--text-color)',
    cursor: 'pointer',
  },
  radioInput: {
    marginRight: '10px',
    transform: 'scale(1.2)',
  },
  pickupDetails: {
    backgroundColor: 'var(--light-bg)',
    border: '1px dashed var(--border-color)',
    borderRadius: '8px',
    padding: '20px',
    marginTop: '15px',
  },
  infoText: {
    fontSize: '0.9em',
    color: 'var(--gray-dark)',
    fontStyle: 'italic',
    marginTop: '10px',
  },
  submitButton: {
    backgroundColor: 'var(--accent-pink)',
    color: 'var(--white)',
    border: 'none',
    padding: '15px 30px',
    borderRadius: '8px',
    fontSize: '1.2em',
    fontWeight: 'bold',
    cursor: 'pointer',
    width: '100%',
    transition: 'background-color 0.3s ease',
    '&:hover': {
      backgroundColor: 'var(--accent-pink-dark)',
    },
    '&:disabled': {
      backgroundColor: 'var(--gray-dark)',
      cursor: 'not-allowed',
    },
  },
  errorMessage: {
    color: 'var(--red)',
    backgroundColor: 'var(--red-light)',
    border: '1px solid var(--red)',
    padding: '10px',
    borderRadius: '5px',
    marginBottom: '20px',
    textAlign: 'center',
  },
  successMessage: {
    color: 'var(--green)',
    backgroundColor: 'var(--green-light)',
    border: '1px solid var(--green)',
    padding: '10px',
    borderRadius: '5px',
    marginBottom: '20px',
    textAlign: 'center',
  },
};

export default TimeSlotBooking;