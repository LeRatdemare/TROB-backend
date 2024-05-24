const mongoose = require("mongoose");

// See https://drive.google.com/drive/u/0/folders/1_jbxtyH0V0xACK_crdIbf-QMFv0aw7pr for the Glossary
const vocabularySchema = mongoose.Schema({
  word: { type: String, required: true },
  definition: { type: String, required: true },
});

// Export the Mongoose model for the things
module.exports = mongoose.model("Vocabulary", vocabularySchema);