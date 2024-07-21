const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    price: {
        type: Number,
        required: true,
        min: [0, 'Price must be a positive number']
    }
}, { timestamps: true });

// Metode kustom (opsional)
productSchema.methods.formatPrice = function () {
    return `$${this.price.toFixed(2)}`;
};

// Index (opsional)
productSchema.index({ name: 1 });

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
