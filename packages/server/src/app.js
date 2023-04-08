import express from 'express';

export class App {
  constructor() {
    // Init server
    this.host = express();

    // CORS fix
    this.host.use((req, res, next) => {
      res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
      res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
      res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
      next();
    });

    this.host.get('/', (req, res) => {
      res.send('Hello World!');
    });
  }

  listen() {
    this.host.listen(4000, () => {
      console.info(`🚀 http://localhost:4000`);
      console.info(`========================`);
    });
  }
}
