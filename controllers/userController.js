const asyncHandler = require('express-async-handler');
const User = require('../models/userModel');

// @desc    Get all users
// @route   GET /api/users
// @access  Public
const getUsers = asyncHandler(async (req, res) => {
  const users = await User.find();
  res.status(200).json(users);
});

// @desc    Add a new user
// @route   POST /api/users
// @access  Public
const addUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    res.status(400);
    throw new Error('Please provide all required fields');
  }

  const user = await User.create({ name, email, password });
  res.status(201).json(user);
});

module.exports = {
  getUsers,
  addUser,
};
