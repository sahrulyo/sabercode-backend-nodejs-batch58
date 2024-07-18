import express from 'express'

const app = express();
const port = 3000;

app.get ('/', (req, res) => {
    res.send ('hello world');
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
  });

import { MongoClient } from 'mongodb';

const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

async function connectDB() {
    try {
        await client.connect();
        console.log('connected to MongoDB');
    } catch (error) {
        console.error('Could not connect to MongoDB', error)
    }
}

connectDB()