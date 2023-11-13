const mongoose = require("mongoose");
const { Schema } = mongoose;

const journalSchema = new Schema({
  description: String,
});

const Journal = mongoose.model("Journal", journalSchema);

module.exports = Journal;
