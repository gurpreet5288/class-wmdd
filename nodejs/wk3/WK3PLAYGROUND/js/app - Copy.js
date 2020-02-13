/*const utils = require('./utils');
console.log(utils.add(2,3));
console.log(utils.test);*/




const chalk  = require('chalk'); 
/****************************************************** */
// loading Core Modules
/****************************************************** */


/****************************************************** */
// Loading NPM Modules 
/****************************************************** */



const yargs  = require('yargs'); 
/****************************************************** */
// Loading Custom Modules 
/****************************************************** */
const notes = require('./notes.js'); // this is a local file



// const notes = require('./notes');
//console.log(process.argv[2]);

// if(process.argv[2] ==='add'){
//     console.log('record added');
// }else if(process.argv[2] ==='edit'){
//     console.log('record edited'); 
// }else if(process.argv[2] ==='delete'){
//     console.log('record deleted'); 
// }else{
//     console.log('undefined');
// }   
/*console.log(yargs.argv);
if (yargs.argv.item2 > 3) {
console.log('Plunder more riffiwobbles!')
} else {
console.log('Retreat from the xupptumblers!')
}*/





yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder : {
        title :{
            describe:  'Note  Title',
            demandOption : true,
            type:'string'

        }
    },
    handler: (argv) => {
        console.log(`Adding the New Note: ${argv.title}`)
    } 
}) 

yargs.command({
    command: 'delete',
    describe: 'delete a new note', 
    handler: (argv) => {
        console.log(`delete the New Note: ${argv.title}`)
    } 
} )

yargs.parse();



