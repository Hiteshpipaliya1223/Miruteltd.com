// src/components/TimeSlotBooking.jsx
import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // Keep its CSS for react-calendar base styles
import './TimeSlotBooking.css'; // Optional: for custom overrides of react-calendar if needed

// Import Material-UI components
import { Box, Typography, Button, TextField, Paper, Alert, CircularProgress, useTheme, Container } from '@mui/material';

const TimeSlotBooking = ({ serviceType = "Service" }) => {
    const theme = useTheme();
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [availableTimeSlots, setAvailableTimeSlots] = useState([]);
    const [selectedTime, setSelectedTime] = useState(null);
    const [customerName, setCustomerName] = useState('');
    const [customerEmail, setCustomerEmail] = useState('');
    const [bookingStatus, setBookingStatus] = useState(null); // 'success', 'error', 'loading'

    const generateTimeSlots = (date) => {
        const slots = [];
        const dayOfWeek = date.getDay();

        let startHour, endHour;

        if (dayOfWeek >= 1 && dayOfWeek <= 5) { // Weekday
            startHour = 17; // 5 PM
            endHour = 22;   // 10 PM
        } else { // Weekend
            startHour = 9;  // 9 AM
            endHour = 22;   // 10 PM
        }

        for (let hour = startHour; hour <= endHour; hour++) {
            const time = `${String(hour).padStart(2, '0')}:00`;
            slots.push(time);
        }
        setAvailableTimeSlots(slots);
    };

    useEffect(() => {
        generateTimeSlots(selectedDate);
    }, [selectedDate]);

    const handleDateChange = (date) => {
        setSelectedDate(date);
        setSelectedTime(null);
    };

    const handleTimeSelect = (time) => {
        setSelectedTime(time);
    };

    const handleSubmit = async () => {
        setBookingStatus('loading');
        if (!selectedDate || !selectedTime || !customerName || !customerEmail) {
            setBookingStatus('error');
            setTimeout(() => setBookingStatus(null), 3000);
            return;
        }

        const bookingData = {
            serviceType: serviceType,
            date: selectedDate.toDateString(),
            time: selectedTime,
            customerName: customerName,
            customerEmail: customerEmail,
        };

        console.log('Booking Data:', bookingData);

        try {
            const response = await fetch('/api/book-timeslot', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(bookingData),
            });

            if (response.ok) {
                setBookingStatus('success');
                setSelectedDate(new Date());
                setSelectedTime(null);
                setCustomerName('');
                setCustomerEmail('');
            } else {
                const errorData = await response.json();
                console.error('Booking failed:', errorData.message);
                setBookingStatus('error');
            }
        } catch (error) {
            console.error('Error submitting booking:', error);
            setBookingStatus('error');
        } finally {
            setTimeout(() => setBookingStatus(null), 5000);
        }
    };

    return (
        <Container maxWidth="md">
            <Paper elevation={5} sx={{ p: { xs: 3, md: 5 }, mx: 'auto', borderRadius: '15px', textAlign: 'center', bgcolor: 'background.paper' }}>
                <Typography variant="h4" component="h3" sx={{ mb: 3, color: 'primary.main', fontWeight: 600 }}>
                    Book Your {serviceType} Appointment
                </Typography>

                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, alignItems: 'center' }}>
                    <Typography variant="h6" sx={{ mt: 2, color: 'text.primary' }}>Select Date:</Typography>
                    <Calendar
                        onChange={handleDateChange}
                        value={selectedDate}
                        minDate={new Date()}
                        className="react-calendar-override"
                        tileContent={({ date, view }) =>
                            view === 'month' && date.toDateString() === new Date().toDateString() ? (
                                <Box sx={{
                                    bgcolor: theme.palette.primary.light,
                                    borderRadius: '50%',
                                    width: 30, height: 30,
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    mx: 'auto', mt: '-10px',
                                    color: theme.palette.primary.contrastText
                                }}></Box>
                            ) : null
                        }
                    />

                    <Typography variant="h6" sx={{ mt: 4, mb: 2, color: 'text.primary' }}>
                        Available Time Slots for {selectedDate.toDateString()}:
                    </Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 2, mb: 3, width: '100%' }}>
                        {availableTimeSlots.length > 0 ? (
                            availableTimeSlots.map((slot, index) => (
                                <Button
                                    key={index}
                                    variant={selectedTime === slot ? 'contained' : 'outlined'}
                                    color={selectedTime === slot ? 'miruteAccent' : 'primary'}
                                    onClick={() => handleTimeSelect(slot)}
                                    sx={{ minWidth: '100px', fontWeight: selectedTime === slot ? 'bold' : 'normal' }}
                                >
                                    {slot}
                                </Button>
                            ))
                        ) : (
                            <Typography variant="body1" color="text.secondary" sx={{ mt: 2 }}>
                                No slots available for this date.
                            </Typography>
                        )}
                    </Box>

                    {selectedTime && (
                        <Typography variant="body1" sx={{ mb: 3, color: 'text.primary' }}>
                            Selected slot: {selectedDate.toDateString()} at <strong style={{ color: theme.palette.miruteAccent.main }}>{selectedTime}</strong>
                        </Typography>
                    )}

                    <TextField
                        label="Your Full Name"
                        value={customerName}
                        onChange={(e) => setCustomerName(e.target.value)}
                        fullWidth
                        sx={{ mb: 2 }}
                    />
                    <TextField
                        label="Your Email"
                        type="email"
                        value={customerEmail}
                        onChange={(e) => setCustomerEmail(e.target.value)}
                        fullWidth
                        sx={{ mb: 2 }}
                    />

                    <Button
                        variant="contained"
                        color="miruteAccent"
                        size="large"
                        onClick={handleSubmit}
                        disabled={!selectedTime || !customerName || !customerEmail || bookingStatus === 'loading'}
                        sx={{ mt: 2, width: '100%', maxWidth: '300px' }}
                    >
                        {bookingStatus === 'loading' ? <CircularProgress size={24} color="inherit" /> : 'Confirm Booking'}
                    </Button>

                    {bookingStatus === 'success' && (
                        <Alert severity="success" sx={{ mt: 2, width: '100%' }}>
                            Booking confirmed! We've sent a confirmation to your email.
                        </Alert>
                    )}
                    {bookingStatus === 'error' && (
                        <Alert severity="error" sx={{ mt: 2, width: '100%' }}>
                            Booking failed. Please ensure all fields are filled and try again.
                        </Alert>
                    )}
                </Box>
            </Paper>
        </Container>
    );
};

export default TimeSlotBooking;