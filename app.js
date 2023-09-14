const path = require('path');

const express = require('express');
const bodyParser = require('body-parser')

const sequelize = require('./util/database')

const app  = express();

const adminRoutes = require('./router/admin')
const shopRoutes = require('./router/shop');
//const router = require('./router/admin');


app.use(bodyParser.urlencoded({extended:false}))


app.use(adminRoutes);
app.use(shopRoutes)

sequelize
.sync()
.then(result =>{
    console.log(result)
    app.listen(3000)
})
.catch(err =>{
    console.log(err)
})



