
import path from 'path';
import * as dotenv from 'dotenv'


dotenv.config({ path: path.resolve(__dirname, './utils/.env') });

console.log('DATABASE_URL:', process.env.DATABASE_URL); 
import express from 'express';
import connectDB from './utils/database';
import routes from '../routes';
import bodyParser from 'body-parser';

const app = express();
const PORT = 3002;

connectDB();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api", routes);

app.get('/preview', (req, res) => {
    res.sendFile(path.join(__dirname, '../src/public', 'index.html'));
  });

  app.get('/hello', (req, res) => {
    res.sendFile(path.join(__dirname, '../src/public', 'index5.html'));
  });

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
