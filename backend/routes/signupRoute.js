const express = require('express');
const createUserController = require('../controllers/userController');

const signupRouter = express.Router();

signupRouter.post('/signup/', createUserController)

module.exports = signupRouter; 