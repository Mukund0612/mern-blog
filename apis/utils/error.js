/**
 * Export a function that creates an error object
 * @param {number} statusCode - The HTTP status code
 * @param {string} statusMessage - The error message
 * @returns {Error} - An error object with the provided status code and message
 */
export const errorHandler = (statusCode, statusMessage) => {
  // Create a new error object
  const error = new Error();

  // Set the status code and message properties of the error object
  error.statusCode = statusCode;
  error.message = statusMessage;

  // Return the error object
  return error;
}