/**
 * Author: Lucas Gabriel Silva
 * GitHub: https://github.com/LucasGSilva21
 */

require('dotenv/config');
const mongoose = require('mongoose');

mongoose.connect(process.env.DB, { 
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
});
mongoose.Promise = global.Promise;

module.exports = mongoose;
