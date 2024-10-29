const express = require('express');
const router = express.Router();
const  userController = require('../Controllers/userController');
const { loginUser } = require('../Controllers/authcontroller'); 
const User = require("../models/userSchema")

router.post('/user-rigister', userController.registerUser);
router.post('/login', loginUser);
router.get('/users', async (req, res) => {
    try {
      const users = await User.find();
      res.json(users);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });
module.exports = router;
