const express = require('express');

const app = express();
const PORT = 8080;

app.get('/test', (req, res) => {
  res.status(200).send('Hello World!');
});

app.listen(PORT, () => {
  console.log(`Server currently listening to http://localhost:${PORT}`);
});

module.exports = app;
