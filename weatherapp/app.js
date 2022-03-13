const chalk = require('chalk');


console.log('Front end is waiting for request the UI waiting the data...');
setTimeout(() => {
    console.log('Starting the request to the server');
    setTimeout(() => {
        console.log('getting data from server');
        setTimeout(() => {
            console.log(chalk.black.bgGreen('Printing data to user'));
            setTimeout(() => {
                 console.log(chalk.red.inverse('Server Stopping',[]));
            },1000);
        },2300)
    },2000)
    setTimeout(() => {
       console.log('Rendering the UI...');
    },2000); 
},1500);


