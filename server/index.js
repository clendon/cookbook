const express = require('express');
const morgan = require('morgan');
const db = require('../database');
const addRecipe = require('../database/controllers/addRecipe.js');
const getRecipes = require('../database/controllers/getRecipes.js');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(morgan('dev'));

app.use(express.static(__dirname + '/../client/dist'));

app.get('/get-recipes', (req, res) => {
  getRecipes()
    .then((results) => { res.status(200).send(results); })
    .catch((error) => { res.status(400).send(error.stack); })
});

app.post('/add-recipe', (req, res) => {
  addRecipe(req.body)
    .then((results) => { res.status(201).send(results); })
    .catch((error) => { res.status(400).send(error.stack); })
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}.`);
});