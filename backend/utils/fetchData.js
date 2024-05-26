const chatModel = require('../models/chatModel');
const userModel = require('../models/userModel');

/**
 * Fetch chat data for a given user email.
 * @param {string} user_id The ID of the user to fetch chat messages for.
 * @returns {Promise<object|string|null>} Returns a Promise that resolves to chat data object,
 *    a string indicating "No chat found", or null if user id is not provided.
 */
const fetchChatData = async (user_id) => {
    try {
        // Check if user email is provided
        if (!user_id) {
            return null;
        }

        // Find chat data using user id
        const chatData = await chatModel.findOne({ user_id: user_id });

        // Return chat data
        return chatData;

    } catch (err) {
        // Handle errors, you may want to log the error for debugging purposes
        console.error("Error fetching chat data:", err.message);
        throw new Error("Error fetching chat data");
    }
}

/**
 * Fetch user data for a given email.
 * @param {string} user_email The email of the user to fetch data for.
 * @returns {Promise<object|string|null>} Returns a Promise that resolves to user data object,
 *    a string indicating "No user found", or null if user email is not provided.
 */
const fetchUserData = async (user_email) => {
    try {
        // Check if user email is provided
        if (!user_email) {
            return null;
        }

        // Find user data using email
        const userData = await userModel.findOne({ email: user_email });

        // Return user data
        return userData;
        
    } catch (err) {
        // Handle errors, you may want to log the error for debugging purposes
        console.error("Error fetching user data:", err.message);
        throw new Error("Error fetching user data");
    }
}


module.exports = { fetchUserData, fetchChatData };