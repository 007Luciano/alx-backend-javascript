const http = require('http');

const app = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello Holberton School!');
});

const port = 1245;

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

module.exports = app;
