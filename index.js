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

// uses client IP to find city and country for openweathermap api
// comment out line 21 '+ req.ip' and add 24.48.0.1 to http address
// after 'json/' to test on localhost
app.get('/api/weather', (req, res) => {
  console.log(req.ip)
  fetch('http://ip-api.com/json/' + req.ip )
  .then(ip => {
    if (ip.ok) {
      ip.json()
      .then(ip => fetch('http://api.openweathermap.org/data/2.5/weather?q='+ip.city+','+ip.countryCode+'&appid='+process.env.Open_Weather_Key+'')
      .then(weather => {
        if (weather.ok) {
          weather.json()
          .then(data => res.send({data}))
        }
      }))
    }
  })
  .catch(err => console.error("Something went wrong boss" + err))
});

// Handles requests that don't match above
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log('App is listening on port ' + port );