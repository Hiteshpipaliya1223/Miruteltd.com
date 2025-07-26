// src/pages/CheckoutPage.jsx
import React from 'react';
import { useCart } from '../context/CartContext';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
import { Link } from 'react-router-dom';

// Material-UI components
import {
  Container, Grid, Box, Typography, Button, Paper,
  List, ListItem, ListItemText, Divider, CircularProgress,
  Avatar // Import Avatar for product images
} from '@mui/material';
import LockIcon from '@mui/icons-material/Lock';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

// Your existing CSS file
import './CheckoutPage.css';

// IMPORTANT: Replace 'YOUR_STRIPE_PUBLISHABLE_KEY_HERE' with your actual Stripe PUBLISHABLE Key (pk_test_...)
// DO NOT put your Secret Key (sk_test_...) here. It must only be on your backend server.
const stripePromise = loadStripe('YOUR_STRIPE_PUBLISHABLE_KEY_HERE'); // You MUST update this with your actual Publishable Key

// The actual form component where card details are entered
const CheckoutForm = () => {
  const { cartItems, getCartTotal, clearCart } = useCart();
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError(null);

    if (!stripe || !elements) {
      setError("Stripe.js has not loaded. Please try again.");
      setLoading(false);
      return;
    }

    const currentTotal = getCartTotal();
    if (typeof currentTotal !== 'number' || isNaN(currentTotal) || currentTotal <= 0) {
        setError("Cannot process payment: Invalid or zero total amount.");
        setLoading(false);
        return;
    }

    try {
        const response = await fetch('http://localhost:5000/create-payment-intent', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                amount: Math.round(currentTotal * 100), // Amount in cents
                currency: 'gbp',
                cartItems: cartItems.map(item => ({ id: item.id, name: item.name, price: item.price, quantity: item.quantity })),
            }),
        });

        if (!response.ok) {
            const errorData = await response.json().catch(() => ({ message: 'Server error: Could not parse response.' }));
            throw new Error(errorData.message || 'Failed to create payment intent on server.');
        }

        const { clientSecret } = await response.json();

        const result = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement),
            },
        });

        if (result.error) {
            console.error("Stripe confirm payment error:", result.error.message);
            setError(`Payment failed: ${result.error.message}`);
        } else {
            if (result.paymentIntent.status === 'succeeded') {
                alert('Payment succeeded! Your order has been placed.');
                clearCart();
                // Optionally navigate to a confirmation page here
            } else {
                setError(`Payment status: ${result.paymentIntent.status}. Please check your payment details.`);
            }
        }
    } catch (err) {
        console.error("Payment submission error:", err);
        if (err.message.includes('Failed to fetch')) {
            setError("Could not connect to payment server. Please ensure the backend server is running and accessible.");
        } else {
            setError(`Payment processing failed: ${err.message}. Please try again.`);
        }
    } finally {
        setLoading(false);
    }
  };

  const CARD_ELEMENT_OPTIONS = {
    style: {
      base: {
        color: 'var(--text-color)',
        fontFamily: '"Segoe UI", sans-serif',
        fontSize: '16px',
        '::placeholder': {
          color: '#aab7c4',
        },
        padding: '10px 12px',
      },
      invalid: {
        color: '#fa755a',
        iconColor: '#fa755a',
      },
    },
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
      <Typography variant="h6" gutterBottom sx={{ textAlign: 'left', fontWeight: 'bold' }}>
        Payment Information
      </Typography>
      <Box sx={{ mb: 3 }}>
        <div className="form-group">
          <label htmlFor="card-element">Credit or debit card</label>
          <CardElement id="card-element" options={CARD_ELEMENT_OPTIONS} />
        </div>
      </Box>

      {error && (
        <Typography color="error" variant="body2" sx={{ mb: 2, textAlign: 'center' }}>
          {error}
        </Typography>
      )}

      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 3, color: 'text.secondary' }}>
        <LockIcon sx={{ mr: 1, color: 'success.main' }} />
        <Typography variant="body2">
          Your payment is securely processed.
        </Typography>
      </Box>

      <Button
        type="submit"
        disabled={!stripe || loading}
        variant="contained"
        color="primary"
        size="large"
        fullWidth
        sx={{
          py: 1.5,
          fontSize: '1.2em',
          fontWeight: 'bold',
          boxShadow: '0 5px 15px rgba(0, 123, 255, 0.3)',
          '&:hover': {
            boxShadow: '0 8px 20px rgba(0, 123, 255, 0.4)',
          },
        }}
      >
        {loading ? <CircularProgress size={24} color="inherit" /> : `Pay £${getCartTotal().toFixed(2)} Now`}
      </Button>
    </Box>
  );
};


const CheckoutPage = () => {
  const { cartItems, getCartTotal } = useCart();

  if (cartItems.length === 0) {
    return (
      <Container maxWidth="sm" sx={{ py: 8, textAlign: 'center' }}>
        <Typography variant="h5" component="h1" gutterBottom sx={{ color: 'primary.main', fontWeight: 'bold' }}>
          Your Cart is Empty!
        </Typography>
        <Typography variant="body1" sx={{ mb: 3, color: 'text.secondary' }}>
          Please add items to your cart before proceeding to checkout.
        </Typography>
        <Button
          component={Link}
          to="/shop"
          variant="contained"
          color="secondary"
          size="large"
          sx={{ py: 1.5, fontSize: '1.1em' }}
        >
          Start Shopping
        </Button>
      </Container>
    );
  }

  return (
    <Container maxWidth="lg" sx={{ py: { xs: 4, md: 8 } }}>
      <Typography variant="h4" component="h1" gutterBottom align="center" sx={{ fontWeight: 'bold', mb: { xs: 3, md: 5 } }}>
        Secure Checkout
      </Typography>

      <Grid container spacing={{ xs: 3, md: 5 }} justifyContent="center">
        <Grid item xs={12} md={7}>
          <Paper elevation={4} sx={{ p: { xs: 3, md: 5 }, borderRadius: '12px' }}>
            <Elements stripe={stripePromise}>
              <CheckoutForm />
            </Elements>
          </Paper>
        </Grid>

        <Grid item xs={12} md={5}>
          <Paper elevation={4} sx={{ p: { xs: 3, md: 4 }, bgcolor: 'grey.50', borderRadius: '12px' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
              <ShoppingCartIcon color="primary" sx={{ mr: 1.5, fontSize: '2rem' }} />
              <Typography variant="h6" component="h2" sx={{ fontWeight: 'bold' }}>
                Order Summary
              </Typography>
            </Box>
            <List dense sx={{ mb: 2 }}>
              {cartItems.map((item) => (
                <ListItem key={item.id} sx={{ px: 0, py: 0.8, display: 'flex', alignItems: 'center' }}>
                  {item.image && ( // Conditionally render image if available
                    <Avatar
                      variant="rounded" // Use rounded corners for the image
                      src={item.image}
                      alt={item.name}
                      sx={{ width: 60, height: 60, mr: 2, flexShrink: 0 }}
                    />
                  )}
                  <ListItemText
                    primary={
                      <Typography variant="body1" fontWeight="medium">
                        {item.name} {item.selectedColor && `(${item.selectedColor}`}{item.selectedColor && item.selectedSize && `, `}{item.selectedSize && `Size ${item.selectedSize})`}
                      </Typography>
                    }
                    secondary={<Typography variant="caption" color="text.secondary">{`Quantity: ${item.quantity}`}</Typography>}
                    sx={{ flexGrow: 1 }}
                  />
                  <Typography variant="body1" sx={{ fontWeight: 'bold', ml: 2, flexShrink: 0 }}>£{(item.price * item.quantity).toFixed(2)}</Typography>
                </ListItem>
              ))}
              <Divider sx={{ my: 1.5 }} />
              <ListItem sx={{ px: 0, py: 0.8 }}>
                <ListItemText primary={<Typography variant="subtitle1" fontWeight="bold">Subtotal</Typography>} />
                <Typography variant="subtitle1" fontWeight="bold">£{getCartTotal().toFixed(2)}</Typography>
              </ListItem>
              <ListItem sx={{ px: 0, py: 0.8 }}>
                <ListItemText primary={<Typography variant="subtitle1" fontWeight="bold">Shipping</Typography>} />
                <Typography variant="subtitle1" fontWeight="bold">£0.00</Typography>
              </ListItem>
              <Divider sx={{ my: 1.5 }} />
              <ListItem sx={{ px: 0, py: 0.8 }}>
                <ListItemText primary={<Typography variant="h5" fontWeight="bold">Total</Typography>} />
                <Typography variant="h5" fontWeight="bold" color="primary.main">£{getCartTotal().toFixed(2)}</Typography>
              </ListItem>
            </List>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default CheckoutPage;