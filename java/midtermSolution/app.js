// *************************************************************
// *************************************************************
//      Midterm Exam
// *************************************************************
// *************************************************************
//  Class Definitions
// *************************************************************
class Animals {
    constructor(animalID, name, age, description, currentCondition, roomNum, adoptable, receivedBy, donatedBy, food, dateRoomCleaned) {
        this.animalID = animalID,
            this.name = name,
            this.age = age,
            this.description = description,
            this.currentCondition = currentCondition,
            this.roomNum = roomNum,
            this.adoptable = adoptable,
            this.dateReceived = dateReceived,
            this.receivedBy = receivedBy,
            this.donatedBy = donatedBy,
            this.food = food,
            this.dateRoomCleaned = dateRoomCleaned
    }

    adoptable () {
        return this.adoptable;
    }

    getRoom () {
        return this.roomNum;
    }

    getAge () {
        return this.age;
    }
}

// *************************************************************
class Dogs extends Animals {
    constructor(animalID, name, age, description, currentCondition, roomNum, adoptable, receivedBy, donatedBy, food, dateRoomCleaned, breed, furORhair, teeth42, dateBrushedTeeth, walkSchedule) {
        super(animalID, name, age, description, currentCondition, roomNum, adoptable, receivedBy, donatedBy, food, dateRoomCleaned),
            this.breed = breed,
            this.furORhair = furORhair,
            this.teeth42 = teeth42,
            this.dateBrushedTeeth = dateBrushedTeeth,
            this.walkSchedule = walkSchedule
    }

    getLastBrushedTeeth () {
        return this.dateBrushedTeeth;
    }

    getWalkSchedule () {
        return this.walkSchedule;
    }
}

// *************************************************************
class Cats extends Animals {
    constructor(animalID, name, age, description, currentCondition, roomNum, adoptable, receivedBy, donatedBy, food, dateRoomCleaned, breed, teeth30, dateGroomed) {
        super(animalID, name, age, description, currentCondition, roomNum, adoptable, receivedBy, donatedBy, food, dateRoomCleaned),
            this.breed = breed,
            this.teeth30 = teeth30,
            this.dateGroomed = dateGroomed
    }

    getdateGroomed () {
        return this.dateGroomed;
    }
}

// *************************************************************
class Reptiles extends Animals {
    constructor(animalID, name, age, description, currentCondition, roomNum, adoptable, receivedBy, donatedBy, food, dateRoomCleaned, species) {
        super(animalID, name, age, description, currentCondition, roomNum, adoptable, receivedBy, donatedBy, food, dateRoomCleaned),
            this.species = species
    }

    getSpecies () {
        return this.species;
    }
}
// *************************************************************
// *************************************************************
class People {
    constructor(fName, lName, primaryAddr, primaryPhone, primaryEmail) {
        this.fName = fName,
            this.lName = lName,
            this.fullName = `${ fName } ${ lName }`,
            this.primaryAddr = primaryAddr,
            this.primaryPhone = primaryPhone,
            this.primaryEmail = primaryEmail
    }

    getContactInfo () {
        return `${ this.fullName } \n${ this.primaryAddr }\n${ this.primaryEmail }\n${ this.primaryPhone }`;
    }
}

// *************************************************************
class Sponsor extends People {
    constructor(fName, lName, primaryAddr, primaryPhone, primaryEmail, sponsorAmount, dateOfDonation) {
        super(fName, lName, primaryAddr, primaryPhone, primaryEmail),
            this.role = 'Sponsor',
            this.sponsorAmount = sponsorAmount,
            this.dateOfDonation = new Date(dateOfDonation)
    }

    isComingDue () {
        let today = new Date();
        let dayOfMonth = today.getDate();
        let sponsorDay = this.dateOfDonation.getDate();
        if (sponsorDay >= dayOfMonth && sponsorDay <= dayOfMonth + 7) {
            return `${ this.fullName }'s Payment of $${ this.sponsorAmount } is coming up in ${ sponsorDay - dayOfMonth } days`;
        }
    }
}

// *************************************************************
class Volunteer extends People {
    constructor(fName, lName, primaryAddr, primaryPhone, primaryEmail, hoursCommitted) {
        super(fName, lName, primaryAddr, primaryPhone, primaryEmail),
            this.role = 'Volunteer',
            this.hoursCommitted = hoursCommitted
    }

    getHours () {
        return `${ fullName } has committed ${ this.hoursCommitted } hours per week`;
    }
}

// *************************************************************
class Staff extends People {
    constructor(fName, lName, primaryAddr, primaryPhone, primaryEmail, startDate) {
        super(fName, lName, primaryAddr, primaryPhone, primaryEmail),
            this.role = 'Staff',
            this.startDate = new Date(startDate)
    }

    getMonthlyPay () {
        let startYear = this.startDate.getFullYear();
        let currentYear = new Date().getFullYear();
        return `${ this.fullName }'s monthly payroll is $${ 800 + (200 * (currentYear - startYear - 1)) }`;
    }
}

// *************************************************************
class Manager extends People {
    constructor(fName, lName, primaryAddr, primaryPhone, primaryEmail, startDate) {
        super(fName, lName, primaryAddr, primaryPhone, primaryEmail),
            this.role = 'Manager',
            this.startDate = new Date(startDate)
    }

    getMonthlyPay () {
        let startYear = this.startDate.getFullYear();
        let currentYear = new Date().getFullYear();
        return `${ this.fullName }'s monthly payroll is $${ 1250 + (450 * (currentYear - startYear - 1)) }`;
    }
}

// *************************************************************
// *************************************************************

//let newPerson = new People('Jack', 'Smith', '123 Main Street, Surrey BC', '(604) 555-1212', 'jsmith@gmail.com');
// let newPerson = new Sponsor('Jack', 'Smith', '123 Main Street, Surrey BC', '(604) 555-1212', 'jsmith@gmail.com', 1500, 'August 29, 2020');

// let newPerson = new Staff('Jack', 'Smith', '123 Main Street, Surrey BC', '(604) 555-1212', 'jsmith@gmail.com', 'August 21, 2014');

let newPerson = new Manager('Jack', 'Smith', '123 Main Street, Surrey BC', '(604) 555-1212', 'jsmith@gmail.com', 'August 21, 2014');

// console.log(newPerson.isComingDue());
// console.log(newPerson.getHours());
console.log(newPerson.getMonthlyPay());
