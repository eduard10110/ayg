const mongoose = require('mongoose');

mongoose.connection.on('error', (err) => {
  console.error('Mongo connection error:', err);
});

function connectToDatabase(DB_URI) {
  return new Promise((resolve, reject) => {
    mongoose.connect(DB_URI, { useNewUrlParser: true }, (err) => {
      if (err) {
        console.error('Error during connectin to mongodb:', err);
        process.exit(1);
      }

      console.info('Successfully connected to database');
      resolve();
    });
  })
}

module.exports = {
  connectToDatabase,
}