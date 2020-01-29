var express = require("express");
var app = express();
var mongojs = require('mongojs');
var bodyParser = require("body-parser");
var db= mongojs('contactlist',['contactlist']);

app.use(express.static(__dirname+"/public"));
app.use(bodyParser.json());
app.get('/contactlist',function (req,res){
    console.log("I recieved a GET request in serverside");
    db.contactlist.find(function(err,docs){
        res.json(docs)
    })
});

app.post('/contactlist',function(req,res){
    db.contactlist.insert(req.body,function(err,doc){
        res.json(doc);
    });
});

app.delete('/contactlist/:id',function(req,res){
    var id=req.params.id;
    db.contactlist.remove({_id:mongojs.ObjectID(id)},function(error,data){
        res.json(data)
    })
})

app.listen(3000);
console.log("server running on port 3000");
