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

    Price: 
    {
        type: Number,
        required: true,
        minimum: 0
    },

    NumberCharacters: {
        type: Number,
        min: 0,
        max: 5
    },

    Background: {
        type: String,
        enum: ['No-background', 'Simple-background', 'complex background']
    },

    Image: 
    {
        url: String
    }

});

module.exports = mongoose.model('Product', productSchema);