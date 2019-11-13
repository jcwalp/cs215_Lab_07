


var express = require('express');
var http = require('http');
var path = require('path');
var app = express();
var PORT = 8080;






http.createServer(app).listen(PORT);




// MIDDLEWARE

app.use(express.static(path.join(__dirname + '/www')));



// set up the root route for the site  and the response (res)
app.get("/", function(req, res) {
  res.sendFile(__dirname + '/brightIdeas/index.html')
});
// set up the signUp route for the site  and the response (res)
app.get("/signup", function(req, res){
  res.sendFile(__dirname + '/brightIdeas/signup.html')
});
// set up the faq route for the site  and the response (res)


//app.post method here for signUp






console.log("Server running on port "+ PORT);
