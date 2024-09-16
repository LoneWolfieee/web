const express = require('express');
const router = express.Router();
const { Merch } = require('../config/db');

// Fetch all merch
router.get('/merch', async (req, res) => {
  const merch = await Merch.find();
  res.json(merch);
});

// Add new merch (Admin)
router.post('/admin/merch', async (req, res) => {
  const newMerch = new Merch(req.body);
  await newMerch.save();
  res.status(201).json({ message: 'Merch added successfully' });
});

module.exports = router;
