const fs = require('fs');
const chalk = require('chalk');

const getNotes = () => {

    return 'Your notes ....';

}

const addNotes = (title,body) => {

      const notes = loadNotes();
      const duplicateNotes = notes.filter((element => {

          return element.title === title;
      }));

      if(duplicateNotes.length === 0){
        notes.push({title,body});
        saveNotes(notes);
        console.log(chalk.green.bgYellow('Success'));
        console.log(chalk.green('New note added'));
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

const saveNotes = function(notes){

    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json',dataJSON);
}


const deleteNotes = (title) => {

    const notes = loadNotes();
    const keepNotes = notes.filter(note =>{

          return note.title !== title
    });
   
    if(keepNotes.length < notes.length){


        console.log(chalk.black.bgGreen('The note is removed'));
        saveNotes(keepNotes);
    }
    else {

        console.log(chalk.red.inverse('no note found'));
    }


   
}


module.exports = {
    
    getNotes,
    addNotes,
    deleteNotes
};