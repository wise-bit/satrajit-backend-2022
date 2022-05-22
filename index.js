// express
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
// db
var pg = require('pg');
// system
const dotenv = require('dotenv');
// project
const db = require('./queries');

dotenv.config({ path: '.env' });

const port = process.env.PORT || 4000;

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.send(
    "Satrajit's application for Shopify Backend Developer Intern\n" +
      '(Find out more about me at satrajit.ca)'
  );
});

// GET endpoints
app.get('/items', db.getAllItems);
app.get('/items/:id', db.getItemById);
app.get('/warehouses', db.getAllWarehouses);
app.get('/warehouses/:id', db.getItemsByWarehouseId);

// POST endpoints
app.post('/items', db.createItem);

// PUT endpoints
app.put('/items/:id', db.updateItem);

// DELETE endpoints
app.delete('/items/:id', db.deleteItem);

// Listener
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
