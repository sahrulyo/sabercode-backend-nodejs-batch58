// const express = require('express');
// const validateRequest = require('../middlewares/validateRequest');
// const router = express.Router();

// const products = [
    
//         { name: 'Lemon Tea', price: 100 },
//         { name: 'Lechee Tea', price: 150 },
//         { name: 'Orange Juice', price: 200 },
//         { name: 'Mango Guava', price: 250 },
//         { name: 'Strawberry', price: 300 }
// ];

// // Mendapatkan semua produk
// router.get('/', (req, res) => {
//     res.json(products);
// });

// // Menambahkan produk baru
// router.post('/', validateRequest, (req, res) => {
//     const { name, price } = req.body;
//     const newProduct = { id: products.length + 1, name, price };
//     products.push(newProduct);
//     res.status(201).json(newProduct);
// });

// module.exports = router;

const express = require('express');
const validateRequest = require('../middlewares/validateRequest');
const Product = require('../models/Product');
const router = express.Router();

// Mendapatkan semua produk
router.get('/', async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Mendapatkan produk berdasarkan ID
router.get('/:id', async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) {
            return res.status(404).json({ error: 'Product not found' });
        }
        res.json(product);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Menambahkan produk baru
router.post('/', validateRequest, async (req, res) => {
    try {
        const { name, price } = req.body;
        const newProduct = new Product({ name, price });
        await newProduct.save();
        res.status(201).json(newProduct);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Memperbarui produk berdasarkan ID
router.put('/:id', validateRequest, async (req, res) => {
    try {
        const { name, price } = req.body;
        const product = await Product.findByIdAndUpdate(
            req.params.id,
            { name, price },
            { new: true, runValidators: true }
        );
        if (!product) {
            return res.status(404).json({ error: 'Product not found' });
        }
        res.json(product);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Menghapus produk berdasarkan ID
router.delete('/:id', async (req, res) => {
    try {
        const product = await Product.findByIdAndDelete(req.params.id);
        if (!product) {
            return res.status(404).json({ error: 'Product not found' });
        }
        res.json({ message: 'Product deleted' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
