const https = require('https');

const API_KEY2 = 'pk.eyJ1Ijoia3JhdG9zMjMiLCJhIjoiY2wwcHo1NjZ2MDF4ajNxc2RtajQ0MHQwbCJ9.G2d-HBDf1LcruFgr_zYvAw';
const BASE_URI2= 'https://api.mapbox.com/geocoding/v5/mapbox.places/'
const endpoint2 = `${BASE_URI2}Rabat.json?access_token=${API_KEY2}&limit=1`;
const request = https.request(endpoint2,(response) => {

  let data = '';
  response.on('data',(chunk) => {
     
    data = data + chunk.toString();
   
  })

  response.on('end',() => {
      const body = JSON.parse(data);
      console.log(body);
  })
});

request.on('error',(error) => {

console.log('an error',error);
});
request.end();