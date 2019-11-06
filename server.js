const express = require('express');
const cors= require('cors');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

//Iniciando o App
const app = express();
app.use(express.json());
app.use(cors());

//Iniciando o DB
mongoose.connect("mongodb+srv://mongodb:3MLMPykuDfiRjrHH@clusternode-api-eiabw.mongodb.net/test?retryWrites=true&w=majority", { useNewUrlParser: true });

requireDir('./src/models');

//Rotas
app.use('/api', require('./src/routes'));

app.listen(3001); 
