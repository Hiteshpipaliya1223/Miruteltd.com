// netlify/functions/getAvailableSlots.js
const { MongoClient } = require('mongodb');

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

  try {
    const db = await connectToDatabase();
    const { date } = event.queryStringParameters;

    if (!date) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Date parameter is required.' }),
        headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
      };
    }

    const collection = db.collection('timeSlots');

    const availableSlots = await collection.find({
      date: date,
      isBooked: { $ne: true }
    }).toArray();

    return {
      statusCode: 200,
      body: JSON.stringify(availableSlots),
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
    };
  } catch (error) {
    console.error('Error fetching slots:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message || 'Failed to fetch slots' }),
      headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
    };
  }
};