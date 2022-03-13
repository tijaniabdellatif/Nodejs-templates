const notes = require('./notes');
const chalk = require('chalk');
const yargs = require('yargs');
const { argv } = require('yargs');
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
        },

        body:{

            describe:'note body',
            demandOption:true,
            type:'string'
        }
     },

     handler:function(argv){

        notes.addNotes(argv.title,argv.body);
        //   console.log('Title : '+ argv.title);
        //   console.log('\n the body is : '+ argv.body);
     }
     
});


//create remove command
yargs.command({

    command:'delete',
    describe:'Deleting a note',
    builder:{

        title:{
            describe:'Note note',
            demandOption:true,
            type:'string'
        },
       
    },
    handler:function(argv){
        notes.deleteNotes(argv.title);
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
