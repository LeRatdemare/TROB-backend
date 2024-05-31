const {MongoClient} = require('mongodb');
require('dotenv').config(); // Load the values in the .env file into process.env

const mongoClient = new MongoClient(process.env.MONGODB_URI); // Create a new MongoClient
const clientPromise = mongoClient.connect(); // Connect to the MongoDB database

const handler = async (event) => {
  try {
    const client = await clientPromise; // Wait for the connection to be established
    const db = client.db(process.env.MONGODB_DB); // Get the database from the client
    const collection = db.collection(process.env.MONGODB_COLLECTION); // Get the collection from the database
    const result = await collection.find().limit(10).toArray(); // Find all the documents in the collection
    return {
      statusCode: 200,
      body: JSON.stringify(result),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify(error),
    };
  }
};

module.exports = { handler };