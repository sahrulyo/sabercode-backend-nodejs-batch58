
//jawaban soal 2
const http = require ('http');

const server = http.createServer((req, res) => {
    setTimeout (() => {
        res.writeHead (200, {'content-type': 'text/plain'});
        res.end ('Hello, Bung!\\\\n');
    }, 1000 )
})

const startServer = () => {
server.listen(3002, () => {
    console.log('Server running at http://localhost:3002');
  });
};

module.exports = {
    startServer
}