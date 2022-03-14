const path = require('path');
const express = require('express');

const app = express();
const __DIRECTORYPATH = path.join(__dirname,'../public'); 

app.set('view engine','hbs');
app.use(express.static(__DIRECTORYPATH));

app.get('',(req,res) => {

    res.render('index',{

          title:'Weather App',
          name:'Tijani Abdellatif'
    });

})
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