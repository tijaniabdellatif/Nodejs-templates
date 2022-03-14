const path = require('path');
const express = require('express');

const app = express();
const __DIRECTORYPATH = path.join(__dirname,'../public'); 
app.use(express.static(__DIRECTORYPATH));

//Making domain app.com
// app.get('/',(req,res) => {
//      res.send(`<h1>Hello world<h1>`);

// });

// app.get('/help',(req,res) => {
//     res.send({

    
//         name:'tijani',
//         age:33
//     });

// })

// app.get('/about',(req,res) => {
//     res.send(`<h1>Hello world from about page <h1>`);

// })


app.get('/weather',(req,res) => {
    res.send(
        {
            forecast:'it s raining',
            localion:'Rabat'
        }
    );

});

app.listen(3000,() => {

     console.log('Server Start on port 3000');
});