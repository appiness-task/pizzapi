var express = require('express');
var app = express();
var bodyParser = require('body-parser');
const cors = require('cors');
const appConfig = require("./app/config/config.json").app

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true, limit: "50mb",parameterLimit: 5000000 }))

// Router Handler
require('./app/router/router.js')(app);

// Route Error Handler
app.use(function(req, res, next){
    res.status(404)
    res.send("not found")
})

// Database Connection
const db = require('./app/config/db.config.js');
db.connect()

app.listen(appConfig.port, appConfig.host , function () {
		console.log('Application worker ' + process.pid + ' started...');
		console.log(`Started server on http://${appConfig.host}:${appConfig.port}`);
	}
);
