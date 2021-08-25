const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/cookbook', { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

db.on('error', (error) => {
  console.log('Mongoose connection error:', error.stack);
})

db.once('open', () => {
  console.log('Mongoose connected successfully.');
});

module.exports = db;