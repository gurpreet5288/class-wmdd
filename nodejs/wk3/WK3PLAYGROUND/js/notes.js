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
 

/*************************list*****************************/ 
const listNote = () => {
    const notes = loadNotes(); 
    console.log(notes);
}


/*************************read*****************************/ 
const readNote = (title) => {
    const notes = loadNotes(); 
    const result = notes.filter(note => note.title === title);
    if(result.length){
        console.log(result);
    }else{
        console.log(chalk.red.inverse('Title does not exists!'))
    }
     
}



/*************************remove*****************************/ 





/*************************change*****************************/  




module.exports={
    addNote,listNote,
    readNote

}