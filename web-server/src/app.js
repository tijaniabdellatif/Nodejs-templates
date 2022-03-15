const path = require('path');
const express = require('express');
const hbs = require('hbs');
const app = express();
const weather = require('./utilities/utils');

/* Define paths for express config */
const __DIRECTORYPATH = path.join(__dirname,'../public'); 
const __VIEWS = path.join(__dirname,'../templates/views');
const __PARTIAL = path.join(__dirname,'../templates/partials');

/* setup handle bar engine and views location */
app.set('view engine','hbs');
app.set('views',__VIEWS);
hbs.registerPartials(__PARTIAL);

/* Setup static directory to serve */
app.use(express.static(__DIRECTORYPATH));

app.get('',(req,res) => {

    res.render('index',{

          title:'Weather App',
          name:'Tijani Abdellatif'
    });

})

app.get('/about',(req,res) => {


    res.render('about',{

          title:'About - informations',
          name:'Tijani Abdellatif'
    });

});

app.get('/help',(req,res) => {

    res.render('help',{

          descirption:'this is a description',
          title:'Help - F&Q',
          name:'Tijani Abdellatif'
    });

});



 app.get('/weather',(req,res) => {

    if(!req.query.address){

        return res.send({

            error:'You must provide an addresse'

        });
    }

    weather.geoCode(req.query.address,(error,{latitude,longitude,location}) => {

        if(error){

            return res.send({ error })
        }

        weather.forcast(latitude,longitude,(error,data) => {

              if(error){

                return res.status(404).send({error})
              }

              res.status(200).send({
                  forcast:data,
                  location,
                  address:req.query.address
              })
        })

    })
});

app.get('/help/*',(req,res) => {
    res.render('404',{
      description:'Help article note found',
      status:404,
      title:'Page 404'
    })
})


app.get('*',(req,res) => {
      res.render('404',{
        description:'Page not Found',
        status:404,
        title:'Page 404'
      })
})
app.listen(3000,() => {

     console.log('Server Start on port 3000');
});