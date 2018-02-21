import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import path from 'path';
import { hotel } from './routes';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

if (process.env.NODE_ENV === 'development') {
  app.use((req, res, next) => {
    res.setHeader('Access-Contro-Allow-Origin', '*');
    res.setHeader('Access-Contro-Allow-Headers', 'Origin, X-Request-With, Content-Type, Accept, Authorization');
    res.setHeader('Access-Contro-Allow-Methods', 'POST, GET, PUT, DELETE');
    next();
  });
}

app.use('/api/v1', hotel);

app.get('/', (req, res) => {
  res.sendFile(path.join(`${__dirname}/index.html`));
});

export default app;
