var express = require('express');
var app = express();

app.get('/', function(req, res){
    res.sendfile('public/index.html');
});

app.get('/src/lib/:file', function(req, res) {
    res.sendfile('src/lib/' + req.params.file);
});

app.get('/src/app/:file', function(req, res) {
    res.sendfile('src/app/' + req.params.file);
});

app.listen(3000);
console.log('Listening on port 3000');


