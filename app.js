const getNotes = require('./notes');
const chalk = require('chalk');
// const validator = require('validator');


console.log(getNotes());
console.log(chalk.blue.bgRed.bold('Hello world'));

console.log(`
CPU: ${chalk.red('90%')}
RAM: ${chalk.green('40%')}
DISK: ${chalk.yellow('70%')}
`);


console.log(chalk.rgb(123, 45, 67).underline('Underlined reddish color'));
console.log(chalk.hex('#DEADED').bold('Bold gray!'));
// console.log(validator.isURL('https://www.google.com'));
// const firstname = 'Tijani';
// console.log(firstname);
// console.log(lastName);
//  const sum = add(4,2);
// console.log(sum);