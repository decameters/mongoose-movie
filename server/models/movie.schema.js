var mongoose = require('mongoose');
var Schema = mongoose.Schema;


//create a new Schema for movie
var movieSchema = new Schema({
    title: { type: String, required: true, unique: true },
    posterUrl: { type: String },
    description: { type: String }
});

module.exports = mongoose.model('Movie', movieSchema);