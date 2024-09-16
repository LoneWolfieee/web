const express = require('express');
const router = express.Router();
const { User } = require('../config/db');

// Login Route
router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email, password });

  if (user) {
    res.json({ isAdmin: user.isAdmin });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
});

// Register Route
router.post('/register', async (req, res) => {
  const newUser = new User(req.body);
  await newUser.save();
  res.status(201).json({ message: 'User registered successfully' });
});

module.exports = router;
