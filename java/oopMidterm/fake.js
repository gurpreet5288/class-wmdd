const fs = require('fs');
const faker = require('faker');

let animal = [];
let employee = [];
let nDonor = [];

listbr = ['cat','dog','reptile'] ;
listvbr = ['unknown', 'current', 'needed'];
 
for(let id=1;id<=15;id++){
    animal.push({
        'animalId': 'An'+id,
        'breed': listbr[Math.floor(Math.random() * 3)],
        'weight':   faker.random.number(),
        'droppedInDate':  faker.date.past(),
        'droppedBy' :  faker.name.firstName(),  
        'description' : faker.lorem.sentence(),
        'vaccinationStatus' : listvbr[Math.floor(Math.random() * 3)]  
    })
} 
  
for(let id=1;id<=2;id++){
    employee.push({
        'empID':  'EMPM'+id,
        'name':faker.name.firstName(),
        'type':'staff',
        'designation':'manager',
        'startDate' : faker.date.past(),
        'monthlySalary'  :'1250',
        'BonusSalary' :'450',
    })
}
for(let id=1;id<=6;id++){
    employee.push({
        'empID':  'EMPS'+id,
        'name':faker.name.firstName(),
        'type':'staff',
        'designation':'member',
        'startDate' : faker.date.past(),
        'monthlySalary'  :'800',
        'BonusSalary' :'200',
    })
}

for(let id=1;id<=75;id++){
    employee.push({
        'empID':  'Vol'+id,
        'name':faker.name.firstName(),
        'type': 'volunteer',
        'designation':'',
        'startDate' : '',
        'monthlySalary'  :'',
        'BonusSalary' :'',
    })
}
 
for(let id=1;id<=100;id++){
    nDonor.push({
        'donorID': 'Donor' + id,
        'name':faker.name.firstName(),
        'phoneNumber':faker.phone.phoneNumber(),
        'amountDonatedMonthly':faker.finance.amount(),
        'donationsDate' : faker.date.past(),
        'nextDueDate' : faker.date.future(),
    })
}   
fs.writeFileSync('animal.json',JSON.stringify(animal,null, '\t'));
fs.writeFileSync('employee.json',JSON.stringify(employee,null, '\t'));
fs.writeFileSync('donor.json',JSON.stringify(nDonor,null, '\t'));