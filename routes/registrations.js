const router = require("express").Router();
const Register = require("../models/register");
const Event = require("../models/event");

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
    const event = await Event.findOne({ name: req.body.event });
    if (!event) {
      return res.status(404).json({ error: "Event not found" });
    }
    const newRegistration = await Register.create({ ...req.body, event: event._id });
    res.status(201).json({ message: "Registration Successful", registration: newRegistration });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const updatedRegistration = await Register.findByIdAndUpdate(req.params.id, { ...req.body, event: req.body.event._id }, { new: true });
    if (!updatedRegistration) {
      return res.status(404).json({ error: "Registration not found" });
    }
    res.status(200).json({ message: "Registration Updated", registration: updatedRegistration });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const deletedRegistration = await Register.findByIdAndDelete(req.params.id);
    if (!deletedRegistration) {
      return res.status(404).json({ error: "Registration not found" });
    }
    res.status(200).json({ message: "Registration Deleted" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});
module.exports = router;
