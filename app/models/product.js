'use strict';

// Dependencies
var mongoose = require( 'mongoose' );

var productSchema = new mongoose.Schema({
    ArtType: 
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

    NumberCharacters: {
        type: Number,
        min: v => Math.round(v),
        max: 5
    },

    Background: {
        type: String,
        enum: ['No-background', 'Simple-background', 'Complex-background',]
    },

    ExampleImage: 
    {
        url: String
    }

});

module.exports = mongoose.model('Product', productSchema);