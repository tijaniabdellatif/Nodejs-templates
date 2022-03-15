const request = require('request');

const __KEY = 'pub_54914ffefa206bd297ec0e024e7c778dbf85';
const __URI = 'https://newsdata.io/api/1/news?apikey=';
const __URI2 = 'https://newsdata.io/api/1/sources?apikey=';

const getArticle = (callback) => {

    const endpoint = `${__URI}${__KEY}`;
    request({url:endpoint,json:true},(error,response) => {

        const {results,status} = response.body;
    
        if(error){

            callback('Unable to connect to location',undefined)
        }
        else if(results.length === 0){

            callback('No data provided for now',undefined);
        }
        else {
            callback(undefined,{

                status:status,
                news:results,

           })
        }
        
    })

}

const getByCountry = (country,callback) => {

    const endpoint = `${__URI2}${__KEY}&country=${encodeURIComponent(country)}`;

    request({url:endpoint,json:true},(error,response) => {

        const {results} = response.body;
        console.log(results);

        if(error){

            callback('Unable to connect to location',undefined);

        }

        else if(results.length === 0){

            callback('Unable to find the results check another type of country',undefined);
        }

        else{

            callback(undefined,{

                  results
            })
        }
    })

}

module.exports={

    getArticle,
    getByCountry
};