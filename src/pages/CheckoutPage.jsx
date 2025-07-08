// src/pages/CheckoutPage.jsx
import React from 'react';
import { useCart } from '../context/CartContext';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
import { Link } from 'react-router-dom'; // ADDED: Import Link here for the "Start Shopping" button
import './CheckoutPage.css'; // Your existing CSS file

// Replace with your actual Stripe publishable key (starts with 'pk_test_')
// You can find this in your Stripe Dashboard under Developers -> API keys.
// Make sure this is YOUR OWN KEY from Stripe.
const stripePromise = loadStripe('pk_test_51PZ7TjRthP51LgH1xWpM3B221z17yW3KkHqM0k6UqP6w0v9j6s5b1aM5m0eD9o5n0r0s0t0u0v0w0x0y0z0'); // <-- REMEMBER TO REPLACE WITH YOUR OWN PUBLISHABLE KEY!

// The actual form component where card details are entered
const CheckoutForm = () => {
  const { cartItems, getCartTotal, clearCart } = useCart(); // Keep getCartTotal here
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission

    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    // Send a request to your backend to create a PaymentIntent
    const response = await fetch('http://localhost:5000/create-payment-intent', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        amount: Math.round(getCartTotal() * 100), // Amount in cents
        currency: 'gbp', // Or 'usd', 'eur', etc.
        cartItems: cartItems.map(item => ({ id: item.id, name: item.name, price: item.price, quantity: item.quantity })),
      }),
    });

    const { clientSecret } = await response.json();

    // Confirm the payment on the client side
    const result = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
      },
    });

    if (result.error) {
      // Show error to your customer (e.g., insufficient funds, card declined)
      console.log(result.error.message);
      alert(`Payment failed: ${result.error.message}`);
    } else {
      // The payment has been processed!
      if (result.paymentIntent.status === 'succeeded') {
        alert('Payment succeeded!');
        clearCart(); // Clear the cart after successful payment
        // Redirect to a success page or display success message
        // navigate('/order-success'); // Example of using React Router's useNavigate hook if you import it
      }
    }
  };

  // Styles for CardElement to match your theme
  const CARD_ELEMENT_OPTIONS = {
    style: {
      base: {
        color: 'var(--text-color)',
        fontFamily: '"Segoe UI", sans-serif',
        fontSize: '16px',
        '::placeholder': {
          color: '#aab7c4',
        },
      },
      invalid: {
        color: '#fa755a',
        iconColor: '#fa755a',
      },
    },
  };

  return (
    <form onSubmit={handleSubmit} className="checkout-form">
      <div className="form-group">
        <label htmlFor="card-element">
          Credit or debit card
        </label>
        <CardElement id="card-element" options={CARD_ELEMENT_OPTIONS} />
      </div>

      <p className="checkout-total">Your Order Total: £{getCartTotal()}</p>

      <button type="submit" disabled={!stripe} className="submit-payment-button">
        Pay £{getCartTotal()} Now
      </button>
    </form>
  );
};


const CheckoutPage = () => {
  // REMOVED getCartTotal from here, as it's only used inside CheckoutForm
  const { cartItems } = useCart();

  // Ensure there are items in the cart to proceed to checkout
  if (cartItems.length === 0) {
    return (
      <div className="checkout-page-container empty-cart-checkout">
        <h1>Your Cart is Empty!</h1>
        <p>Please add items to your cart before proceeding to checkout.</p>
        <Link to="/shop" className="shop-now-button-checkout">Start Shopping</Link>
      </div>
    );
  }

  return (
    <div className="checkout-page-container">
      <h1>Proceed to Checkout</h1>
      <p>Complete your purchase securely.</p>

      <Elements stripe={stripePromise}>
        <CheckoutForm />
      </Elements>
    </div>
  );
};

export default CheckoutPage;