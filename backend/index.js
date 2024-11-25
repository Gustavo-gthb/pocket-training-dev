const express = require('express');
const cors = require('cors');
const ParseServer = require('parse-server').ParseServer;
const app = express();
require('dotenv').config();

app.use(cors());

const server = new ParseServer({
	databaseURI: `mongodb://localhost:${process.env.MONGODB_PORT}/test`, // Connection string for your MongoDB database
	cloud: './cloud/main.js', // Path to your Cloud Code
	appId: 'Jw8LjVIempu7YWkA9TAnFEUAEbnT6cXeFO7LmkX2',
	masterKey: 'kFlVdVhmBTlbX0WxI1PqoR288D97DKGq22wA1MDa', // Keep this key secret!
	fileKey: 'optionalFileKey',
	serverURL: 'http://localhost:1337/parse' // Don't forget to change to https if needed,
});

async function Rserver() {
	// Start server
	await server.start();
}

Rserver();

// Serve the Parse API on the /parse URL prefix
app.use('/parse', server.app);

app.listen(1337, function () {
	console.log('parse-server-example running on port 1337.');
});
