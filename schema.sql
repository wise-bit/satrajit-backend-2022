create table warehouses (
  id serial primary key,
  name varchar(100) unique not null,
  address varchar(100) not null
);

create table items (
  id serial primary key,
  warehouse_id integer references warehouses(id),
  name varchar(100) unique not null,
  price decimal not null
);