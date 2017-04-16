'use strict';

// Dependencies
var User = require('../models/user');

function read(req, res) {
  if (!req.payload._id) {
    res.status(401).json({
      'message' : 'UnauthorizedError: private profile'
    });
  } else {
    User
      .findById(req.payload._id)
      .exec(function(err, user) {
        res.status(200).json(user);
      });
  }
}
function destroy(req, res) {
  User
    .findByIdAndRemove(req.params.userId, function(err, user){
      if (err) {
        res.status(500).send(err);
      } else {
        res.json(user);
      }
    });
  }

module.exports = {
  delete: destroy,
  read: read
};
