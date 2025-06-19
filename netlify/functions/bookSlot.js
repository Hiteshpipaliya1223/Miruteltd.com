// netlify/functions/bookSlot.js
const { MongoClient, ObjectId } = require('mongodb');

let cachedDb = null;

async function connectToDatabase() {
  if (cachedDb) {
    return cachedDb;
  }
  const client = await MongoClient.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  // Replace 'mirute-bookings' with your actual MongoDB database name if different
  cachedDb = client.db('mirute-bookings');
  return cachedDb;
}

exports.handler = async (event, context) => {
  context.callbackWaitsForEmptyEventLoop = false;

  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: 'Method Not Allowed',
      headers: { 'Allow': 'POST', 'Access-Control-Allow-Origin': '*' },
    };
  }

  try {
    const db = await connectToDatabase();
    const { slotId, customerName, customerEmail, customerPhone, serviceType, notes } = JSON.parse(event.body);

    if (!slotId || !customerName || !customerEmail || !serviceType) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Missing required booking information.' }),
        headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
      };
    }

    const collection = db.collection('timeSlots');

    const result = await collection.findOneAndUpdate(
      { _id: new ObjectId(slotId), isBooked: { $ne: true } },
      {
        $set: {
          isBooked: true,
          bookedBy: {
            name: customerName,
            email: customerEmail,
            phone: customerPhone,
          },
          service: serviceType,
          notes: notes || '',
          bookingDate: new Date(),
        },
      },
      { returnDocument: 'after' }
    );

    if (!result.value) {
      return {
        statusCode: 409,
        body: JSON.stringify({ error: 'Slot is already booked or does not exist.' }),
        headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
      };
    }

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Booking successful!', bookingId: result.value._id }),
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
    };
  } catch (error) {
    console.error('Error booking slot:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message || 'Failed to book slot' }),
      headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
    };
  }
};