console.log("Node.js labsheet 03 - Git and GitHub flows");

const fs = require('fs');
fs.readFile('file.txt', 'utf8', function (err, data) {
if (err) throw err;
console.log(data);
});