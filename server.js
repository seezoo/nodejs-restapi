//server.js

//BASE SETUP
// ==========================================================

//call the packages we need
var express = require('express');  //call express
var app =  express();              //define our app using express
var bodyParser = require('body-parser');

//configure app to use bodyparser()
//this will let us get the data from a POST
app.use(bodyParser.urlencoded({
	extended: true
}));

app.use(bodyParser.json());

var port = process.env.PORT || 8080;     //set out port

// ROUTES FOR OUR API
// =========================================================
var router = express.Router();      //get an instance of express Router

// test route to make sure everything is working 
router.get('/', function(req, res) {
	res.json({
		message: 'Hello...Welcome to your webservice.You can get users by saying /webservice/users'
	});
});

/*
This example shows a middleware function with no mount path. The function is executed every time the app receives a request.

var app = express()

app.use(function (req, res, next) {
  console.log('Time:', Date.now())
  next()
})
*/

/*
This example shows a middleware function mounted on the /user/:id path. The function is executed for any type of HTTP request on the /user/:id path.

app.use('/user/:id', function (req, res, next) {
  console.log('Request Type:', req.method)
  next()
})
*/

/*
This example shows a route and its handler function (middleware system). The function handles GET requests to the /user/:id path.

app.get('/user/:id', function (req, res, next) {
  res.send('USER')
})
*/

//REGISTER OUR ROUTES
// all of router will be prefixed with /webservice
app.use('/webservice', router);

//START THE SERVER
app.listen(port);
console.log('Server running on port' + port);
