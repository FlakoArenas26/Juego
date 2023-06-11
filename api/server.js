const express = require('express');
const app = express();
const cors = require('cors');
const mysql = require('mysql2');

app.use(cors());
app.use(express.json());

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'match_battle_game'
});

connection.connect((err) => {
  if (err) {
    console.error('Error al conectar a la base de datos: ', err);
    return;
  }
  console.log('Conexión exitosa a la base de datos');
  
  // Crear la tabla games si no existe
  connection.query(`CREATE TABLE IF NOT EXISTS games (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    code VARCHAR(255) NOT NULL,
    rol VARCHAR(255) NOT NULL,
    PRIMARY KEY (id)
  )`, (err, result) => {
    if (err) {
      console.error('Error al crear la tabla games: ', err);
      return;
    }
    console.log('Tabla games creada o ya existente');
  });
});

app.post('/games', (req, res) => {
  const game = req.body;
  console.log('Partida recibida: ', game);
  connection.query('INSERT INTO games SET ?', game, (err, result) => {
    if (err) {
      console.error('Error al guardar la partida: ', err);
      res.status(500).json({ message: 'Error al guardar la partida' });
      return;
    }
    console.log('Partida guardada en la base de datos');
    res.json({ message: 'Partida creada', game: game });
  });
});

app.get('/games', (req, res) => {
  connection.query('SELECT * FROM games', (err, result) => {
    if (err) {
      console.error('Error al obtener los juegos: ', err);
      res.status(500).json({ message: 'Error al obtener los juegos' });
      return;
    }
    console.log('Juegos obtenidos de la base de datos');
    res.json(result);
  });
});


const server = app.listen(3000, () => {
  console.log('Servidor web iniciado en el puerto 3000');
});

server.on('close', () => {
  console.log('Conexión a la base de datos cerrada');
  connection.end();
});

process.on('SIGINT', () => {
  console.log('Aplicación terminada');
  server.close();
});
