/****************************************************** */
// loading Core Modules
/****************************************************** */

const fs = require('fs');
/****************************************************** */
// Loading NPM Modules 
/****************************************************** */



const chalk  = require('chalk'); 
/****************************************************** */
// Loading Custom Modules 
/****************************************************** */
/****************************************************** */
const addNote = (title,body) => {
    const notes = loadNotes();
    let dupNote = false;

    if(notes.length > 0) {
        duplicate = notes.find((note) => note.title === title)
    }
}
 
