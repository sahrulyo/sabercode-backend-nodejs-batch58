const express = require('express');
const app = express();
app.use(express.json());

const categories = [
    {id: 1, name: 'Elektronik'},
    {id: 2, name: 'Perabotan'}
];

const products = [
    { id: 1, name: 'laptop', category: 'Elektronik'},
    {id: 2, name: 'Meja', category: 'Perabotan'}
];

// Jawaban soal no 1 --------------------------------------------->
// Route GET untuk mengembalikan semua daftar category products
app.get('/api/categories', (req, res) => {
    res.json(categories);
});

// Jawaban soal no 2 --------------------------------------------->
// Route GET untuk mengembalikan detail category berdasarkan ID
app.get('/api/categories/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const category = categories.find(p => p.id === id);
    if (category) {
        res.json(category);
    } else {
        res.status(404).send('Category not found');
    }
});

// Jawaban soal no 3 --------------------------------------------->
// Route POST untuk menambahkan kategori baru ke array
app.post('/api/categories', (req, res) =>{
    const newCategory = {
        id: categories.length + 1,
        name: req.body.name
    };
    categories.push(newCategory);
    res.status(201).json(newCategory);
});

// Jawaban soal no 4 --------------------------------------------->
// Route PUT untuk memperbarui kategori berdasarkan ID
app.put ('/api/categories/:id', (req, res)=> {
    const id = parseInt(req.params.id);
    const categoryIndex = categories.findIndex(p => p.id === id);
    if (categoryIndex !== -1) {
        categories[categoryIndex].name = req.body.name;
        res.json(categories[categoryIndex]);
    } else {
        res.status(404).send('Category not found in this PUT method')
    }
});

// Jawaban soal no 5 --------------------------------------------->
// Route DELETE untuk menghapus kategori berdasarkan ID
app.delete('/api/categories/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const categoryIndex = categories.findIndex(p => p.id === id);
    if (categoryIndex !== -1) {
        res.status(204).send();
    } else {
        res.status(404).send('category not found in this DELETE methoid')
    }
});


// Jawaban soal no 6 --------------------------------------------->
// Route GET dengan query string untuk mencari produk berdasarkan nama
app.get('/api/products', (req, res) => {
    const name = req.query.name;
    if(name) {
        const filterProducts = products.filter(prod => prod.name.toLowerCase().includes(name.toLowerCase()));
        res.json(filterProducts);
    } else {
        res.json(products);
    }
});


// Jawaban soal no 7 --------------------------------------------->
// Route GET dengan parameter dan query string untuk mendapatkan produk dalam kategori tertentu dan mencari berdasarkan nama
app.get('/api/categories/:categoryName/products', (req, res) => {
    const categoryName = req.params.categoryName;
    const name = req.query.name;
    let filteredProducts = products.filter(prod => prod.category.toLowerCase() === categoryName.toLowerCase());
    if(name) {
        filteredProducts = filteredProducts.filter(prod => prod.name.toLowerCase().includes(name.toLocaleLowerCase()));
    }

    res.json(filteredProducts);
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`)
});
