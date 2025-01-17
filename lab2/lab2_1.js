var express = require('express');
var app = express();
app.set('port', process.env.PORT || 3000);

app.get('/', function(req, res){
    res.status(200);
         res.type('text/plain');
     res.send('Landing Page');
    });

    app.get('/about', function(req, res){
        res.status(200);
             res.type('text/plain');
         res.send('Welcome to the about page!');
        });
    

// a custom 404 page
app.use(function (req, res) {
    res.type('text/plain');
    res.status(404);
    res.send('404 - Not Found');
});

// a custom 500 page
app.use(function (err, req, res, next) {
    console.error(err.stack);
    res.type('text/plain');
    res.status(500);
    res.send('500 - Server Error');
});
app.listen(app.get('port'), function () {
console.log('Express started on http://localhost:' + 
app.get('port') + '; press Ctrl-C to terminate.'
    );
});
