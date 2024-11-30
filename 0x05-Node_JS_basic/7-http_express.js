const express = require('express');
const countStudents = require('./3-read_file_async');

const app = express();
const port = 1245;

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  const databasePath = process.argv[2];
  if (!databasePath) {
    res.status(400).send('Error: Missing database path');
    return;
  }

  countStudents(databasePath)
    .then((message) => {
      res.send(`This is the list of our students\n${message}`);
    })
    .catch((error) => {
      res.status(500).send(`Error: ${error.message}`);
    });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

module.exports = app;
