// Create web server application
var express = require('express');
var app = express();

// Create a static web server
app.use(express.static('public'));

// Create a route to handle incoming requests
app.get('/comments', function(request, response) {
    console.log('GET request received at /comments');

    // Send a JSON response
    response.send('GET request received at /comments');
});

// Create a route to handle incoming POST requests
app.post('/comments', function(request, response) {
    console.log('POST request received at /comments');

    // Send a JSON response
    response.send('POST request received at /comments');
});

// Start the web server on port 3000
app.listen(3000, function() {
    console.log('Web server started on port 3000');
});