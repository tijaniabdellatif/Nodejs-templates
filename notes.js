const fs = require('fs');
const chalk = require('chalk');
const { printTable } = require('console-table-printer');

const getNotes = () => {

    return 'Your notes ....';

}

const addNotes = (title,body) => {

      const notes = loadNotes();
      const duplicateNotes = notes.filter(element =>  element.title === title);
      if(duplicateNotes.length === 0){
        notes.push({title,body});

        console.log(chalk.black.bgYellow('Success'));
        saveNotes(notes,'Note saved');
       
        
      }
      else {
        console.log(chalk.hex('#000').bgRed('Error !!'))
        console.log(chalk.red('Duplicate note'));
      }
    
     
}

const loadNotes = () => {
    try{
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJson = dataBuffer.toString();
        return JSON.parse(dataJson);
    }catch(e){
           console.log(chalk.yellow('Warning !!'));
           console.log(chalk.black.bgRed.bold('no data provided for now'));
           return [];
    }
   

}

const saveNotes = function(notes,message){

    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json',dataJSON);
    console.log(chalk.black.bgGreen(message));
}


const deleteNotes = (title) => {

    const notes = loadNotes();
    const keepNotes = notes.filter(note => note.title !== title);
    (keepNotes.length < notes.length) ? saveNotes(keepNotes,'Note removed') : console.log(chalk.red.inverse('no note found'));

}

const listNotes = () => {


     const notes = loadNotes();
     printTable(notes);
}


module.exports = {
    
    getNotes,
    addNotes,
    deleteNotes,
    listNotes
};