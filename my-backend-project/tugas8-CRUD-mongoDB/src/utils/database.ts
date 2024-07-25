import mongoose from 'mongoose';

const connectDB = () => {
  const dbUrl = process.env.DATABASE_URL as string;
  if (!dbUrl) {
    throw new Error('DATABASE_URL is not defined in environment variables');
  }
  mongoose.connect(dbUrl)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to database:', error);
  });
};

export default connectDB;
