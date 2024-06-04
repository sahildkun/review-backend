const express = require('express');
const userController = require('../controllers/userController');
const signupSchema = require('../validators/auth-validator');
const validate  = require('../middleware/validate-middleware');
const router = express.Router();

router.get('/', userController.getUsers);
router.post('/signup', validate(signupSchema), userController.signup);
router.post('/login', userController.login);

module.exports = router;
