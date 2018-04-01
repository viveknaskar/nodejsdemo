var fs = require('fs');

// readFileSync method reads the file syncronously meaning it wont go to other code/lines until the method is fully executed.
// We must use non-blocking code always readFile and writeFile are asynchronous methods

fs.readFile('readMe.txt', 'utf8', function(err, data){
    fs.writeFile('writeMe.txt', data);
});

