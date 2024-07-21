const express = require('express');
const connectDB = require('./config/db');
const logger = require('./middlewares/logger');
const auth = require('./middlewares/auth');
const errorHandler = require('./middlewares/errorHandler');
const productRoutes = require('./routes/products');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors')

mongoose.set('strictQuery', false);

dotenv.config();

const app = express();

connectDB();

app.use(express.json());

app.use(cors());

app.use(logger);

app.use(auth);

app.use('/products', productRoutes);

// Menambahkan route untuk path root
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.get('/preview', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
  });
  

app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
