create table warehouses (
  id serial primary key,
  name varchar(100),
  address varchar(100)
);

create table items (
  id serial primary key,
  warehouse_id integer references warehouses(id),
  name varchar(100),
  price integer
);