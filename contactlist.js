var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var contactlistSchema = new Schema({
    name: String,
    email: String,
    number: String
});

module.exports = contactlistSchema;