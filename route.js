var express = require("express");
var app = express();
var path = require("path");
var http = require("http");




 app.use(express.static("public"));
    

// Routes GET requests to /olivia to the request handler
app.get("/lessons", function (request, response) {
  response.send(
   [ { topic: "math", location: "London", price: 100 },
    { topic: "math", location: "Liverpool", price: 80 },
    { topic: "math", location: "Oxford", price: 90 },
    { topic: "math", location: "Bristol", price: 120 }]
  );
});
app.get("/user", function (request, response) {
    response.send(
        {'email': 'user@email.com', 'password':'mypassword'}

    );
  });


// if you load something other that /olivia, servers a 404 error.
// if itsnot a GET request also servers a 404 error.
app.use(function (request, response) {
  response.status(404).send("page not found");
});


app.listen(3000);
