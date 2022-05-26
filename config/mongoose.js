const mongoose  = require('mongoose');

mongoose.connect('mongodb://localhost/toDoList_development');
const db = mongoose.connection;

db.on('error', console.error.bind(console, "Error connecting in database"));

db.once('open', function(){
    console.log("Connected successfull");
})

module.exports = db;