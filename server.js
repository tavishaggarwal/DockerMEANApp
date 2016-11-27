var express = require("express");
var app = express();

var mongoose = require('mongoose');
var body_parser = require("body-parser");
var config = require('config');

var db = mongoose.connection;
var ObjectId = require('mongoose').Types.ObjectId;
var contactlistSchema = require("./contactlist");

var dbName = config.get('Myapp.dbConfig.dbName');
var dbURL = config.get('Myapp.dbConfig.dbURL');

mongoose.Promise = global.Promise;
mongoose.connect(dbURL + dbName);

// Connecting to Mongo DB
db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function() {
console.log("Connected to mongoDB");
});

var contactlist = mongoose.model('contactlist', contactlistSchema);

app.use(express.static(__dirname +"/public"));
app.use(body_parser.json());

// Displaying all contacts in DB
app.get("/contactlist",function(req,res){
    contactlist.find(function(err,contactlists){
            res.json(contactlists);
    });
});

// Adding contacts to DB
app.post("/contactlist",function(req,res){
    var newUser = new contactlist(req.body);

    newUser.save(function(err,docs){
        res.json(docs);
    });
});

// Deleting Contacts from DB
app.delete("/contactlist/:id",function(req,res){
    var id = req.params.id;

    contactlist.remove({'_id': new ObjectId(id)},function(err,docs){
        res.json(docs);
    });
});

// Selecting contact that need to be updated
app.get("/contactlist/:id",function(req,res){
    var id = req.params.id;

    contactlist.findOne({'_id': new ObjectId(id)},function(err,docs){
        res.json(docs);
    });
});


// Updating contacts stored in DB
app.put("/contactlist/:id",function(req,res){
    var id = req.params.id;
    
    contactlist.update({'_id': new ObjectId(id)},
    {$set:{name:req.body.name,email:req.body.email,number:req.body.number}},function(err,docs){
            res.json(docs);
    });
 
});

app.listen(3000);
console.log("Server running on port 3000");