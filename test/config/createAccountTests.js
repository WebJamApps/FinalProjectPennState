"use strict";
var chai = require("chai");
var sinon = require("sinon");
var sinonChai = require("sinon-chai");
var expect = chai.expect;
chai.use(sinonChai);


var user1 = require('../../server/models/User.js');
var userService1 = require('../../server/services/userService.js');

describe("CreateAccount", function () {
    it("Create Account should fail if userName already exists", function () {
        //code to verify that userTest69 is not an existing username
	//code to test that login fails when submitting userTest69 as username
  var username = "userTest69";
  var newUser = userService1.createUser(username);
  var cb = sinon.spy();

  function getSignupForm(name, cb) {
      cb("hello " + name)};

  getSignupForm("foo", cb);

  expect(newUser).to.have.been.calledWith("The server will respond with a 400");
      });

    it("Create account should fail if the email already exists", function () {
        //code to create a new user with
        var email = "userTest69@testEmail.com";
        var newUser = userService1.createUser(email);
        //code to try login for new user with incorrect password
        //expect login failureMessage
        expect(newUser).to.have.been.calledWith("some errorCode");

    });

    it("Create account should fail if the password is not appropriately complex", function () {
        //code to create a new user with
        var password = "tooSimple";
        //code to try login for new user with simple password
        var newUser = userService1.createUser(password);
        //expect login failureMessage
    });

    it("Successful create account should send a verification email", function () {
        //code to create a new user with
        var password = "tooSimple";
        //code to try login for new user with simple password
        var newUser = userService1.createUser(password);
        //expect login failureMessage

    });

        it("create account should fail without enter of proper Capcha to prevent bots", function () {
            //code to create a new user with
            var password = "tooSimple";
            //code to try login for new user with simple password
            var newUser = userService1.createUser(password);
            //expect login failureMessage
    });
});