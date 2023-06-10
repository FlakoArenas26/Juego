const express = require('express');
const app = express();
const cors = require('cors');

const cards = require('./cards');

app.use(cors());

app.get('/cards', (_req, res) => {
  console.log('Solicitud recibida para la ruta /cards');
  res.json(cards);
});
  

app.listen(3000, () => {
  console.log('Servidor web iniciado en el puerto 3000');
});
