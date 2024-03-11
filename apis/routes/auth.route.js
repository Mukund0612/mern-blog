// Import the express module
import express from 'express';

// Import the SignUp function from the Auth controller
import { signUp } from '../controllers/auth.controller.js';

// Create a new router object
const router = express.Router();

// Define a POST request to the '/sign-up' endpoint, which calls the signUp() function in the Auth controller
router.post('/sign-up', signUp);

// Export the router object so it can be used by other modules
export default router;