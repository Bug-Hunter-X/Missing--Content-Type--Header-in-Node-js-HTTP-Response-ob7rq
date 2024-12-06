const http = require('http');

const server = http.createServer((req, res) => {
  // Handle request
  // ...

  // This line is problematic:
  res.end(); // No content type is specified
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});