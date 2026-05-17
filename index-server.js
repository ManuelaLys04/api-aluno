 const {createServer} = require('http');

let server = createServer((request, response) => {
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write('<h1>Hello, world!</h1><p>Projeto node</p>');
    response.end();
})

server.listen(3002);
console.log("Projeto iniciado!")