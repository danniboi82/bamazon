DROP DATABASE IF EXISTS bamazon_DB;
CREATE DATABASE bamazon_DB;

USE bamazon_DB;

CREATE TABLE products(
  id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(100) NOT NULL,
  department_name VARCHAR(45) NOT NULL,
  price INT default 0,
  stock_qty INT default 0,
  PRIMARY KEY (id)
);

INSERT INTO products (product_name, department_name, price, stock_qty)
VALUES ("SSD", "Electronics", 100, 100);

INSERT INTO products (product_name, department_name, price, stock_qty)
VALUES ("NDS", "Video Games", 100, 100);

INSERT INTO products (product_name, department_name, price, stock_qty)
VALUES ("Hi-Chew", "Grocery", 100, 100);

INSERT INTO products (product_name, department_name, price, stock_qty)
VALUES ("Battery", "Household Supplies", 100, 100);

INSERT INTO products (product_name, department_name, price, stock_qty)
VALUES ("Bic Pen", "Office", 100, 100);

INSERT INTO products (product_name, department_name, price, stock_qty)
VALUES ("pots", "Gardening", 100, 100);

INSERT INTO products (product_name, department_name, price, stock_qty)
VALUES ("tennis balls", "Sports", 100, 100);

INSERT INTO products (product_name, department_name, price, stock_qty)
VALUES ("golf club", "Sports", 100, 100);

INSERT INTO products (product_name, department_name, price, stock_qty)
VALUES ("Spider Man Movie", "Movies & TV", 100, 100);

INSERT INTO products (product_name, department_name, price, stock_qty)
VALUES ("Silicon Valley(HBO)", "Movies & TV", 100, 100);