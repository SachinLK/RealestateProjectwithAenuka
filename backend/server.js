require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const exampleRoutes = require('./routes/exampleRoutes');
const authRoutes = require('./routes/authRoutes');
const listingRoutes = require('./routes/listingRoutes');
const { errorHandler } = require('./middlewares/errorMiddleware');

// Connect to database
connectDB();

const app = express();

// Middlewares
app.use(cors({
  origin: ['http://localhost:3000', 'http://localhost:5173', 'http://127.0.0.1:3000', 'http://127.0.0.1:5173'],
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  credentials: true
}));
app.use(express.json()); // For parsing application/json
app.use(express.urlencoded({ extended: true })); // For parsing application/x-www-form-urlencoded

// Routes
app.use('/api/example', exampleRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/listings', listingRoutes);

// Base route for testing
app.get('/', (req, res) => {
  res.send('API is running...');
});

// Error handling middleware
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
