const fs = require("fs");
//fs.writeFileSync('node.txt', 'this is content of new file that we are creating');
// fs.appendFileSync('node.txt', '\nhere is some more data to append'); 
let myfile;
let log =console.log;
try{
    myfile = fs.openSync('node.txt','a');
    fs.appendFileSync('node.txt', '\nhere is some more data to append!'); 
    log("operation was successful!");
}catch(e){
    log("operation failed.");
}finally{
    if(myfile !=='undefined'){
        fs.closeSync(myfile);
    }
}
