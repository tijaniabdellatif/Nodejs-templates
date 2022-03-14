const path = require('path');
const express = require('express');
const hbs = require('hbs');
const app = express();

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

    if(!req.query.location){
         return res.send({
            error:'You must provide a location'
         })
    }

    res.send(
        {
            forecast:'it s raining',
            location:req.query.location
        }
    );

});
// app.get('/products',(req,res) => {
   
//     // query parameters
   

//     if(!req.query.search){


//         return res.send({

//           error:'you must provide a search term'
//         });
//     }

//     console.log(req.query.search);
//     res.send({

//        products:[]
//     })
// })


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