const express = require('express');
const router = express.Router();
const { Event } = require('../config/db');

// Fetch all events
router.get('/events', async (req, res) => {
  const events = await Event.find();
  res.json(events);
});

// Add new event (Admin)
router.post('/admin/events', async (req, res) => {
  const newEvent = new Event(req.body);
  await newEvent.save();
  res.status(201).json({ message: 'Event added successfully' });
});

module.exports = router;
