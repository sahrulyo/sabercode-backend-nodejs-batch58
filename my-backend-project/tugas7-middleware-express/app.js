const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const multer = require('multer');
const cloudinary = require ('cloudinary');
const { CloudinaryStorage } = require('multer-storage-cloudinary');
require('dotenv').config();
const path = require('path');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(cors());

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: 'uploads',
        allowed_formats: ['jpg', 'png']
    },
});

const upload = multer({ storage: storage });

let products = [
    { id: 1, name: 'Laptop', price: 1000, image: '', images: [] },
    { id: 2, name: 'Phone', price: 500, image: '', images: [] }
];

// GET semua produk
app.get('/api/products', (req, res) => {
    res.json(products);
});

app.get('/api/products/test', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index2.html'));
});

// POST produk baru dengan upload gambar single
app.post('/api/products/single', upload.single('image'), (req, res) => {
    const newProduct = {
        id: products.length ? products[products.length - 1].id + 1 : 1,
        name: req.body.name,
        price: req.body.price,
        image: req.file ? req.file.path : '',
        images: []
    };
    products.push(newProduct);
    res.status(201).json(newProduct);
});

// POST produk baru dengan upload multiple gambar
app.post('/api/products/multiple', upload.array('images', 10), (req, res) => {
    const newProduct = {
        id: products.length ? products[products.length - 1].id + 1 : 1,
        name: req.body.name,
        price: req.body.price,
        image: '',
        images: req.files ? req.files.map(file => file.path) : []
    };
    products.push(newProduct);
    res.status(201).json(newProduct);
});

// PUT update produk dengan upload gambar single
app.put('/api/products/:id/single', upload.single('image'), (req, res) => {
    const productId = parseInt(req.params.id);
    const productIndex = products.findIndex(p => p.id === productId);
    if (productIndex !== -1) {
        products[productIndex] = { 
            id: productId, 
            name: req.body.name, 
            price: req.body.price,
            image: req.file ? req.file.path : products[productIndex].image,
            images: products[productIndex].images 
        };
        res.json(products[productIndex]);
    } else {
        res.status(404).json({ message: 'Product not found' });
    }
});

// PUT update produk dengan upload multiple gambar
app.put('/api/products/:id/multiple', upload.array('images', 10), (req, res) => {
    const productId = parseInt(req.params.id);
    const productIndex = products.findIndex(p => p.id === productId);
    if (productIndex !== -1) {
        products[productIndex] = { 
            id: productId, 
            name: req.body.name, 
            price: req.body.price,
            image: products[productIndex].image,
            images: req.files ? req.files.map(file => file.path) : products[productIndex].images 
        };
        res.json(products[productIndex]);
    } else {
        res.status(404).json({ message: 'Product not found' });
    }
});

// DELETE produk
app.delete('/api/products/:id', (req, res) => {
    const productId = parseInt(req.params.id);
    products = products.filter(p => p.id !== productId);
    res.status(204).send();
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});