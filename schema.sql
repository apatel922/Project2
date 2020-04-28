DROP DATABASE IF EXISTS members_db;
CREATE DATABASE members_db;
USE members_db;

CREATE TABLE userData(
  id INTEGER(11) AUTO_INCREMENT NOT NULL,
  firstName VARCHAR(30),
  lastName VARCHAR(30),
  gradYear INTEGER(11) NOT NULL,
  bio VARCHAR(255),
  PRIMARY KEY (id)
);


