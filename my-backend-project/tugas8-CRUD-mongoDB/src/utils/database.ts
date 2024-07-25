import dotenv from 'dotenv';
dotenv.config();

import mongoose from 'mongoose';

const connectDB = () => {
  const dbUrl = process.env.DATABASE_URL as string; 
  mongoose.connect(dbUrl)
    .then(() => {
      console.log('Connected to MongoDB');
    })
    .catch((error) => {
      console.error('Error connecting to database:', error);
    });
};

export default connectDB;
