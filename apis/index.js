// Import the necessary modules
import express, { application } from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { UserRoutes, AuthRoutes } from './routes/routes.js';

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

// Parse JSON request bodies
app.use(express.json());

// Start the server and listen on port 3000
app.listen(3000, () => {
  // Log a success message when the server starts
  console.log('Server is running on port 3000');
});

// Register the user routes
app.use('/api/v1/user', UserRoutes);

// Register the auth routes
app.use('/api/v1/auth', AuthRoutes);

// Define an error handling middleware
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const statusMessage = err.message || 'Internal Server Error';

  // Send a JSON response with the error status code and message
  res.status(statusCode).json({
    success: false,
    message: {
      statusCode,
      statusMessage,
    },
  });
});