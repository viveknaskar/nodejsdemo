var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res){
    console.log('The request was made from ' + req.url);
    res.writeHead(200, {'Content-Type':'application/json'});
    var myObj = {
        name: 'Vivek',
        job: 'Developer',
        country: 'India'
    };
    res.end(JSON.stringify(myObj)); /*here we can pass only string or buffer, so we are making the JSON as string */
   
});

server.listen(3000, '127.0.0.1');
console.log('The application is listening to port 3000');
