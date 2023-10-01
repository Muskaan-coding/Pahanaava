var mongoose = require('mongoose');

var contentSchema = new mongoose.Schema({
    imghref: String,
    prod_name: String,
    price:String,
    href:String
});

var wholeSchema = new mongoose.Schema({
    title:String,
    content:[contentSchema]
});

mongoose.model('contents', wholeSchema);