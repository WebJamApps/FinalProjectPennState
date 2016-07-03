/**
 * Created by jnevins on 5/23/16.
 */
var User = require('mongoose').model('User'),
    encrypt = require('../common/encryption');


exports.readUser = function(request, response, next) {

};

exports.createUser = function(request, response, next) {
    var userData = request.body;
    console.log(request.body);

    //TODO: add a validation function
    userData.email = userData.email.toLowerCase();
    userData.salt = encrypt.createSalt();
    userData.password_hash = encrypt.hashPassword(userData.salt, userData.password);
    // if(userData.accountType == "band"){
    //   userData.accountType = "Band Manager";
    // }else if(userData.accountType == "venue"){
    //   userData.accountType = "Venue Manager";
    // }

    User.create(userData, function(error, user) {
        //TODO: clean this stuff up
        if(error){
        console.log(error.toString());
      }
        if(error) {
            if(error.toString().indexOf('E11000') > -1) {
                error = new Error('email already in use.');
            }
            response.status(400);
            return response.send({reason:error.toString()});
        } else {
            response.status(200);
            response.send(user);
        }
    })
};

exports.updateUser = function() {

};

exports.deleteUser = function(request, response) {
//exports.deleteUser = function() {
  var email_delete = request.query.email;
  console.log(request.query.email);
//  User.find({email:email_delete}).remove().exec();
  User.findOneAndRemove({email: email_delete}, function(err, removed){
    //response.status(200);
    //response.send(removed);
    console.log("in remove function");
    console.log(removed);
    if(err){
      response.status(400);
      return response.send({"reason":error.toString()});
    }
    response.status(200);
    return response.send(removed);

  });
  //response.status(400);
  //response.send({"reason":"Didnt enter remove function"});
  // if(data.deletedCount < 1){
  //   response.status(400);
  //   return response.send({reason:"Failed"});
  // }else{
  //  response.status(200);
  //   response.send();
  // }
};
