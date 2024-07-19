const express = require('express');
const path = require('path');
const app = express();
const port = 3001;

// Middleware 
app.use((req, res, next) => {
  console.log(`${req.method} request for '${req.url}'`);
  next();
});

// Melayani file statis dari direktori "public"
app.use(express.static(path.join(__dirname, 'public')));

// Menambahkan rute 
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'productList.html'));
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
