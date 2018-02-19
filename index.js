import http from 'http';
import Debug from 'debug';
import app from './app';
import { port } from './config';

const debug = new Debug('almundo-api');
const server = http.createServer(app);

server.listen(port, () => {
  debug(`Server running at port ${port}`);
});
