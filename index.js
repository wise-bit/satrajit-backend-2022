// express
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
// db
var pg = require('pg');
const knex = require('./knex/knex.js');
// system
const dotenv = require('dotenv');
// project
const queries = require('./queries');

dotenv.config({ path: '.env' });

const port = process.env.PORT || 3000;
var client = new pg.Client(process.env.ELEPHANTSQL_URL);

// client.connect(function (err) {
//   if (err) {
//     return console.error('could not connect to postgres');
//   }
//   client.query('SELECT NOW() AS "theTime"', function (err, result) {
//     if (err) {
//       return console.error('error running query', err);
//     }
//     console.log(result.rows[0].theTime);
//     client.end();
//   });
// });

// DO NOT COMMIT WITH PASSWORD

const Pool = require('pg').Pool;
const pool = new Pool({
  user: process.env.SQL_USER,
  host: process.env.SQL_HOST,
  database: process.env.SQL_DATABASE,
  password: process.env.SQL_PASSWORD,
  port: 5432,
});

////

// console.log('test');
// pool.query('SELECT NOW() AS "theTime"', (error, results) => {
//   console.log('test');
//   if (error) {
//     throw error;
//   }
//   console.log(response.status(200).json(results.rows));
// });

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  pool.query(queries.getAllItems, (error, results) => {
    if (error) {
      throw error;
    }
    res.status(200).json(results.rows);
  });
});

app.get('/test', function (req, res) {
  client.query(queries.getAllItems, function (err, result) {
    if (err) {
      return console.error('error running query', err);
    }
    console.log(result);
    client.end();
  });
  res.send('Hello World');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
