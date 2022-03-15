const endpoint = 'https://puzzle.mead.io/puzzle';
const forcast = 'http://127.0.0.1:3000/weather?address=Rabat';

// fetch(endpoint).then((response) => {

//    response.json().then((data) => {

//     console.log(data);
//    })

// }).catch((error) => {

//     console.log(error);

// })


const fetchData = async (uri) => {

    const response = await fetch(uri);
    if(!response.ok){
        console.log('Unable to reach the server');
    }
    else if(response.status === 200 && response.ok){
        const data = await response.json();
        return data;
    }
    else {
        console.log('Something went wrong');
    }
   
}

//  fetchData(endpoint).then((data) => {
   
// });

fetchData(forcast).then(data => {

    if(data.error){

        console.log(data.error);
    }
    else {

        console.log(data.location);
        console.log(data.forcast);
    }
})

