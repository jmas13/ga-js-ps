require('dotenv').config()
var express = require('express');
var ParseServer = require('parse-server').ParseServer;
var app = express();

var api = new ParseServer({
  databaseURI: process.env.MONGODB_URI || 'mongodb://localhost:27017/ps', // Connection string for your MongoDB database
  appId: 'ga-js-ps',
  masterKey: process.env.PS_MASTER_KEY, // Keep this key secret!
  serverURL: 'http://localhost:1337/parse' // Don't forget to change to https if needed
});

// Serve the Parse API on the /parse URL prefix
app.use('/parse', api);

app.listen(process.env.PORT || 4321, function() {
  console.log('parse-server-example running on port ' + (process.env.PORT || 4321));
});
