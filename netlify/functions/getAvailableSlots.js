// netlify/functions/getAvailableSlots.js
const { MongoClient } = require('mongodb');

let cachedDb = null;

async function connectToDatabase() {
  if (cachedDb) {
    return cachedDb;
  }
  // MONGODB_URI is set as an Environment Variable in Netlify
  const client = await MongoClient.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  // IMPORTANT: Replace 'mirute-bookings' with your actual MongoDB database name if different
  cachedDb = client.db('mirute-bookings');
  return cachedDb;
}

exports.handler = async (event, context) => {
  // Lambda function might reuse connections, so prevent it from waiting for empty event loop
  context.callbackWaitsForEmptyEventLoop = false;

  // Set CORS headers
  const headers = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*', // Allow all origins for now, consider restricting in production
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  };

  // Handle preflight OPTIONS request
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers,
      body: 'OK',
    };
  }

  try {
    const db = await connectToDatabase();
    const { date } = event.queryStringParameters; // Expect date as a query parameter

    if (!date) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Date parameter is required.' }),
        headers,
      };
    }

    const collection = db.collection('timeSlots'); // Your collection for time slots

    // Find available slots for the given date that are not booked
    const availableSlots = await collection.find({
      date: date,
      isBooked: { $ne: true } // isBooked is false or does not exist
    }).toArray();

    return {
      statusCode: 200,
      body: JSON.stringify(availableSlots),
      headers,
    };
  } catch (error) {
    console.error('Error fetching slots:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message || 'Failed to fetch slots' }),
      headers,
    };
  }
};