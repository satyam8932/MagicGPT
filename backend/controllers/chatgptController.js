const { fetchUserData, fetchChatData } = require('../utils/fetchData');
const { createChatData } = require('../utils/createData');
const { updateChatData } = require('../utils/updateData');
const openai = require('openai');
const dotenv = require('dotenv');

// Importing environment variables
dotenv.config();

// Initialize OpenAI client
const client = new openai.OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const chatgptController = async (req, res) => {
  try {
    // Extract User Prompt from the Request
    const userPrompt = req.body.user_prompt;

    // Extract chatgpt model if provided otherwise default to gpt-3.5-turbo
    const aiModel = req.body.ai_model ? req.body.ai_model : "gpt-3.5-turbo";

    // Get current user_id for chatmessage using user mail
    const users = await fetchUserData(req.body.user_email);

    // Handle the case when the user is not found
    if (!users) {
      return res.status(404).json({ error: 'User not registered.' });
    }

    // Retrieve chatmessage using user_id
    let chats = await fetchChatData(users._id);

    // Get Chat Title (truncate if longer than 30 characters)
    const chatTitle = userPrompt.length > 30 ? `${userPrompt.slice(0, 27)}...` : userPrompt;

    // If chat is empty or doesn't exist, create a new one with the system message
    if (!chats) {
      const systemMessage = {
        role: "system",
        content: "You are a helpful assistant who helps everyone with their tasks and responds politely in markdown format"
      };
      chats = await createChatData(users._id, chatTitle, [systemMessage]);
    }

    // Prompt template
    let promptTemplate = [
      ...(chats.chat_messages || []), // Spread the existing chat messages from the database, or an empty array if chat_messages is undefined
      {
        role: "user",
        content: userPrompt
      }
    ];

    // Send the last 10 messages to the OpenAI API
    const response = await client.chat.completions.create({
      model: aiModel,
      messages: promptTemplate.slice(-10)
    });

    // Parse messages from the ai response
    const responseMessage = response.choices[0].message;

    // Add the response message to the promptTemplate if it exists, otherwise return an error message
    if (responseMessage) {
      promptTemplate = [...promptTemplate, responseMessage];
    } else {
      return res.status(500).json({ error: 'Failed to generate response.' });
    }

    // Update the chat_messages array in the database
    const updatedChat = await updateChatData(users._id, promptTemplate)

    // Handle the case when the chat is not found after the update
    if (updatedChat) {
      res.status(200).json({ messages: updatedChat.chat_messages });
    } else {
      res.status(404).json({ error: 'Chats not found.' });
    }
    
  } catch (err) {
    console.error(err); // Log the error for debugging purposes
    res.status(500).json({ error: 'An internal server error occurred.' });
  }
};

module.exports = chatgptController;