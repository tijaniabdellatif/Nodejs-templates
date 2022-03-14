const helpers = require('./utils/utils');
const address = process.argv[2];
const chalk= require('chalk');

if(!address){

    console.log(chalk.white.bgRed.bold('Please provide an adresse'));
}
else {

    helpers.geoCode(address,(error,data) => {

        if(error){
    
            return console.log(chalk.white.bgRed(error));
        }
        
            const {latitude,longitude,location} = data;
            helpers.forcast(latitude,longitude,(error,forcastData) => {
            
                if(error){
    
                    return console.log(chalk.white.bgRed(error));
    
                }
                console.log(chalk.white.bgGreen.bold(location));
                console.log(chalk.white.inverse(forcastData));
            })  
    });
}




