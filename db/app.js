const mysql = require('mysql')
const con = mysql.createConnection({
    host: 'test4.wmdd.ca',
    database: 'test4_4920' ,
    user: 'db-user-t4'  ,
    password : 'wmdd_4920@uzr'
})


//let q = 'SELECT CURDATE() AS date';
//let q = 'SELECT 1 + 4 AS sum';
//let q = 'SELECT COUNT(custID) AS NumCusts FROM customer';
let q = 'SELECT firstName,lastName,emailAddr FROM customer,email WHERE customer.custID= email.custID AND customer.custID=3';

con.query(q,(err,res)=>{
    if(err) { throw err; }

  //  console.log(`The result is: ${res[0].date}`)
  //  console.log(`The result is: ${res[0].sum}`)
   // console.log(`The result is: ${res[0].NumCusts}`)
    console.log(res)
})

con.end()