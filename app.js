var fs = require('fs');

var readfile = fs.readFileSync('readMe.txt', 'utf8');

console.log(readfile);
