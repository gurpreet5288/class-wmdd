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
 





yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder : {
        title :{
            describe:  'Note  Title',
            demandOption : true,
            type:'string' 
        },
        body : {
            describe : 'Body of the Note',
            demandOption : true, 
            type:'string' 
        }
    },
    handler: (argv) => {
       // console.log(`Adding the New Note: ${argv.title}`)
       notes.addNote(argv.title,argv.body)
    } 
}) 

yargs.command({
    command: 'remove',
    describe: 'remove a new note', 
    builder : {
        title :{
            describe:  'Note  Title',
            demandOption : true,
            type:'string' 
        } 
    },
    handler: (argv) => {
       // console.log(`remove the New Note: ${argv.title}`)
       notes.removeNote(argv.title);
    } 
} )

yargs.command({
    command: 'list',
    describe: 'list the notes', 
    handler() { 
        notes.listNote();
     } 
 })

yargs.command({
    command: 'read',
    describe: 'read the notes', 
    handler() { 
        notes.listNote();
    },
    builder : {
        title :{
            describe:  'Note  Title',
            demandOption : true,
            type:'string' 
        } 
    },
    handler: (argv) => { 
       notes.readNote(argv.title);
    } 
 })


 
yargs.command({
    command: 'change',
    describe: 'Change a Note',  
    builder : {
        title :{
            describe:  'Note  Title',
            demandOption : true,
            type:'string' 
        },
        item :{
            describe:  'Change  Title (1) or Body (2)',
            demandOption : true,
            type:'string' 
        }, 
        text:{
            describe:  'Text to change to',
            demandOption : true,
            type:'string' 
        }
    },
    handler: (argv) => { 
       notes.changeNote(argv.title,argv.item,argv.text);
    }
})
yargs.parse();



