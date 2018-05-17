var expect = require('chai').expect;

var db = require('./models/index.js');
var Post = db.Post;

describe('post', function () {
  it('should load', function (done) {
    Post.create({
      name: 'Pete',
      email: 'URLsamhill@whateva.org',
      phone: '9132225555',
      item: 'test',
      description: 'ok',
      image: 'ok',
      found: 'true',
    }).then( function (Post) {
      expect(Post.name).to.equal('Pete');
      expect(Post.email).to.equal('URLsamhill@whateva.org');
      expect(Post.phone).to.equal('9132225555');
      expect(Post.item).to.equal('test');
      expect(Post.description).to.equal('ok');
      expect(Post.image).to.equal('ok');
      expect(Post.found).to.equal(true);
      expect(Post).to.have.property('name').with.lengthOf(4);
      done();
    });
  });
});