create table warehouses (
  id serial primary key,
  name text,
  price integer
);

create table items (
  id serial primary key,
  warehouse_id integer references warehouse(id),
  name text,
  price integer
);