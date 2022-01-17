const mongoose = require('mongoose');

/**
 * Connects to the MongoDB cluster
 */
function connect() {
  console.log(process.env.MONGO_DB_URI);
  mongoose.connect(process.env.MONGO_DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  mongoose.connection.once('open', async () => {
    console.log('Connected to database.');
  });

  mongoose.connection.on('error', (err) => {
    console.log('Error connecting to database.');
    console.log(err);
  });
}

/**
 * Closes the MongoDB cluster connection
 */
function close() {
  if (!mongoose.connection) {
    return;
  }

  mongoose.disconnect();

  mongoose.once('close', async () => {
    console.log('Diconnected from database.');
  });
}

module.exports = { connect, close };
