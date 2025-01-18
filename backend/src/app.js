const express = require('express');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const connectDB = require('./db/mongoose');
const User = require('./models/userModel');
const Question = require('./models/questionModel');
const Answer = require('./models/answerModel');
const morgan = require('morgan');
const path = require('path');
const authMiddleware = require('./middlewares/authMiddleware');
const cors = require('cors');
require('dotenv').config();

const app = express();
connectDB();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(morgan('dev'));
app.use(cors());

console.log("In app.js")
// Routes
const authRoutes = require('./routes/authRoutes');
const profileRoutes = require('./routes/profileRoutes');
const questionRoutes= require('./routes/questionRoutes')


app.use('/api/auth', authRoutes);
app.use('/api/dashboard', profileRoutes);
app.use('/api/question', questionRoutes);

app.get('/',(req,res)=>{
    res.send("hello ons lash route");
})

app.get('/posts', (req, res) => {
    res.send('Hello World');
});


// Example protected route
app.get('/api/protected', authMiddleware, (req, res) => {
    res.json({ message: 'This is a protected route', user: req.user });
});


module.exports = app;
