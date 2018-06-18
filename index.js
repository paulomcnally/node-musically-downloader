/**
 * Server to fetch musical.ly video url.
 * Example: http://localhost:3000/?url=http://v16.musical.ly/e2o8w/
 */

const express = require('express');
const Api = require('./api.js');
const app = express();

// Server port
const port = process.env.PORT || 3000;

// On root url use url query string.
app.get('/', (req, res) => Api.fetch(req.query.url, (url) => res.json({url: url})));

// Run server
app.listen(port, () => console.log(`App listen on port ${port}.`))
