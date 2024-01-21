const { StatusCodes } = require('http-status-codes');
const User = require('../models/userModel.js');
const { HttpError } = require('../models/http-error.js');
const jwt = require('jsonwebtoken');

const generateToken = (userId) => {
  // Replace 'yourSecretKey' with a strong secret key for signing the token
  const token = jwt.sign({ userId }, 'yourSecretKey', { expiresIn: '1h' });
  return token;
};

exports.signup = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    // Check if the user with the given email already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      throw new HttpError('Email is already in use');
    }

    // If the email is not taken, create a new user
    const user = await User.create({ name, email, password });
    const token = generateToken(user._id);
    res.status(StatusCodes.CREATED).json({ user, token });

  } catch (error) {
    console.error(error);
    res.status(error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR).json({ error: error.message || 'Internal Server Error' });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      throw new HttpError('Login failed');
    }
    if (user.password !== password) {
      throw new HttpError('Login failed');
    }
    const token = generateToken(user._id);

    res.status(StatusCodes.OK).json({ message: 'Login successful', token });
  } catch (error) {
    console.error(error);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: 'Internal Server Error' });
  }
};