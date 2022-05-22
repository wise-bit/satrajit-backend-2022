// system
const dotenv = require('dotenv');
// db
const Pool = require('pg').Pool;

dotenv.config({ path: '.env' });

const pool = new Pool({
  user: process.env.SQL_USER,
  host: process.env.SQL_HOST,
  database: process.env.SQL_DATABASE,
  password: process.env.SQL_PASSWORD,
  port: 5432,
});

/**
 *
 */
const getAllItems = (_req, res) => {
  pool.query('select * from items order by id asc', (error, results) => {
    if (error) {
      throw error;
    }
    res.status(200).json(results.rows);
  });
};

/**
 *
 */
const getAllWarehouses = (_req, res) => {
  pool.query('select * from warehouses order by id asc', (error, results) => {
    if (error) {
      throw error;
    }
    res.status(200).json(results.rows);
  });
};

/**
 *
 */
const getItemById = (req, res) => {
  const id = parseInt(req.params.id);

  const sql = 'select * from items where id = $1';

  pool.query(sql, [id], (error, results) => {
    if (error) {
      throw error;
    }
    res.status(200).json(results.rows);
  });
};

/**
 *
 */
const getItemsByWarehouseId = (req, res) => {
  const id = parseInt(req.params.id);

  const sql =
    'select * from items i\n' +
    'inner join warehouses w\n' +
    'on w.id = i.warehouse_id\n' +
    'where w.id = $1';

  pool.query(sql, [id], (error, results) => {
    if (error) {
      throw error;
    }
    res.status(200).json(results.rows);
  });
};

/**
 *
 */
const createItem = (req, res) => {
  const { warehouse, name, price } = req.body;
  console.log(req.body);

  const sql =
    'insert into items (id, warehouse_id, name, price)\n' +
    'values (DEFAULT, $1, $2, $3)\n' +
    'returning id as itemid';

  pool.query(sql, [warehouse, name, price], (error, results) => {
    if (error) {
      if (error.code === '23503') {
        res.status(400).send('Invalid warehouse ID');
      }
    }

    // TODO add uniqueuess check

    res.status(201).send(`Item ID: ${results.rows[0].itemid} inserted`);
  });
};

/**
 *
 */
const updateItem = (req, res) => {
  const id = parseInt(req.params.id);
  const { warehouse, name, price } = req.body;

  const sql =
    'update items\n' +
    'set warehouse_id = $1, name = $2, price = $3\n' +
    'where id = $4\n' +
    'returning id as itemid';

  pool.query(sql, [warehouse, name, price, id], (error, results) => {
    if (error) {
      throw error;
    }
    res.status(200).send(`Item ID: ${results.rows[0].itemid} updated`);
  });
};

/**
 *
 */
const deleteItem = (req, res) => {
  const id = parseInt(req.params.id);

  const sql = 'delete from items where id = $1 returning id as itemid';

  pool.query(sql, [id], (error, results) => {
    if (error) {
      throw error;
    }
    res.status(200).send(`Item ID: ${results.rows[0].itemid} deleted`);
  });
};

/**
 *
 */
const handleErrorMessage = () => {
  return 'Unexpected error occured.';
};

module.exports = {
  getAllItems,
  getAllWarehouses,
  getItemById,
  getItemsByWarehouseId,
  createItem,
  updateItem,
  deleteItem,
};
