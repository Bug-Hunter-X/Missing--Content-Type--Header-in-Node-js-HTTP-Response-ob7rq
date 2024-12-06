const http = require('http');

const server = http.createServer((req, res) => {
  // Set the content type
  res.setHeader('Content-Type', 'text/plain');

  res.end('Hello, world!');
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});