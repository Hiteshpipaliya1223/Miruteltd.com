// src/components/TimeSlotBooking.jsx
import React, { useState, useEffect } from 'react';

const TimeSlotBooking = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const [availableSlots, setAvailableSlots] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [bookingMessage, setBookingMessage] = useState('');

  // Form state for booking
  const [customerName, setCustomerName] = useState('');
  const [customerEmail, setCustomerEmail] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [serviceType, setServiceType] = useState('Stitching Consultation');
  const [notes, setNotes] = useState('');
  const [selectedSlotId, setSelectedSlotId] = useState(null);

  // Function to format date to YYYY-MM-DD
  const formatDate = (date) => {
    const d = new Date(date);
    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  // Get today's date in YYYY-MM-DD format for initial selection
  useEffect(() => {
    const today = new Date();
    setSelectedDate(formatDate(today));
  }, []);

  // Fetch slots whenever the selectedDate changes
  useEffect(() => {
    if (selectedDate) {
      fetchAvailableSlots();
    }
  }, [selectedDate]); // Dependency array includes selectedDate

  const fetchAvailableSlots = async () => {
    setLoading(true);
    setError(null);
    setAvailableSlots([]);
    setBookingMessage(''); // Clear previous booking messages

    try {
      const response = await fetch(`/.netlify/functions/getAvailableSlots?date=${selectedDate}`);
      
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to fetch slots.');
      }

      const data = await response.json();
      setAvailableSlots(data);
    } catch (err) {
      console.error("Error fetching slots:", err);
      setError(err.message || 'Could not load slots.');
    } finally {
      setLoading(false);
    }
  };

  const handleBookingSubmit = async (e) => {
    e.preventDefault();
    setBookingMessage('');
    setError(null);

    if (!selectedSlotId) {
      setError('Please select a time slot.');
      return;
    }
    if (!customerName || !customerEmail || !serviceType) {
      setError('Name, Email, and Service Type are required.');
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(`/.netlify/functions/bookSlot`, {
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
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Booking failed. Please try again.');
      }

      const data = await response.json();
      setBookingMessage(data.message || 'Slot booked successfully!');
      // Refresh available slots after successful booking
      fetchAvailableSlots(); 
      // Clear form fields
      setCustomerName('');
      setCustomerEmail('');
      setCustomerPhone('');
      setServiceType('Stitching Consultation');
      setNotes('');
      setSelectedSlotId(null);

    } catch (err) {
      console.error("Error booking slot:", err);
      setError(err.message || 'An unexpected error occurred during booking.');
    } finally {
      setLoading(false);
    }
  };

  const handleSlotSelection = (slotId) => {
    setSelectedSlotId(slotId);
    setBookingMessage(''); // Clear message when new slot is selected
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Book Your Service Slot</h2>

      {/* Date Picker */}
      <div style={styles.formGroup}>
        <label htmlFor="bookingDate" style={styles.label}>Select Date:</label>
        <input
          type="date"
          id="bookingDate"
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
          style={styles.input}
        />
      </div>

      {loading && <p style={styles.message}>Loading available slots...</p>}
      {error && <p style={styles.errorMessage}>Error: {error}</p>}
      {bookingMessage && <p style={styles.successMessage}>{bookingMessage}</p>}

      {/* Available Slots Display */}
      {!loading && !error && availableSlots.length > 0 && (
        <div style={styles.slotsContainer}>
          <h3 style={styles.subHeading}>Available Time Slots for {selectedDate}:</h3>
          <div style={styles.slotGrid}>
            {availableSlots.map((slot) => (
              <button
                key={slot._id}
                onClick={() => handleSlotSelection(slot._id)}
                style={{
                  ...styles.slotButton,
                  ...(selectedSlotId === slot._id ? styles.slotButtonSelected : {}),
                }}
              >
                {slot.time}
              </button>
            ))}
          </div>
        </div>
      )}

      {!loading && !error && availableSlots.length === 0 && selectedDate && (
        <p style={styles.message}>No available slots for {selectedDate}. Please choose another date.</p>
      )}

      {/* Booking Form */}
      {selectedSlotId && (
        <form onSubmit={handleBookingSubmit} style={styles.bookingForm}>
          <h3 style={styles.subHeading}>Book Selected Slot ({availableSlots.find(s => s._id === selectedSlotId)?.time} on {selectedDate})</h3>
          
          <div style={styles.formGroup}>
            <label htmlFor="customerName" style={styles.label}>Your Name: <span style={styles.required}>*</span></label>
            <input
              type="text"
              id="customerName"
              value={customerName}
              onChange={(e) => setCustomerName(e.target.value)}
              required
              style={styles.input}
            />
          </div>

          <div style={styles.formGroup}>
            <label htmlFor="customerEmail" style={styles.label}>Your Email: <span style={styles.required}>*</span></label>
            <input
              type="email"
              id="customerEmail"
              value={customerEmail}
              onChange={(e) => setCustomerEmail(e.target.value)}
              required
              style={styles.input}
            />
          </div>

          <div style={styles.formGroup}>
            <label htmlFor="customerPhone" style={styles.label}>Your Phone:</label>
            <input
              type="tel"
              id="customerPhone"
              value={customerPhone}
              onChange={(e) => setCustomerPhone(e.target.value)}
              style={styles.input}
            />
          </div>

          <div style={styles.formGroup}>
            <label htmlFor="serviceType" style={styles.label}>Service Type: <span style={styles.required}>*</span></label>
            <select
              id="serviceType"
              value={serviceType}
              onChange={(e) => setServiceType(e.target.value)}
              required
              style={styles.select}
            >
              <option value="Stitching Consultation">Stitching Consultation</option>
              <option value="Basic Alteration">Basic Alteration</option>
              <option value="Complex Alteration">Complex Alteration</option>
              <option value="Custom Design">Custom Design</option>
            </select>
          </div>

          <div style={styles.formGroup}>
            <label htmlFor="notes" style={styles.label}>Notes (optional):</label>
            <textarea
              id="notes"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              rows="4"
              style={styles.textarea}
            />
          </div>

          <button type="submit" disabled={loading} style={styles.submitButton}>
            {loading ? 'Booking...' : 'Confirm Booking'}
          </button>
        </form>
      )}
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: '#ffffff',
    padding: '30px',
    borderRadius: '8px',
    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
    maxWidth: '700px',
    margin: '40px auto',
    fontFamily: 'Arial, sans-serif',
  },
  heading: {
    textAlign: 'center',
    color: '#333',
    marginBottom: '30px',
    fontSize: '2em',
  },
  subHeading: {
    color: '#555',
    marginBottom: '20px',
    fontSize: '1.4em',
    borderBottom: '1px solid #eee',
    paddingBottom: '10px',
  },
  formGroup: {
    marginBottom: '20px',
  },
  label: {
    display: 'block',
    marginBottom: '8px',
    fontWeight: 'bold',
    color: '#666',
  },
  required: {
    color: 'red',
    marginLeft: '5px',
  },
  input: {
    width: '100%',
    padding: '12px',
    border: '1px solid #ddd',
    borderRadius: '5px',
    fontSize: '1em',
    boxSizing: 'border-box',
  },
  select: {
    width: '100%',
    padding: '12px',
    border: '1px solid #ddd',
    borderRadius: '5px',
    fontSize: '1em',
    backgroundColor: '#fff',
    boxSizing: 'border-box',
  },
  textarea: {
    width: '100%',
    padding: '12px',
    border: '1px solid #ddd',
    borderRadius: '5px',
    fontSize: '1em',
    minHeight: '80px',
    boxSizing: 'border-box',
    resize: 'vertical',
  },
  submitButton: {
    width: '100%',
    padding: '15px 20px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    fontSize: '1.1em',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
  submitButtonHover: {
    backgroundColor: '#0056b3',
  },
  slotsContainer: {
    marginTop: '30px',
    borderTop: '1px solid #eee',
    paddingTop: '20px',
  },
  slotGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))',
    gap: '15px',
    marginTop: '15px',
  },
  slotButton: {
    padding: '10px 15px',
    border: '1px solid #007bff',
    borderRadius: '5px',
    backgroundColor: '#e6f2ff',
    color: '#007bff',
    fontSize: '1em',
    cursor: 'pointer',
    transition: 'background-color 0.2s ease, border-color 0.2s ease',
  },
  slotButtonHover: {
    backgroundColor: '#cce0ff',
  },
  slotButtonSelected: {
    backgroundColor: '#007bff',
    color: 'white',
    borderColor: '#0056b3',
  },
  message: {
    textAlign: 'center',
    color: '#666',
    marginTop: '20px',
    fontSize: '1.1em',
  },
  errorMessage: {
    textAlign: 'center',
    color: 'red',
    marginTop: '20px',
    fontSize: '1.1em',
    fontWeight: 'bold',
  },
  successMessage: {
    textAlign: 'center',
    color: 'green',
    marginTop: '20px',
    fontSize: '1.1em',
    fontWeight: 'bold',
  },
};

// Add hover styles dynamically
styles.submitButton[':hover'] = styles.submitButtonHover;
styles.slotButton[':hover'] = styles.slotButtonHover;


export default TimeSlotBooking;