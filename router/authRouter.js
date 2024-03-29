const express = require('express');

const usersController = require('../controllers/authController');

const router = express.Router();

// router.get('/', usersController.getUsers);

router.post('/register', usersController.signup);

router.post('/login', usersController.login);

module.exports = router;
