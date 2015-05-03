var express = require('express');
var fs = require('fs');
var path = require('path');

var app = express();
app.use(express.static(__dirname + '/client/public'));

var filepath = path.join(__dirname, 'Paradise.m4a');

app.get('/music', function(req, res){
    res.set({'Content-Type': 'audio/mpeg'});
    var readStream = fs.createReadStream(filepath);
    readStream.pipe(res);
});

app.listen(8000);