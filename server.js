const express = require("express");
const app = express();
require("dotenv").config();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

mongoose.connect(process.env.DATABASE_URL).then(() => {
  console.log("Connected to MongoDB");
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/events", require("./routes/events"));
app.use("/register", require("./routes/registrations"));

app.listen(process.env.PORT, () => {
  console.log(`Server is running on http://localhost:${process.env.PORT}`);
});
