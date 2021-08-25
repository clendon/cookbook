const express = require('express');
const db = require('../database');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(express.static(__dirname + '/../client/dist'));

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}.`);
});