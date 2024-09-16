const Razorpay = require('razorpay');
const express = require('express');
const router = express.Router();

const razorpayInstance = new Razorpay({
  key_id: 'YOUR_KEY_ID',
  key_secret: 'YOUR_KEY_SECRET'
});

// Create payment order
router.post('/create-order', async (req, res) => {
  const { amount, currency } = req.body;

  const options = {
    amount: amount * 100,  // Razorpay requires amount in paise
    currency: currency,
    receipt: "order_rcptid_11"
  };

  try {
    const order = await razorpayInstance.orders.create(options);
    res.json(order);
  } catch (error) {
    res.status(500).json({ message: 'Error creating payment order' });
  }
});

module.exports = router;
