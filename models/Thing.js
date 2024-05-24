const mongoose = require("mongoose");

// Create a Mongoose schema for the things in the database
const thingSchema = mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  imageUrl: { type: String, required: true },
  userId: { type: String, required: true },
  price: { type: Number, required: true },
});

// Export the Mongoose model for the things
module.exports = mongoose.model("Thing", thingSchema);
