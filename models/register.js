const mongoose = require("mongoose");
const { Schema } = mongoose;

const registerSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  event: {
    type: Schema.Types.ObjectId,
    ref: "Event",
    required: true,
  },
});

const Register = mongoose.model("Register", registerSchema);
module.exports = Register;
