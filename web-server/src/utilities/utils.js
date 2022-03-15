
const request = require('request');
const API_KEY = '1df5ba9c1add2f73fb2f1eebe871a25b';
const API_KEY2 = 'pk.eyJ1Ijoia3JhdG9zMjMiLCJhIjoiY2wwcHo1NjZ2MDF4ajNxc2RtajQ0MHQwbCJ9.G2d-HBDf1LcruFgr_zYvAw';
const BASE_URI2= 'https://api.mapbox.com/geocoding/v5/mapbox.places/'
const BASE_URI = 'http://api.weatherstack.com/current?';

const geoCode = (address,callback) => {

    const endpoint2 = `${BASE_URI2}${encodeURIComponent(address)}.json?access_token=${API_KEY2}&limit=1`;
    
    request({url:endpoint2,json:true},(error,response) => {
        
        const {features} = response.body;
    
        if(error){
            callback('Unable to connect to Location services',undefined);
        }
        else if(features.length === 0){

            callback('Unable to find location, Try another Search',undefined);
        }
        else{
            console.log(features[0].place_name);
            callback(undefined,{
                latitude:features[0].center[1],
                longitude:features[0].center[0],
                location:features[0].place_name
            });
        }

     });

}

const forcast = (lat,long,callback) => {
    const endpoint = `${BASE_URI}access_key=${API_KEY}&query=${encodeURIComponent(lat)},${encodeURIComponent(long)}&units=f`;
    request({url:endpoint,json:true},(error,response) => {

        if(error){
            callback('Unable to connect to Location services',undefined);
        }
        else if(response.body.error){

            callback('Unable to find location, try another search',undefined);
        }
        else{

            console.log(response.body.current);
            const {weather_descriptions
                ,temperature,
                feelslike,
                weather_icons,
                wind_speed,
                wind_degree,
                humidity,
                precip,
                pressure
            } = response.body.current;
            callback(undefined,{

                description:weather_descriptions[0],
                icon:weather_icons[0],
                wind:{
                    speed:wind_speed,
                    degree:wind_degree
                },

                humidity:humidity,
                temperatur:{

                    actual:temperature,
                    feels:feelslike
                },

                precip:precip,
                pressure:pressure

            })
        }

     });

}


module.exports = {

    geoCode,
    forcast

};