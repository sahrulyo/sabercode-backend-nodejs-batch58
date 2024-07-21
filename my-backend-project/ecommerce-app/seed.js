const mongoose = require('mongoose');
const Product = require('./models/Product');
const connectDB = require('./config/db')

const seedProducts = async () => {
    await connectDB();
    
    // Hapus data lama (opsional)
    await Product.deleteMany();

    // Tambahkan produk baru
    const products = [
        { name: 'Product 1', price: 100 },
        { name: 'Product 2', price: 200 },
        { name: 'Product 3', price: 300 }
    ];

    await Product.insertMany(products);
    console.log('Data seeded');
    mongoose.disconnect();
};

seedProducts();