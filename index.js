// server.mjs
//import { createServer } from 'node:http';
const http = require('http');

function f(req, res) {

   if (req.url === '/' && req.method === 'GET') {
    console.log('main page');
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('<h1>MAIN PAGE</h1>');
  } else if (req.url === '/about' && req.method === 'GET') {
    console.log('about page');
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('<h1>about PAGE</h1>');
  }  else {
    console.log('no page');
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('<h1>404</h1>');
   }
  
}

const server = http.createServer(f);

// starts a simple http server locally on port 3000
server.listen(3000, '127.0.0.1', () => {
  console.log('Listening on 127.0.0.1:3000');
});

// run with `node server.mjs`
