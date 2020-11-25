const express = require('express');
const app = express();
// const controller = require('./controllers/controller');
const { getFruits, failedReq } = require('./controllers/controller');

// console.log(controller)

const SERVER_PORT = 5050;

app.get('/fruits', getFruits);

app.get('*', failedReq)

app.listen( SERVER_PORT, () => console.log(`Server jamming on ${SERVER_PORT} FM`));