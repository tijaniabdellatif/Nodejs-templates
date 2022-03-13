const getNotes = require('./notes');
const chalk = require('chalk');
const yargs = require('yargs');
yargs.version('1.1.0');


// Creat add command
yargs.command({
     command:'add',
     describe:'Add a new note',
     builder:{
        title:{

            describe:'Note title',
            demandOption:true,
            type:'string'
        }
     },
     handler:function(argv){

          console.log('Title : '+ argv.title)
     }
     
});


//create remove command
yargs.command({

    command:'delete',
    describe:'Deleting a note',
    handler:function(){

        console.log(chalk.black.bgRed.bold('removing new note'));
    }
})

// list 
yargs.command({

    command:'list',
    describe:'list notes',
    handler:function(){

        console.log(chalk.black.bgYellow.bold('listing  notes'));
    }
})

// read

// list 
yargs.command({

    command:'read',
    describe:'read a note',
    handler:function(){

        console.log(chalk.black.bgYellow.bold('reading a  note'));
    }
})

yargs.parse();
// console.log(yargs.argv);

// Procces
// const command = process.argv[2];
// console.log(process.argv);

// if (command === 'add'){

//     console.log(chalk.green('The user is adding notes'));
//     console.log(chalk.black.bgWhite.bold('Adding notes'));
// }

// else if(command === 'remove'){

//     console.log(chalk.red('The user is deleting notes'));
//     console.log(chalk.black.bgRed.bold('deleting  notes'));
// }

// else if(command === 'update'){

//     console.log(chalk.yellow('The user is adding notes'));
//     console.log(chalk.black.bgYellow.bold('Adding notes'));
// }

// else {

//     console.log(chalk.blue('The user havent decided yet'));
//     console.log(chalk.black.bgBlue.bold('decisions ....'));
// }
