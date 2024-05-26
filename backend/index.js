const express = require('express');
const dotenv = require('dotenv');
const connectMongoDB = require('./config/connectDB'); 
const corsOptions = require('./config/corsOptions');
const chatgptRouter = require('./routes/chatgptRoute')
const signupRouter = require('./routes/signupRoute');
const cors = require('cors');

// Initialize Express
const app = express();

// Using Environment Variables
dotenv.config()
const PORT = process.env.PORT || 4000;
const MONGODB_URI = process.env.MONGODB_URI;

// Connect to MongoDB
connectMongoDB(MONGODB_URI);

// Setting Middlewares
app.use(cors(corsOptions));
app.use(express.json());

// Get
app.get('/', (req, res ) => {
  res.send('Welcome to ChatGPT! backend');
});


// Defining Routes

// ChatGPT routes
app.use('/api/v1/', chatgptRouter);     // AI Response + Chat History + DB save

// User Routes
app.use('/api/v1/', signupRouter);      // SignUp a User


// Login and Signup routes
// app.use('/api/v1/', userRouter);


// Server Start
app.listen(PORT);
