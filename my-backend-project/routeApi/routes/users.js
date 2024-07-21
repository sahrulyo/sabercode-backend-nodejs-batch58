const express = require('express');
const router = express.Router();

let users = [
    { id: 1, name: 'John', age: 20 },
    { id: 2, name: 'Mike', age: 30 },
    { id: 3, name: 'Jane', age: 25 },
];

// Mengambil daftar pengguna
router.get('/', (req, res) => {
    res.json(users);
});

// Mengambil pengguna berdasarkan ID
router.get('/:id', (req, res) => {
    const user = users.find(u => u.id === parseInt(req.params.id));
    if (!user) return res.status(404).send('Pengguna tidak ditemukan');
    res.json(user);
});

// Menambah pengguna
router.post('/', (req, res) => {
    const user = {
        id: users.length + 1,
        name: req.body.name,
        age: req.body.age // Tambahkan age jika diperlukan
    };
    users.push(user);
    res.status(201).json(user);
});

// Mengupdate pengguna
router.put('/:id', (req, res) => {
    const user = users.find(u => u.id === parseInt(req.params.id));
    if (!user) return res.status(404).send('Pengguna tidak ditemukan');

    user.name = req.body.name;
    user.age = req.body.age; // Tambahkan age jika diperlukan
    res.json(user);
});

// Menghapus pengguna
router.delete('/:id', (req, res) => {
    const userIndex = users.findIndex(u => u.id === parseInt(req.params.id));
    if (userIndex === -1) return res.status(404).send('Pengguna tidak ditemukan');

    users.splice(userIndex, 1);
    res.status(204).send();
});

module.exports = router;
