"use strict";
var chai = require("chai");
var chaiHttp = require('chai-http');
process.env.NODE_ENV = "test";
var expect = chai.expect;
var server = require("../../server.js");
chai.use(chaiHttp);

var band1 = require('mongoose').model('Band');
var bandService1 = require('../../server/services/bandService.js');


describe("Test CSV to Create Bands Function", function () {

  before(function(done){
    //user1.remove();
  band1.collection.drop();

  band1.ensureIndexes();
  done();

  });

    it("should test the createBand function when it succeeds from CSV File", function (done) {
      //this.timeout(5000);
      chai.request(server)
      .post('/api/band/csv')
      .send(["https://dl.dropboxusercontent.com/u/62901861/Bands.csv"])
      .end(function(err, res){
        //  console.log(res.body);
          expect(res).to.have.status(200);
          done();
      });
    });
    after(function(done){
      band1.collection.drop();
    //  user1.remove();
      done();
    });
});
