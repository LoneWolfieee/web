const express = require('express');
const { Event, User, Merch } = require('./src/config/db');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(express.static('public'));

// Routes
app.use('/api', require('./src/routes/authRoutes'));
app.use('/api', require('./src/routes/eventRoutes'));
app.use('/api', require('./src/routes/merchRoutes'));
app.use('/api/admin', require('./src/routes/adminRoutes'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
