// const { StatusCodes } = require('http-status-codes');
const { validationResult } = require('express-validator')
const User = require('../models/userModel.js');
const HttpError = require('../models/http-error.js');
const bcrypt = require('bcryptjs');

const getUsers = async (req, res, next) => {
  let users;
  try {
    users = await User.find({}, '-password');
  } catch (err) {
    const error = new HttpError(
      'Fetching users failed, please try again later.',
      500
    );
    return next(error);
  }
  res.json({ users: users.map(user => user.toObject({ getters: true })) });

}





const signup = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return next(new HttpError('Invalid inputs passed, please check your data.', 422));
  }

  const { name, email, password, isAdmin } = req.body;

  let existingUser;
  try {
    existingUser = await User.findOne({ email: email });
  } catch {
    const error = new HttpError(
      'Signing up failed, please try again later.',
      500
    );
    return next(error);
  }

  if (existingUser) {
    const error = new HttpError(
      'User exists already, please login instead.',
      422
    );
    return next(error);
  }

  //hashing
  const hash_password = await bcrypt.hash(password, 12);

  const createdUser = new User({
    name,
    email,
    password: hash_password,
    image: 'https://www.abc.net.au/news/image/8314104-3x2-940x627.jpg',
    isAdmin,
    reviews: []
  });

  try {
    await createdUser.save();
  } catch {
    const error = new HttpError(
      'Signing up failed, please try again.',
      500
    );
    return next(error);
  }

  res.status(200).json({
    user: createdUser.toObject({ getters: true }),
    token: await createdUser.generateToken(),
    userId: createdUser._id.toString()
  });
}

const login = async (req, res, next) => {
  
  const { email, password } = req.body;
  console.log(email, password);
  try {
    const userExist = await User.findOne({ email });
    console.log(userExist);

    if (!userExist) {
      return next(new HttpError('User does not exist', 404));
    }
    const user = await bcrypt.compare(password, userExist.password);
    if (user) {
      res.status(200).json({
        message:"lgged in successfully",
        user: userExist.toObject({ getters: true }),
        token: await userExist.generateToken(),
        userId: userExist._id.toString()
      });
    }
    else {
      return next(new HttpError('Invalid credentials', 401));
    }
  }
  catch (err) {

    const error = new HttpError(
      'Invalid credentials, could not log you in.',
      401
    );
    return next(error);
  }


}
// const login = async (req, res, next) => {
//   const { email, password } = req.body;
  
//   console.log('Login function called');
//   console.log(`Email: ${email}`);
//   console.log(`Password: ${password}`);

//   res.status(200).json({ message: 'Login function called successfully', email, password });
// };

exports.getUsers = getUsers;
exports.signup = signup;
exports.login = login;