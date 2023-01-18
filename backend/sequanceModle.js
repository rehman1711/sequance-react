const mongoose = require("mongoose");

const sequanceSchema = new mongoose.Schema({
  isteam: {
    type: String,
    required: true,
  },
  player: {
    type: String,
    required: true,
  },
  team: {
    type: String,
    required: true,
  },
});

const Sequance = mongoose.model("Sequance", sequanceSchema);

module.exports = Sequance;