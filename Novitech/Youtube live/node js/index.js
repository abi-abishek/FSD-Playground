// Importing the http module
const http = require('http');

// Creating a simple server
const server = http.createServer((req, res) => {
    // Handling incoming requests
    res.writeHead(200, {'Content-Type': 'text/plain'});
});

// Setting the port for the server to listen on 
const port = 4000;

// Making the server listen on the specified port
server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});