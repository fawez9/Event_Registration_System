const router = require("express").Router();
const Register = require("../models/register");

router.get("/", async (req, res) => {
  try {
    const registrations = await Register.find();
    res.status(200).json(registrations);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post("/", async (req, res) => {
  try {
    const newRegistration = await Register.create(req.body);
    res.status(201).json({ message: "Registration Successful", registration: newRegistration });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const updatedRegistration = await Register.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedRegistration) {
      return res.status(404).json({ error: "Registration not found" });
    }
    res.status(200).json({ message: "Registration Updated", registration: updatedRegistration });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
