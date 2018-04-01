var http = require('http');

var server = http.createServer(function(req, res){
    console.log('The request was made from ' + req.url);
    res.writeHead(200, {'Content-Type':'text/plain'});
    res.end('Hey there, this is the nodejs first server');
});

server.listen(3000, '127.0.0.1');
console.log('The application is listening to port 3000');
