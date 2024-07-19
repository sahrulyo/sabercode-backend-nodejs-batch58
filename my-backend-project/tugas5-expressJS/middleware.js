const express = require('express');
const app = express ();
const port = 3002;

app.use((req, res, next) => {
    console.log(`${req.method} request for '${req.url}'`);
    next();
});

app.get( '/',(req, res) => {
    res.send('Hello Express');
});

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
  

app.listen(port, () =>{
    console.log(`Listening on port http://localhost:${port}`);
});