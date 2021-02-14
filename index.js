//const { connection } = require("mongoose");

const express = require('express');
const bodyParser = require('body-parser');
var cors = require('cors');
var app = express();
const { mongoose } = require('./db.js');
var mealsController = require('./controllers/mealsControllers.js');

var app = express();
app.use(cors({origin:'http://localhost:4200',}));
app.use(bodyParser.json());
app.use('/api', mealsController);

app.listen(3000, ()=> console.log('server started at port :3000'));
