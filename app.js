var fs = require('fs');

var readfile = fs.readFileSync('readMe.txt', 'utf8');
//readFileSync method reads the file syncronously meaning it wont go to other code/lines until the method is fully executed.

fs.writeFileSync('writeMe.txt', readfile);
