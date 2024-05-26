const express = require('express');
const chatgptController = require('../controllers/chatgptController');

const chatgptRouter = express.Router();


chatgptRouter.post('/chatgpt/', chatgptController)

module.exports = chatgptRouter;