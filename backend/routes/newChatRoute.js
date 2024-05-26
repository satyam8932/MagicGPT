const express = require('express');
const chatgptController = require('../controllers/chatgptController');

const newChatRouter = express.Router();


newChatRouter.post('/newchat/', chatgptController)

module.exports = newChatRouter;