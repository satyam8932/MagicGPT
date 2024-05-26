const userModel = require('../models/userModel');
const chatModel = require('../models/chatModel');
const { fetchUserData } = require('../utils/fetchData');
const bcrypt = require('bcrypt');

/**
 * Creates a new user data entry in the database.
 * @param {string} user_name - The name of the user.
 * @param {string} user_email - The email of the user.
 * @param {string} user_password - The password of the user.
 * @returns {Object|string|null} - Returns the newly created user object if successful,
 *                                  "Please provide User Data" if required data is missing,
 *                                  or null for any other errors.
 */
const createUserData = async (user_name, user_email, user_password) => {
    try {
        // Check if required user data is provided
        if (!user_name || !user_email || !user_password) {
            throw new Error("Please provide User Data");
        }

        // Check if user already exists in DB
        const userCheck = await fetchUserData(user_email);

        if(userCheck) {
            return JSON.stringify({message:"User already exists"});
        }
        
        // Hash the password
        const hashPassword = await bcrypt.hash(user_password, 10)  // 10 salt rounds
        
        // Create new user data entry
        const newUser = await userModel.create({
            name: user_name,
            email: user_email,
            password: hashPassword
        });
        
        // Check if new user was created
        if (!newUser) {
            throw new Error("Failed to create user data");
        }

        return newUser;

    } catch (err) {
        console.error("Error creating user data:", err.message);
        return null; // Return null in case of errors
    }
};

/**
 * Creates a new chat data entry in the database.
 * @param {string} user_id - The user id.
 * @param {string} chat_title - The title of the chat.
 * @param {Object} chat_message - The chat message
 * @returns {Object|string|null} - Returns the newly created chat object if successful,
 *                                  "Please provide Chat Data" if required data is missing,
 *                                  or null for any other errors.
 */
const createChatData = async (user_id, chat_title, chat_message) => {
    try {
        // Check if required user data is provided
        if (!user_id ||!chat_title ||!chat_message) {
            throw new Error("Please provide Chat Data");
        }

        // Create new chat data entry
        const newChat = await chatModel.create({
            user_id: user_id,
            chat_title: chat_title,
            chat_message: chat_message
        });

        // Check if new chat is not created
        if (!newChat) {
            throw new Error("Failed to create chat data");
        }

        return newChat;

    } catch (err) {
        console.error("Error creating chat data:", err.message);
        return null; // Return null in case of errors
    }
}


module.exports = {createUserData , createChatData};