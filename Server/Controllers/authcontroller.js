const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const Joi = require('joi');
const User = require('../models/userSchema'); // Adjust the path to your User model

// Secret key for JWT signing (ensure this is stored securely, e.g., in an environment variable)
const JWT_SECRET = 'zkjdbvuiawe3847518@!#^!$#$ADBFBEF#T$^#Y$GQRHrqhiqu439894178hfuewfh7eyrporejqgiojgA>SGERH>ERQh03@($*%*732>?>';

// Define the schema using Joi
const userSchema = Joi.object({
  firstname: Joi.string().trim().required(),
  email: Joi.string().email({
    tlds: { allow: false }
  }).lowercase().required(),
  password: Joi.string().min(8).required(),
});

// Merge registration and login into a single function
exports.loginUser = async (req, res) => {
  try {
    // Validate the request body against the schema
    const { error, value } = userSchema.validate(req.body);

    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }

    const { email, password, firstname } = value;

    // Check if user with the same email already exists
    let user = await User.findOne({ email });

    if (!user) {
      // User does not exist, register the user
      // const hashedPassword = await bcrypt.hash(password, 10);
      user = new User({ ...value, password });
      await user.save();
    } else {
      // Compare password with the hashed password in the database
      const isPasswordValid = await user.comparePassword(password);
      if (!isPasswordValid) {
        return res.status(401).json({ error: 'Invalid email or password' });
      }
    }

    // Generate a JWT token
    const token = jwt.sign({ userId: user._id }, JWT_SECRET, {
      expiresIn: '1h' // Token expiration time
    });

    // Respond with token and user info
    res.status(200).json({ message: 'Login successful', token, user: { email: user.email, firstname: user.firstname } });

  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};
