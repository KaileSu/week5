var express = require('express');
var app = express();

// Cross origin resource sharing to cater for port 4200 to port 3000
var cors = require('cors');
app.use(cors());

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
// support parsing of application/json type post data

app.use(bodyParser.json());
//support parsing of application/x-www-form-urlencoded post data


/* Point static path to dist if you want use your own server
to serve Angular webpage to serve Angular webpage. Need run ng buld */
app.use(express.static(__dirname + '/../dist/my-app'));
// console.log(__dirname);

var http = require("http").Server(app);
var server = http.listen(3000, function() {
    console.log("Server listening on port: 3000");
});

app.post('/login', require('./router/postLogin'));
app.post('/loginafter', require('./router/postLoginafter'));