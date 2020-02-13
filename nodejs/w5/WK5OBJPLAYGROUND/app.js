const fs = require('fs');

const userObj = fs.readFileSync('./users.json','utf8');

const userArr = JSON.parse(userObj);

console.log(userArr);