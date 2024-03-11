// Import the express module
import express from 'express';

// Import the test function from the user controller
import { test } from '../controllers/user.controller.js';

// Create a new router object
const router = express.Router();

// Define a GET request to the '/test' endpoint
// and associate it with the test function
router.get('/test', test);

// Export the router object
export default router;