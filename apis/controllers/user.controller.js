/**
 * Export a function that handles an HTTP request
 * @param {Object} req - The incoming HTTP request object
 * @param {Object} res - The outgoing HTTP response object
 * @returns {Object} - A JSON response with a success message
 */
export const test = (req, res) => {
  // Send a JSON response with a success message
  res.json({ message: 'Api is working' });
}