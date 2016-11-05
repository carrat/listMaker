CREATE DATABASE listmaker_db;

USE listmaker_db;

CREATE TABLE items 
(
	id INT NOT NULL AUTO_INCREMENT,
	item_name varchar(150) NOT NULL,
	completed boolean,
	completed_date timestamp,
	PRIMARY KEY (id)
);