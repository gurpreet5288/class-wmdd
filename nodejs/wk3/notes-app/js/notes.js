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

/*************************add note*****************************/
const addNote = (title,body) => {
    const notes = loadNotes();
    let dupNote = false;

    if(notes.length > 0) {
        dupNote = notes.find((note) => note.title === title)
    }

    if(!dupNote){
        notes.push({
            title : title,
            body : body
        })
        console.log(chalk.green.inverse('New Note Added!'))
        saveNotes(notes);
    }else{
        console.log(chalk.red.inverse('Title already exists!'))
    }

}

/*************************remove note*****************************/
const removeNote = (title) => {

    const notes = loadNotes();
    const allNotes = notes.filter((note) => note.title !== title);

    if (notes.length !== allNotes.length) {
        console.log(chalk.green.inverse('Note Removed!'));
        saveNotes(allNotes);
    } else {
        console.log(chalk.red.inverse('No Note Found!'));
    }   
}

/*************************list notes*****************************/ 
const listNote = () => {
    const notes = loadNotes(); 
    console.log(notes);
}



/*************************read note*****************************/ 
const readNote = (title) => {
    const notes = loadNotes(); 
    const result = notes.filter(note => note.title === title);
    if(result.length){
        console.log(result);
    }else{
        console.log(chalk.red.inverse('Title does not exists!'))
    }
     
}

/*************************change note*****************************/  
const changeNote = (title, num, text) => {
    const notes = loadNotes();
    const result = notes.find((note) => note.title === title);

    let allNotes;
    let note;

    if (result) { 
        allNotes = notes.filter((note) => note.title !== title); 
        note = notes.filter((note) => note.title === title);

        if (num === '1') { 
            note[0].title = text;
        } else if (num === '2') { 
            note[0].body = text;
        } else {  
            console.log(chalk.red(' Invalid Number Entered:'));
            console.log(chalk.green.inverse('  Please enter 1 to change Title, or 2 to change Body ')); 
            return; 
        }
    } else {  
        console.log(chalk.red(' Note Does not Exist:')); 
        return;  
    }

    allNotes.push(note[0]);
    saveNotes(allNotes);
    console.log(chalk.green.inverse('Note Updated!'));
}




const loadNotes = () => {
    try{
        return JSON.parse(fs.readFileSync('notes.json').toString())
    }catch{
        return[]
    }
}

const saveNotes = (notes) =>{
    fs.writeFileSync('notes.json', JSON.stringify(notes))
}
 

module.exports={
    addNote,
    removeNote,
    listNote,
    readNote,
    changeNote
}