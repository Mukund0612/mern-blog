import mongoose from "mongoose";

// Define a new Mongoose schema for the User model
const userSchema = new mongoose.Schema({
  // The username field is a required string and must be unique
  username: {
    type: String,
    required: true,
    unique: true,
  },
  // The email field is a required string and must be unique
  email: {
    type: String,
    require: true,
    unique: true,
  },
  // The password field is a required string
  password: {
    type: String,
    required: true,
  }
}, {
  // Enable timestamps for createdAt and updatedAt fields
  timestamps: true,
});

// Create the User model using the userSchema
const User = mongoose.model('User', userSchema);

// Export the User model
export default User;