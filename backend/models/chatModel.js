const mongoose = require('mongoose');

const chatSchema = mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', // Reference to the User model
        required: true,
        index: true // Add index for faster queries
    },
    chat_title: {
        type: String,
        required: true
    },
    chat_messages: {
        type: Array,
        required: true
    },
    date: {
        type: Date,
        default: Date.now,
        index: true // Add index for faster queries
    },
    schema_version: {
        type: Number,
        default: 1
    }
});

const chatModel = mongoose.model('Chat', chatSchema);

module.exports = chatModel;
