const express = require('express');
const app = express ();
const port = 3000;

app.use((req, res, next) => {
    console.log(`${req.method} request for '${req.url}'`);
    next();
});

app.get( '/',(req, res) => {
    res.send('Hello Express');
});

// Route untuk /about
app.get('/about', (req, res) => {
    res.send('About Page');
  });
  
  // Route untuk /contact
  app.get('/contact', (req, res) => {
    res.send('Contact Page');
  });
  

app.listen(port, () =>{
    console.log(`Listening on port http://localhost:${port}`);
});

// const express = require('express');
// const path = require('path');
// const app = express();
// const port = 3000;

// // Middleware untuk log setiap permintaan
// app.use((req, res, next) => {
//   console.log(`${req.method} request for '${req.url}'`);
//   next();
// });

// // Melayani file statis dari direktori "public"
// app.use(express.static(path.join(__dirname, 'public')));

// app.listen(port, () => {
//   console.log(`Server is running at <http://localhost>:${port}`);
// });
