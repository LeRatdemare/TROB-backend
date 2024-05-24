const mongoose = require("mongoose");

// Create a Mongoose schema for the things in the database
const cardSchema = mongoose.Schema({
    name: { type: String, required: true },
    team: { type: String, required: true }, // "Agent", "Terrorist", "Grey", "Green"
    description: { type: String, required: true },
    pouvoir: { type: String, required: true }, // Ecrit en majuscule sur la carte
    startAttribut: { type: String }, // Entre guillemet en général
    recommandation: { type: String }, // Le petit '+' en dessous des cartes
    warning: { type: String }, // Le petit '-' en dessous des cartes
    linkedCard: { type: String }, // ex: Roméo & Juliette
    imageUrl: { type: String },
});

// Export the Mongoose model for the things
module.exports = mongoose.model("Card", cardSchema);
