'use strict'

//Model
var Product = require('../models/product');

function create(req, res) {
    var newProduct = new Product(req.body);
    newProduct.save(function(err, product) {
        if (err) {
            res.status(500).send(err);
        } else {
            res.json(product);
        }
    });
}

module.exports = {
    create: create
}