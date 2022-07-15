const { app } = require('./app');
const dotenv = require('dotenv');
const { connectToDatabase } = require('./connect-to-db');

dotenv.config();

const PORT = process.env.PORT;
const DB_URI = process.env.DB_URI;

(async () => {
  await connectToDatabase(DB_URI);
  
  app.listen(PORT, () => {
    console.info('Server started...');
  });
})();
