var fs = require('fs');

var text = fs.readFileSync(process.argv[2], 'utf-8');
var linesOfText = text.split('\n').length - 1;

console.log(linesOfText);