var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Using nodejs\n');
}).listen(3721, "127.0.0.1");
console.log('Server running at http://127.0.0.1:3721/');
