const fs = require('fs');

const userObj = fs.readFileSync('./users.json','utf8');
const userArr = JSON.parse(userObj);

 /*   function fun1(){
        const data1={}; 
        JSON.parse(userObj, (key, value) => {
          //  data1 +={value.userName}; 
          console.log(userObj.userName);
        }); 
        
    } 
 fun1();*/


class business{
    constructor(){

    }
    fun1(){ 
        var obj;
        for(let i=0;i<userArr.length;i++){
            obj += {userName : userArr[i].userName};
        } 
        console.log(JSON.parse(obj));
    } 
}

let obj = new business();
obj.fun1();