const http = require("http");

const server=http.createServer((req,res) => {
    req.writeHead(200,{'content-type':'text/plain'});
    res.end("Hlo this is Node JS Server");
});

const port = 3000;

server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});