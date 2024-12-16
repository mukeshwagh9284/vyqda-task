const mongoose = require("mongoose");
const notesSchema = new mongoose.Schema({
  note: {
    type: String,
    require: true,
  },
});
module.exports = mongoose.model("user", notesSchema);
