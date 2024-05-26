const chatModel = require('../models/chatModel');
const userModel = require('../models/userModel');

/**
 * Updates chat data for a user in the database.
 * @param {string} user_id     - The user ID for whom the chat data is updated.
 * @param {Array} chat_messages - The array of chat messages to update.
 * @returns {Object|string|null} - Returns the updated chat data object if successful,
 *                                   "Not Updated" if not successful, or null for invalid input.
 */
const updateChatData = async (user_id, chat_messages) => {
    try {
        // Check if chat messages and user id are present
        if (!Array.isArray(chat_messages) || chat_messages.length === 0 || !user_id) {
            throw new Error("Invalid input: chat messages array and user ID are required.");
        }

        // Find and update chat data
        const updateChat = await chatModel.findOneAndUpdate(
            { user_id: user_id },
            { $set: { chat_messages: chat_messages } },
            { new: true, returnDocument: 'after' }
        );

        //Check if chat data was updated
        if (!updateChat) {
            throw new Error("Chat data not updated.");
        }

        return updateChat;

    } catch (err) {
        console.error("Error updating chat data:", err.message);
        return null; // Return null in case of errors
    }
};


module.exports = { updateChatData };