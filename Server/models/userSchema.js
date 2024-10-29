const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Joi = require('joi');

// Define Joi validation schema for work email
const emailSchema = Joi.string()
  .email({ minDomainSegments: 2, tlds: { allow: true } }) // Allow any valid TLD (top-level domain)
  .lowercase()
  .custom((value, helpers) => {
    // Define your allowed work email domains
    const allowedDomains = [
      'company.com',
      'corporation.net',
      'organization.org',
      // Add more allowed domains as needed
    ];

    const domain = value.split('@')[1];
    if (!allowedDomains.includes(domain)) {
      return helpers.message('Email should be a valid work email address');
    }
    return value;
  })
  .required()
  .messages({
    'string.email': 'Email should be a valid email address',
    'string.empty': 'Email is required',
    'any.required': 'Email is required',
    'any.invalid': 'Email should be a valid work email address'
  });

// Define Mongoose schema for User
const userSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: [true, 'First name is required'],
    trim: true,
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
    lowercase: true,
    trim: true,
    // validate: {
    //   validator: function(value) {
    //     const { error } = emailSchema.validate(value);
    //     if (error) {
    //       throw new Error(error.details[0].message);
    //     }
    //     return true;
    //   },
    //   message: 'Email validation failed'
    // }
  },
  password: {
    type: String,
    required: [true, 'Password is required'],
    minlength: 8,
  },
});

// Hash password before saving to database
userSchema.pre('save', async function(next) {
  const user = this;
  if (user.isModified('password')) {
    user.password = await bcrypt.hash(user.password, 10);
  }
  next();
});

// Method to compare passwords
userSchema.methods.comparePassword = async function(candidatePassword) {
  return await bcrypt.compare(candidatePassword, this.password);
};

module.exports = mongoose.model('User', userSchema);
