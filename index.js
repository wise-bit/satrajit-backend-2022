// express
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
// system
const dotenv = require('dotenv');
// project
const db = require('./queries');

dotenv.config({ path: '.env' });

const port = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(express.urlencoded({ extended: false }));

app.get('/', (_req, res) => {
  res.send(
    "Satrajit's application. \n" +
    'Server information available in README.md. \n' +
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
app.post('/warehouses', db.createWarehouse);

// PUT endpoints
app.put('/items/:id', db.updateItem);
app.put('/warehouses/:id', db.updateWarehouse);

// DELETE endpoints
app.delete('/items/:id', db.deleteItem);
app.delete('/warehouses/:id', db.deleteWarehouse);

// Listener
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
