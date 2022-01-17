const express = require('express');
const dotenv = require('dotenv');
const db = require('./config/db.config');
const taskController = require('./controllers/task.controller');

// Load all environment variables from .env
dotenv.config();

// Connect to MongoDB cluster
db.connect();

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).send('Hello World!');
});

app.use('/task', taskController);

app.listen(PORT, () => {
  console.log(`Server currently listening to http://localhost:${PORT}.`);
});

module.exports = app;
