const mongoose = require("mongoose");

// Create a Mongoose schema for the things in the database
const configurationSchema = mongoose.Schema({
    name: { type: String, required: true },
    nb_players: { type: Number, required: true },
    blue_team: [{ type: Array, required: true }], // TODO A vérifier
    red_team: [{ type: Array, required: true }], // TODO A vérifier
    grey_team: [{ type: Array, required: true }], // TODO A vérifier
    green_team: [{ type: Array, required: true }], // TODO A vérifier
    comment: { type: String }, // Commentaire sur la configuration
});

// Export the Mongoose model for the things
module.exports = mongoose.model("Configuration", configurationSchema);