var express = require('express');
var app = express();
var PORT = 3000; // Upper case variable name specifies a constant variable

// app.get('/', function(req,res){
//     res.send('Hello Express');
// })

var middleware = {
    requireAuthentication: function(req, res, next){
        console.log('private route hit');
        next();
    },
    logger: function(req, res, next){
        var date = new Date().toString();
        console.log(req.method + ' ' + date + ' ' + req.originalUrl);
        next();
    }
};

app.use(middleware.logger);

app.get('/about',middleware.requireAuthentication,  function(req, res){
    res.send('About Page');
});

app.use(express.static(__dirname + '/public'));

app.listen(PORT, function(){
    console.log('Started Express Server' + PORT);
});

//applicaiton level middleware and route level middleware
