/******************** Load Core Modules Here **********************/
const fs = require('fs');
/******************** Load NPM Modules Here ***********************/
const chalk = require('chalk');
/******************** Load Custom Modules Here ********************/
/******************** End of Modules ******************************/
/******************************************************************/

/******************************************************************/
/******************** Define Private Functions ********************/
/******************************************************************/
const loadWords = () => {

    try {
        // get the words, convert to String, Then parse it
        return JSON.parse(fs.readFileSync('words.json').toString()); // returns a JSON object
    } catch (e) {
        return [];
    }
}

const saveWords = (words) => {
    fs.writeFileSync('words.json', JSON.stringify(words));
}


/******************************************************************/
/******************** Define Public Functions *********************/
/******************************************************************/

/******************** Define "viewWord" Function ******************/
const viewWord = (word) => {
    const words = loadWords();

    const foundWord = words.find((item) => item.word === word);

    if (foundWord) {
        console.log(chalk.green.inverse('Note Found!'));
        console.log('Word: ' + chalk.bold(foundWord.word));
        for (let i = 0; i < foundWord.def.length; i++) {
            console.log('def ' + chalk.bold(i + 1) + ': ' + foundWord.def[i]);
        }
        console.log('-----------------------------------------------------');
    } else {
        console.log(chalk.red.inverse('Word Not Found'));
    }
}

/******************** Define "listWords" Function *****************/
const listWords = () => {
    const words = loadWords();

    console.log(chalk.inverse('Here is a list of Words in the Dictionary:'))

    return words.filter((item) => console.log(item.word));
}

/******************** Define "addWord" Function *******************/
const addWord = (word, def) => {

    const words = loadWords();

    let dupWord = false;

    if (words.length > 0) {
        dupWord = words.find((item) => item.word === word);
    }

    if (!dupWord) {
        words.push({
            word: word,
            def: [def]
        });
        console.log(chalk.green.inverse('New Word Added!'));
        saveWords(words);
    } else {
        console.log(chalk.red.inverse('Word already exists'));
    }
}

/******************** Define "addDef" Function ********************/
const addDef = (word, def) => {

    const words = loadWords();

    let wordFound = false;

    if (words.length > 0) {
        wordFound = words.indexOf(words.find((item) => item.word === word));
        console.log(wordFound);
    }

    if (wordFound >= 0) {
        words[words.indexOf(words.find((item) => item.word === word))].def.push(def);
        console.log(chalk.green.inverse('New Definition Added!'));
        saveWords(words);
    } else {
        console.log(chalk.red.inverse('Word doesn\'t exist, please add it'));
    }
}

/******************** Define "changeWord" Function ***************/
const changeWord = (word, newWord) => {

    const words = loadWords();

    const wordFound = words.indexOf(words.find((item) => item.word === word));
    console.log(wordFound);

    if (wordFound >= 0) {
        words[wordFound].word = newWord;
        console.log(chalk.green.inverse('Word Changed!'));
        saveWords(words);
    } else {
        console.log(chalk.red.inverse('Word not Found!'));
    }
}

/******************** Define "changeDef" Function ****************/
const changeDef = (word, defNum, newDef) => {

    const words = loadWords();

    const wordFound = words.indexOf(words.find((item) => item.word === word));

    if (wordFound >= 0) {
        words[wordFound].def[defNum - 1] = newDef;
        console.log(chalk.green.inverse('Definition Changed!'));
        saveWords(words);
    } else {
        console.log(chalk.red.inverse('Word not Found!'));
    }
}

/******************** Define "changeWord" Function ***************/
const deleteWord = (word) => {

    const words = loadWords();

    const keptWords = words.filter((item) => item.word !== word);

    if (words.length !== keptWords.length) {
        console.log(chalk.green.inverse('Word Removed!'));
        saveWords(keptWords);
    } else {
        console.log(chalk.red.inverse('Word not Found!'));
    }
}

/******************** Define "changeWord" Function ***************/
const deleteDef = (word, defNum) => {

    const words = loadWords();

    const wordFound = words.indexOf(words.find((item) => item.word === word));

    if (wordFound >= 0) {
        words[words.indexOf(words.find((item) => item.word === word))].def.splice(defNum - 1);
        console.log(chalk.green.inverse('Definition Removed!'));
        saveWords(words);
    } else {
        console.log(chalk.red.inverse('Word not Found!'));
    }
}

module.exports = {
    viewWord,
    listWords,
    addWord,
    addDef,
    changeWord,
    changeDef,
    deleteWord,
    deleteDef
}

