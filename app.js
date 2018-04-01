//using fs we can also create or remove directory

var fs = require('fs');

//for creating directory syncronously, mkdirSync is used
fs.mkdirSync('Public');
fs.mkdirSync('Images');

//for creating directory syncronously, rmdirSync is used
fs.rmdirSync('Public');