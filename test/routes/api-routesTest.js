var chai = require('chai');
var should = chai.should();
var chaiHttp = require('chai-http');
var routes = require ('../routes/api-routes.js');
var server = require ('../server.js');
var db = require("../models");

chai.use(chaiHttp);


//api-routes.js
describe("api-routes.js", function() {
    describe('GET route for getting all of the posts', () => {
        it('should return a JSON object with all the posts', (done) => {
          chai.request(server)
              .get('/api/posts/')
              .end((err, res) => {
                  res.should.have.status(200);
                  res.body.should.be.a('array');
                  res.body.length.should.be.eql(0);
                done();
              });
        });
    });
  

   /*  //GET routes
    describe('GET route for getting all of the posts', function(){
        it("should return a JSON object with all the posts", function() {
          //COMPLETE
        });
    });
    describe('Get route for retrieving a single post', function(){
        it('should return a JSON object with one posts', function(){
            //COMPLETE
        });
    });
    
    //POST routes
    describe('POST route for saving a new post)', function(){
        it('should create a JSON object then POST the data to the api', function(){
            //COMPLETE
        });
    });

    //PUT route
    describe('PUT route for updating posts', function(){

        it('should update the post using the ID to locate it', function(){
            //COMPLETE
        });

    }); */
  });
