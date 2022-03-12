const getNotes = require('./notes');
const chalk = require('chalk');
// const { processExpression } = require('@vue/compiler-core');
// console.log(getNotes());
// console.log(chalk.blue.bgRed.bold('Hello world'));

// console.log(`
// CPU: ${chalk.red('90%')}
// RAM: ${chalk.green('40%')}
// DISK: ${chalk.yellow('70%')}
// `);

// Procces
const command = process.argv[2];

if (command === 'add'){

    console.log(chalk.green('The user is adding notes'));
    console.log(chalk.black.bgWhite.bold('Adding notes'));
}

else if(command === 'remove'){

    console.log(chalk.red('The user is deleting notes'));
    console.log(chalk.black.bgRed.bold('deleting  notes'));
}

else if(command === 'update'){

    console.log(chalk.yellow('The user is adding notes'));
    console.log(chalk.black.bgYellow.bold('Adding notes'));
}

else {

    console.log(chalk.blue('The user havent decided yet'));
    console.log(chalk.black.bgBlue.bold('decisions ....'));
}
