import express from 'express';
import {createServer} from 'http';
import {HOST, PORT} from './config/constants.js';
const api = express();

api.use(express.json());

api.get('/', (req, res) => {
  res.status(200).json({
    info: {
      server: "JSON API",
      host: HOST, 
      port: PORT,
    }
  })
})



const server = createServer(api);
export default server;
