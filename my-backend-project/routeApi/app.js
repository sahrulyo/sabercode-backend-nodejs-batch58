const express = require('express');
const app = express();
const port = 3003;

// Middleware
app.use(express.json());

// Mengimpor usersRouter dari file users.js
const usersRouter = require('./routes/users');

// Menggunakan usersRouter
app.use('/users', usersRouter);

// Rute dasar untuk tes
app.get('/', (req, res) => {
    res.send('Hello World');
});

app.listen(port, () => {
    console.log(`Server berjalan di http://localhost:${port}`);
});
