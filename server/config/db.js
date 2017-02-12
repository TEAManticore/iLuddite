const connection = process.env.MONGODB_URI;
const mongoose = require('mongoose');
mongoose.Promise = global.Promise
const db = mongoose.connect(connection);

module.exports = db;
