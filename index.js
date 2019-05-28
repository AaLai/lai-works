const express = require('express');
const path = require('path');
const secrets = require('./secrets')

const app = express();

// Serve static files from React
app.use(express.static(path.join(__dirname, 'client/build')));
app.use(express.json())

app.get('/api/test', (req,res) => {
  const test = "Secret Kow Level! 🐄🐄🐄🐄🐄🐄🐄🐄🐄🐄🐄🐄🐄🐄 .... Mooo"
  res.json(test);
  console.log("test sent");
});

app.post('/api/weather', (req, res) => {
  var test = req.body

  console.log(test.city, test.countryCode)
  res.json(req.body)
});

// Handles requests that don't match above
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log('App is listening on port ' + port );