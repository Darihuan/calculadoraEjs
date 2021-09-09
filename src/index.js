//includes
const express = require('express');
const cors = require('cors');
require('dotenv').config({path: "./db.env"});
const bodyParser = require('body-parser');

//inicialization
const SERVERPORT = process.env.PORT || 3030;
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use(cors());

//set ejs como gestor plantillas

app.set('view engine', 'ejs');
app.set('views', './src/views');

//endpoints
app.use(require('./controller/index'));


//server
app.listen(SERVERPORT, () => {
    console.log("SERVER IS LISTEN ON PORT:", SERVERPORT);
})