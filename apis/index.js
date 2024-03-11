// Import the necessary modules
import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/user.route.js';

// Load environment variables from .env file
dotenv.config();

// Connect to MongoDB
mongoose.connect(process.env.MONGO)
  .then(() => {
    // Log a success message if the connection is successful
    console.log('MongoDB connected');
  })
  .catch((err) => {
    // Log the error if the connection fails
    console.log(err);
  });

// Initialize the Express application
const app = express();

// Start the server and listen on port 3000
app.listen(3000, () => {
  // Log a success message when the server starts
  console.log('Server is running on port 3000');
});

// Register the user routes
app.use('/api/v1/user', userRoutes);