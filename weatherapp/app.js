const helpers = require('./utils/utils');


helpers.geoCode('Boston',(error,data) => {
console.log('Error',error);
console.log('Data',data);
});

// request({ url:endpoint,json:true },(error,response) => {
    
//     if(error){
//          console.log('Unable to connect to api services');
//     }else if(response.body.error){

//         console.log('Unable to find location');
//     }
//     else {
//         const {weather_descriptions,temperature,feelslike} = response.body.current;
//         console.log(weather_descriptions[0] +' it is currently '+ temperature + ' may be a precip with : '+feelslike);

//     }
     
      
      
// });



// //GeoCoding API
// //Address => lat/long ->Weather
// request({url:endpoint2,json:true },(error,response) => {

//     if(error){

//         console.log('Enable to connect to weather Service')
//     }
//     else if(response.body.features.length === 0){

//         console.log('Unable to find location, Try another Search');
//     }
//     else {
//         const {center} = response.body.features[0];
//         console.log('the latitude is :'+center[0]+' '+'The longitude is : '+ center[1]);

//     }
   
// })

// axios.get(endpoint,{
//     headers:{
//         'Content-type':'application/json'
//     }
// }).then(response => {

//     console.log(response);
// }).catch(error => {

//     console.log(error);
// });