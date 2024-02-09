const mongoose = require('mongoose');

mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost:27017/book-serach-db',
  {
    dbName: "book-search-db",
  }
);

module.exports = mongoose.connection;