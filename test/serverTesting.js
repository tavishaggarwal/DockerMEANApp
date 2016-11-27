var chai = require('chai');
var chaiHttp = require('chai-http');
var should = chai.should();

chai.use(chaiHttp);

var url = "http://localhost:8000";

describe('Testing rest calls',function(){

    describe('Finding contact lists',function(){
        it('return result status 200',function(done){
            chai.request(url).get('/contactlist').end(function(err, res){
                res.should.have.status(200);
                done();
            });
        });
    });

    describe('Adding contact lists',function(){
        it('post request returning 200',function(done){
            chai.request(url).post('/contactlist')
            .send({number: "777-777-777", email: "tavish@gmail.com", name: "tavish"}).end(function(err, res){
                res.should.have.status(200);
                res.should.be.json;
                res.body.should.be.a('object');
                done();
            });
        });
    });

    describe('Deleting contact lists',function(){
        it('delete request returning 200',function(done){
            chai.request(url).delete('/contactlist/'+ "58277193fa40dd099dbd222d").end(function(err, res){
                res.should.have.status(200);
                done();
            });
        });
    });

    describe('Editing contact lists',function(){
        it('get request returning 200',function(done){
            chai.request(url).get('/contactlist/'+ "58277193fa40dd099dbd222d").end(function(err, res){
                res.should.have.status(200);
                done();
            });
        });
    });

    describe('Editing contact lists',function(){
        it('get request returning 200',function(done){
            chai.request(url).put('/contactlist/'+ "58277193fa40dd099dbd222d").end(function(err, res){
                res.should.have.status(200);
                done();
            });
        });
    });

});