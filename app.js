var http = require('http');
var fs = require('fs');

// a pipe is an elegant way of reading data from stream and writing it.
// pipes only works on readable streams

var server = http.createServer(function(req, res){
    console.log('The request was made from ' + req.url);
    res.writeHead(200, {'Content-Type':'text/html'});
    var myReadStream = fs.createReadStream(__dirname + '/index.html', 'utf8');
    myReadStream.pipe(res);
});

server.listen(3000, '127.0.0.1');
console.log('The application is listening to port 3000');
