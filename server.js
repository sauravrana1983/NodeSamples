var express = require('express');
var app = express();
var PORT = 3000; // Upper case variable name specifies a constant variable
var middleware = require('./middleware.js');


app.use(middleware.logger);

app.get('/about',middleware.requireAuthentication,  function(req, res){
    res.send('About Page');
});

app.use(express.static(__dirname + '/public'));

app.listen(PORT, function(){
    console.log('Started Express Server' + PORT);
});

