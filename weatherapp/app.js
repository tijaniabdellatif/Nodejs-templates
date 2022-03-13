const request = require('request');

const API_KEY = '1df5ba9c1add2f73fb2f1eebe871a25b';
const BASE_URI = 'http://api.weatherstack.com/current?';
const endpoint = `${BASE_URI}access_key=${API_KEY}&query=37.8267,-122.4233`;

request({ url:endpoint },(error,response) => {

       const data = JSON.parse(response.body); 
       console.log(data.current);
       console.log(data.location)
});