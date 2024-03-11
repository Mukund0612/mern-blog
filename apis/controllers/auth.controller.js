// Import the User model from '../models/user.model.js'
import User from '../models/user.model.js';
// Import the bcryptjs library for password hashing
import bcryptjs from 'bcryptjs';
// Import the errorHandler function from '../utils/error.js'
import { errorHandler } from '../utils/error.js';

// Define the signUp function that handles user sign up requests
export const signUp = async (req, res, next) => {
  // Destructure the username, email, and password from the request body
  const { username, email, password } = req.body;

  // Check if any of the required fields are missing or empty
  if (
    !username ||
    !email ||
    !password ||
    username === '' ||
    email === '' ||
    password === ''
  ) {
    // If any of the required fields are missing or empty,
    // call the errorHandler function with the appropriate status code and message
    next(errorHandler(400, 'All fields are required'));
  }

  // Hash the password using bcryptjs
  const hashedPassword = bcryptjs.hashSync(password, 10);

  // Create a new User instance with the provided username, email, and hashed password
  const newUser = new User({
    username,
    email,
    password: hashedPassword
  });

  // Try to save the new user to the database
  try {
    await newUser.save();

    // If the user is saved successfully, send a JSON response with a success message
    res.json({ message: 'Signup Successful' });
  } catch (error) {
    // If there is an error, pass it to the next middleware function (i.e. error handling middleware)
    next(error);
  }
}