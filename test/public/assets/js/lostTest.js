var expect = require('chai').expect;
var app = require ('../lost.js');


//LOST.js
describe("lost.js", function() {

    //TEXT FIELD TESTS
    describe('Text Fields', function(newLost){
        it("should only accept letters in the name field", function() {
          //COMPLETE
        });
    
        it('should not accept spaces in the email field', function(){
            //COMPLETE
        });

        it('should only accept numbers, dashes, and parentheses in the phone number field, and no spcaes', function(){
            //COMPLETE
        });
    });

    //AJAX POST REQUEST TESTS
    describe('createLost POST REQUEST $.ajax("/api/posts")', function(){

        it('should POST the data to the api', function(){
            //COMPLETE
        });
    });

    //AJAX PUT REQUEST TESTS
    describe('foundBtn PUT REQUEST $.ajax("/api/posts"+ id)', function(){

        it('should send PUT request', function(){
            //COMPLETE
        });

        it('should then change FOUND STATUS to true', function(){
            //COMPLETE
        });
    });
  });
