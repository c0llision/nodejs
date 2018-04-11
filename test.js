var http = require('http');
var dt = require('./module');
var url = require('url');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("The date and time are currently: " + dt.myDateTime());
    res.write(req.url);

    res.end('Hello World!2');
}).listen(8080); 
