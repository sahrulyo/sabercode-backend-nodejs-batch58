require('dotenv').config();
const mongoose = require('mongoose');
const express = require('express');
const { error } = require('console');
const app = express();
const port = 3000;

//midlleware
app.use(express.json());


//koneksi database
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB connected');
    } catch (error) {
        console.error('MongoDB connection error:', error);
        process.exit(1);
    }
};

module.exports = connectDB;