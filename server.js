const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 3000;
const file = fs.readFileSync(path.join(__dirname, 'Alexia et Lily.html'));

http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
  res.end(file);
}).listen(PORT, () => console.log('Listening on port ' + PORT));
