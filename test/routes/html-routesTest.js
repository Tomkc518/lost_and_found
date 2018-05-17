var expect = require('chai').expect;
var app = require ('../routes/html-routes.js');


//html-routes.js
describe("Routing", function() {

    //Index route
    describe('index route', function(){
        it("should load view.html", function() {
            expect(res).to.have.property('index');
        });
    });
    //Lost route
    describe('lost route', function(){
        it('should render lost.handlebars', function(){
            //Expect response object to have property lost
        });
    });
    //Found route
    describe('found route)', function(){
        it('should render found.handlebars', function(){
            //COMPLETE
        });
    });

  });
