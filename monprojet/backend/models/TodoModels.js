//Require Mongoose
var mongoose = require('mongoose');

//Define a schema
var Schema = mongoose.Schema;

var SomeModelSchema = new Schema({
    description: String,
    done: Boolean,
});
var SomeModel = mongoose.model('SomeModel', SomeModelSchema );

module.exports = SomeModel;