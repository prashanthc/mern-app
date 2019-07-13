const config = require('../config.json');
const mongoose =  require('mongoose');

mongoose.connect(process.env.MONGODB_URI || config.connectionString, {useCreateIndex: true, useNewUrlParser: true});
mongoose.connection.on("error", error => {    
    console.log("Database connection error:", error);    
    databaseConnection = "Error connecting to Database";
});

mongoose.Promise = global.Promise;

module.exports = {
    User: require('../users/user.model'),
    Thread: require('../threads/threads.model')
};