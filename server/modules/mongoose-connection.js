function connect(){
    var mongoose = require('mongoose');
    
    // MONGOOSE CONNECTION
    var databaseUrl = 'mongodb://localhost:27017/movies';
    mongoose.connect(databaseUrl);
    
    mongoose.connection.on('connected', function(){
        console.log('mongoose connected to :', databaseUrl);
    });
    
    mongoose.connection.on('error', function(error){
        console.log('mongoose connection error', error);
    });
}

module.exports = {
    connect: connect
};