const express = require('express');
const app = express();
var pg = require('pg');
const dotenv = require('dotenv');

const port = 4000;

dotenv.config({ path: ".env" });
const key = process.env.ELEPHANTSQL_URL;
console.log(key);

console.log(process.env.ELEPHANTSQL_URL)
var client = new pg.Client(process.env.ELEPHANTSQL_URL);

client.connect(function (err) {
  if (err) {
    return console.error('could not connect to postgres');
  }
  client.query('SELECT NOW() AS "theTime"', function (err, result) {
    if (err) {
      return console.error('error running query', err);
    }
    console.log(result.rows[0].theTime);
    client.end();
  });
});

app.use(express.urlencoded({ extended: false }));

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

app.get('/', function(req, res) {
  res.send('Hello World')
})
