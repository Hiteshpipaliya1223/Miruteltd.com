// netlify/functions/bookSlot.js
const { MongoClient, ObjectId } = require('mongodb');

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

  // Ensure it's a POST request for booking
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: 'Method Not Allowed',
      headers: { ...headers, 'Allow': 'POST' },
    };
  }

  try {
    const db = await connectToDatabase();
    // Parse the request body
    const { slotId, customerName, customerEmail, customerPhone, serviceType, notes } = JSON.parse(event.body);

    if (!slotId || !customerName || !customerEmail || !serviceType) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Missing required booking information.' }),
        headers,
      };
    }

    const collection = db.collection('timeSlots'); // Your collection for time slots

    // Try to find the slot and update it to booked
    const result = await collection.findOneAndUpdate(
      { _id: new ObjectId(slotId), isBooked: { $ne: true } }, // Find by ID and ensure it's not already booked
      {
        $set: {
          isBooked: true,
          bookedBy: {
            name: customerName,
            email: customerEmail,
            phone: customerPhone,
          },
          service: serviceType,
          notes: notes || '', // Optional notes
          bookingDate: new Date(), // Timestamp of booking
        },
      },
      { returnDocument: 'after' } // Return the updated document
    );

    if (!result.value) {
      // If result.value is null, it means the slot was not found or was already booked
      return {
        statusCode: 409, // Conflict
        body: JSON.stringify({ error: 'Slot is already booked or does not exist.' }),
        headers,
      };
    }

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Booking successful!', bookingId: result.value._id }),
      headers,
    };
  } catch (error) {
    console.error('Error booking slot:', error);
    // Provide a more specific error message if possible
    let errorMessage = 'Failed to book slot';
    if (error.name === 'BSONTypeError') {
      errorMessage = 'Invalid Slot ID format.';
    } else if (error.message.includes('Cast to ObjectId failed')) {
      errorMessage = 'Invalid Slot ID format.';
    }
    return {
      statusCode: 500,
      body: JSON.stringify({ error: errorMessage }),
      headers,
    };
  }
};