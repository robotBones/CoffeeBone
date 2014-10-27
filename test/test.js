var superagent = require('superagent');
var expect     = require('expect.js');
var should     = require('should');

var port = process.env.PORT || 8000;
var host = process.env.URL || 'localhost';
var url  = ['http://',host,':',port].join('');

describe('server routers', function(){

  it('retrieves welcome page from root path', function (done){
    superagent.get(url)
      .end(function (err, res){
        expect(err).to.eql(null);
        expect(res.status).to.eql(200);
        done();
      });
  });

  it('retrieves welcome page from /', function (done){
    superagent.get(url +'/')
      .end(function (err, res){
        expect(err).to.eql(null);
        expect(res.status).to.eql(200);
        done();
      });
  });

  it('retrieves admin page from /admin', function (done){
    superagent.get(url +'/admin')
      .end(function (err, res){
        expect(err).to.eql(null);
        expect(res.status).to.eql(200);
        done();
      });
  });

  it('retrieves user page from /user', function (done){
    superagent.get(url +'/user')
      .end(function (err, res){
        expect(err).to.eql(null);
        expect(res.status).to.eql(200);
        done();
      });
  });

  it('retrieves video page from /video', function (done){
    superagent.get(url +'/video')
      .end(function (err, res){
        expect(err).to.eql(null);
        expect(res.status).to.eql(200);
        done();
      });
  });

  it('retrieves api page from /api', function (done){
    superagent.get(url +'/api')
      .end(function (err, res){
        expect(err).to.eql(null);
        expect(res.status).to.eql(200);
        done();
      });
  });

  it('retrieves welcome page from jibberish path /jibberish', function (done){
    superagent.get(url +'/jibberish')
      .end(function (err, res){
        expect(err).to.eql(null);
        expect(res.status).to.eql(200);
        (res.redirects[0]).should.equal(url+'/');
        done();
      });
  });

});