const express = require('express');
const port = process.env.PORT || 3000;
const {loadData} = require('./function');

const app = express();
app.use(express.json());

app.get('/data',async (req,res) => {

   
    const data =  await loadData('./docs/delivery.json');

    try {

        res.status(200).send(data);

    }catch(error){

        res.status(500).send({

            status:req.statusCode,
            error
        })
    }
   
})



app.listen(port,() => {

      console.log('the application is running on port : '+ port);

})