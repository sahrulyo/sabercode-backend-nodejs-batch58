//jawaban soal 1 ----> command node app.js
console.log("Hello, NodeJS!");

//jawaban soal 2 --- > import dari server.js
const { startServer } = require ('./server')
startServer();

//jawaban no. 3
const angka1 = 5;
const angka2 = 10;
const myModule = require ('./myModule');

const jumlah = myModule.jumlahDuaAngka ( angka1, angka2);

console.log(jumlah);