const express = require('express');
const cors= require('cors');
const mongoose = require('mongoose');
const requireDir = require('require-dir');
const MongoClient = require('mongodb').MongoClient;

//Iniciando o App
const app = express();
app.use(express.json());
app.use(cors());

//Iniciando o DB
const uri = "mongodb+srv://mongodb:mongodbapp@clusternode-api-eiabw.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});


requireDir('./src/models');

//Rotas
app.use('/api', require('./src/routes'));

app.listen(3001); 
