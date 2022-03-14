const request = require('request');

const API_KEY = '1df5ba9c1add2f73fb2f1eebe871a25b';
const API_KEY2 = 'pk.eyJ1Ijoia3JhdG9zMjMiLCJhIjoiY2wwcHo1NjZ2MDF4ajNxc2RtajQ0MHQwbCJ9.G2d-HBDf1LcruFgr_zYvAw';

const BASE_URI2= 'https://api.mapbox.com/geocoding/v5/mapbox.places/'
const BASE_URI = 'http://api.weatherstack.com/current?';

const endpoint = `${BASE_URI}access_key=${API_KEY}&query=Rabat&units=m`;
const endpoint2 = `${BASE_URI2}Rabat.json?access_token=${API_KEY2}&limit=1`;
request({ url:endpoint,json:true },(error,response) => {
    const {weather_descriptions,temperature,feelslike} = response.body.current;
      console.log(weather_descriptions[0] +' it is currently '+ temperature + ' may be a precip with : '+feelslike);
      
      
});


//GeoCoding API
//Address => lat/long ->Weather
request({url:endpoint2,json:true },(error,response) => {

    const {center} = response.body.features[0];
    console.log('the latitude is :'+center[0]+' '+'The longitude is : '+ center[1]);
})
