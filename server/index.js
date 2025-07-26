// D:\MIRUTE\my-store\server\index.js

require('dotenv').config(); // Load environment variables from .env file

const express = require('express');
const cors = require('cors');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY); // Initialize Stripe with your Secret Key

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors()); // Allows your frontend to make requests to this server
app.use(express.json()); // Parses incoming JSON requests

// Basic route for testing server
app.get('/', (req, res) => {
  res.send('Stripe backend server is running!');
});

// Endpoint to create a Payment Intent
app.post('/create-payment-intent', async (req, res) => {
  const { amount, currency, cartItems } = req.body;

  // Basic validation (you should add more robust validation)
  if (!amount || typeof amount !== 'number' || amount <= 0) {
    return res.status(400).json({ message: 'Invalid amount provided.' });
  }
  if (!currency) {
    return res.status(400).json({ message: 'Currency is required.' });
  }
  // Log cartItems for debugging purposes on the backend
  console.log('Received cart items for payment intent:', cartItems);

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount,
      currency: currency,
      // Optional: Add metadata for tracking orders
      metadata: { integration_check: 'accept_a_payment', order_id: 'ORDER_XYZ', items: JSON.stringify(cartItems.map(item => ({ id: item.id, qty: item.quantity }))) },
    });

    res.status(200).json({ clientSecret: paymentIntent.client_secret });
  } catch (error) {
    console.error("Error creating payment intent:", error);
    res.status(500).json({ message: error.message });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});