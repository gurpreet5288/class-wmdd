const totalEmployee = 0;
const totalVolunteers = 0; 
const AnimalArr = [];
const EmployeeArr = [];
const DonorArr = [];



///**********************************************
///****************Shelter Class*****************
///**********************************************
class Shelter{
    constructor(){ 
    } 
    addNewAnimal(animalId,breed,description,weight,droppedInDate,droppedBy,vaccinationStatus){ 
        this.animalId = animalId ;  
        this.breed = breed ;
        this.description = description ;
        this.weight = weight ;
        this.droppedInDate = droppedInDate ;
        this.droppedBy  = droppedBy ; 
        this.vaccinationStatus  = vaccinationStatus; 
        AnimalArr.push({animalId,breed,description,weight,droppedInDate,droppedBy,vaccinationStatus});
    }
    showAllAnimalData(){
        const fs = require('fs');
        const dataObj = fs.readFileSync('./animal.json','utf8');
        const dataArr = JSON.parse(dataObj);
        console.log(dataArr); 
    }
}


///**********************************************
///****************Employee Class*****************
///**********************************************
class Employee extends Shelter{
    constructor(){
        super(); 
    } 
    addNewEmployee(empID,name,type,designation,startDate,monthlySalary,BonusSalary){ 
        this.empID = empID;
        this.name =  name ;
        this.type = type;
        this.designation = designation;
        this.monthlySalary = monthlySalary;
        this.BonusSalary = BonusSalary;
        this.startDate = startDate;
        EmployeeArr.push({empID,name,type,designation,startDate,monthlySalary,BonusSalary});
        this.totalEmployee += 1;
    } 
    addNewVolunteer(empID,name,designation){
        this.empID = empID;
        this.name = name ;
        this.designation =  designation;
        EmployeeArr.push({empID,name,designation});
        this.totalVolunteers += 1;
    }    
    showAllEmployeeData(){ 
        const fs = require('fs');
        const dataObj = fs.readFileSync('./employee.json','utf8');
        const dataArr = JSON.parse(dataObj);
        console.log(dataArr); 
    }
    employeeMonthlyEarning(empID){  
        const fs = require('fs');
        const dataObj = fs.readFileSync('./employee.json','utf8');
        const EmployeeArr = JSON.parse(dataObj);
        for(let i=0;i<EmployeeArr.length;i++){
           if(EmployeeArr[i].empID == empID){
                console.log(EmployeeArr[i]);
           } 
        }
    }

}


///**********************************************
///****************Donor Class*******************
///**********************************************
class Donor extends Shelter{
    constructor(){
        super();
    } 
    addNewDonor(donorID,name,phoneNumber,amountDonatedMonthly,donationsDate,nextDueDate){
        this.donorID =  donorID ;
        this.name =  name ;
        this.phoneNumber = phoneNumber;
        this.amountDonatedMonthly =   amountDonatedMonthly;
        this.donationsDate =  donationsDate ;
        this.nextDueDate =  nextDueDate ;
        DonorArr.push({donorID,name,phoneNumber,amountDonatedMonthly,donationsDate,nextDueDate});        
    }  
    showAllDonorData(){ 
        const fs = require('fs');
        const dataObj = fs.readFileSync('./donor.json','utf8');
        const dataArr = JSON.parse(dataObj);
        console.log(dataArr); 
    }
    donorDetails(donorID){
        const fs = require('fs');
        const dataObj = fs.readFileSync('./donor.json','utf8');
        const DonorArr = JSON.parse(dataObj);
        for(let i=0;i<DonorArr.length;i++){
            if(DonorArr[i].donorID == donorID){
                console.log(DonorArr[i]) ;
            } 
        }
    } 
    NextDueDonaiton(){
        const fs = require('fs');
        const dataObj = fs.readFileSync('./donor.json','utf8');
        const DonorArr = JSON.parse(dataObj); 
        const mdate = new Date();
        const currentDate = mdate.getDate();
        for(let i=0;i<DonorArr.length;i++){
            if(currentDate < DonorArr[i].nextDueDate ){
                console.log(DonorArr[i]) ;
            } 
        }
    }

}  







///**********************************************
///****************Animal OBJECT***************
///**********************************************
let animal = new Shelter();
/**** show all animals list register in shelter */
//animal.showAllAnimalData(); 



///**********************************************
///****************EMPLOYEE OBJECT***************
///**********************************************
let employee = new Employee();
/**** show all employee/volunteer list register in shelter */
//employee.showAllEmployeeData();  

/**** show specific employee details of shelter */
//employee.employeeMonthlyEarning('EMPS2');




 
///**********************************************
///****************Donor OBJECT***************
///**********************************************
let nDonor = new Donor(); 
/**** show all donors list of shelter */
//nDonor.showAllDonorData(); 

/**** show specific donor details of shelter */
//nDonor.donorDetails('Donor3');

 
/**** show donors list next due date details of shelter */
nDonor.NextDueDonaiton();










