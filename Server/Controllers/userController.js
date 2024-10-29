const Joi = require('joi');
const User = require('../models/userSchema'); // Adjust the path as per your project structure

// Define the schema using Joi
const userSchema = Joi.object({
  firstname: Joi.string().trim().required(),
  email: Joi.string().email({
    tlds: { allow: false }
  }).lowercase().required(),
  password: Joi.string().min(8).required(),
});

// Controller function to handle user registration
exports.registerUser = async (req, res) => {
  // Validate the request body against the schema
  const { error, value } = userSchema.validate(req.body);

  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }

  const { email } = value;

  try {
    // Check if user with the same email already exists
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({ error: 'User with this email already exists' });
    }

    // Proceed with creating the user
    const newUser = new User(value);
    await newUser.save();
    res.status(201).json({ message: 'User registered successfully', user: newUser });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
