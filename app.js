const express =require('express');
const bodyParser = require('body-parser');
const app = express();

const productRoutes = require('./api/routes/products')
const orderRoutes = require('./api/routes/orders')

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use('/products',productRoutes);
app.use('/orders',orderRoutes);


// app.use((req,res,next)=>{
//     res.status(200).json({
//         message: "it works"
//     });

// });


module.exports = app;