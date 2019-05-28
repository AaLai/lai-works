const express = require('express');
const path = require('path');
const fetch = require('node-fetch');

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
  console.log(req.body.city, req.body.countryCode)
  fetch('http://api.openweathermap.org/data/2.5/weather?q='+req.body.city+','+req.body.countryCode+'&appid='+process.env.Open_Weather_Key+'')
  .then(res => res.json())
  .then(data => res.send({data}))
});

// Handles requests that don't match above
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log('App is listening on port ' + port );