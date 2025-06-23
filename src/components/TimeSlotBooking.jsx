import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './TimeSlotBooking.css';

const TimeSlotBooking = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [availableTimeSlots, setAvailableTimeSlots] = useState([]);
    const [selectedTime, setSelectedTime] = useState(null);

    // Function to generate time slots based on the selected date
    const generateTimeSlots = (date) => {
        const slots = [];
        const dayOfWeek = date.getDay(); // 0 = Sunday, 1 = Monday, ..., 6 = Saturday

        let startHour, endHour;

        // Weekday (Monday = 1, Tuesday = 2, Wednesday = 3, Thursday = 4, Friday = 5)
        if (dayOfWeek >= 1 && dayOfWeek <= 5) {
            startHour = 17; // 5 PM
            endHour = 22;   // 10 PM
        }
        // Weekend (Saturday = 6, Sunday = 0)
        else {
            startHour = 9;  // 9 AM
            endHour = 22;   // 10 PM
        }

        // --- MODIFIED: Generate slots in 1-hour intervals ---
        for (let hour = startHour; hour <= endHour; hour++) {
            const time = `${String(hour).padStart(2, '0')}:00`; // Always XX:00
            slots.push(time);
        }
        // -----------------------------------------------------

        setAvailableTimeSlots(slots);
    };

    // Effect to re-generate slots whenever the selectedDate changes
    useEffect(() => {
        generateTimeSlots(selectedDate);
    }, [selectedDate]);

    // Handler for date changes from the calendar
    const handleDateChange = (date) => {
        setSelectedDate(date);
        setSelectedTime(null); // Reset selected time when the date changes
    };

    // Handler for time slot selection
    const handleTimeSelect = (time) => {
        setSelectedTime(time);
    };

    // Handler for the "Book Now" button
    const handleSubmit = () => {
        if (selectedDate && selectedTime) {
            alert(`You have selected a service slot on ${selectedDate.toDateString()} at ${selectedTime}. (This would be sent to your backend!)`);
            // In a real application, you would send this selectedDate and selectedTime
            // to your backend API here, e.g., using fetch or axios.
        } else {
            alert("Please select both a date and a time slot before booking.");
        }
    };

    return (
        <div className="time-slot-booking-container">
            <h2>Book Your Service Slot</h2>

            <div className="calendar-section">
                <p>Select Date:</p>
                <Calendar
                    onChange={handleDateChange}
                    value={selectedDate}
                    minDate={new Date()} // Prevents selecting past dates
                />
            </div>

            <div className="slots-section">
                <h3>Available Time Slots for {selectedDate.toDateString()}:</h3>
                <div className="time-slots-grid">
                    {availableTimeSlots.length > 0 ? (
                        availableTimeSlots.map((slot, index) => (
                            <button
                                key={index}
                                className={`time-slot-button ${selectedTime === slot ? 'selected' : ''}`}
                                onClick={() => handleTimeSelect(slot)}
                            >
                                {slot}
                            </button>
                        ))
                    ) : (
                        <p className="no-slots-message">No slots available for this date.</p>
                    )}
                </div>
                {selectedTime && (
                    <p className="selected-slot-info">
                        Selected slot: {selectedDate.toDateString()} at **{selectedTime}**
                    </p>
                )}
                <button onClick={handleSubmit} className="book-button" disabled={!selectedTime}>
                    Book Now
                </button>
            </div>
        </div>
    );
};

export default TimeSlotBooking;