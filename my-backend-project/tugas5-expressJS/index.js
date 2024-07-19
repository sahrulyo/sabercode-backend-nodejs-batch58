//jawaban soal 1 ----------------> proyek express pasa port 3000

const express = require('express');
const app = express();
const path = require('path');
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello World!');
});

// jawaban soal 2 --------------> /hello & /user

     // Melayani file statis dari direktori "public"
    app.use(express.static(path.join(__dirname, 'public')));

    // Route untuk /hello
    app.get('/hello', (req, res) => {
        res.send({
        "message": "Success fetch message",
        "data": "Hello World!"
    });
      });
      
      // Route untuk /user
      app.get('/user', (req, res) => {
        res.send({
            "message": "Success fetch user",
        "data": {
            "id": 1,
            "name": "Budi",
            "username": "budidu",
            "email": "budidu@mail.com"
        }
        });
      });

// jawaban soal 3 ------------------> express static dari productList.html

    // Menambahkan rute 
    app.get('/product', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'productList.html'));
    });
      

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
