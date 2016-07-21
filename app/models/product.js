'use strict';

// Dependencies
var mongoose = require( 'mongoose' );

var productSchema = new mongoose.Schema({
    Title: 
    {
        type: String,
        unique: true,
        required: true,
        index: true
    },
    Description: 
    {
        type: String,
        required: true
    },
    Price: 
    {
        type: Number,
        required: true,
        minimum: 0

    },
    Image: 
    {
        url: String
    }

});
module.exports = mongoose.model('Product', productSchema);