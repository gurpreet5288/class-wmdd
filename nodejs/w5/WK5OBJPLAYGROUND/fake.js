const fs = require('fs');
const faker = require('faker');

let users = [];

for(let id=1;id<=100;id++){
    users.push({
        'id': id,
        'userName':faker.internet.userName(),
        'fname':faker.name.firstName(),
        'lname':faker.name.lastName(),
        'email' : faker.internet.email()
    })
}

fs.writeFileSync('users.json',JSON.stringify(users,null, '\t'));