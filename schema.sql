DROP DATABASE IF EXISTS work_db;

CREATE DATABASE work_db;
USE work_db;

CREATE TABLE employee (
	id INTEGER NOT NULL auto_increment PRIMARY KEY,
	first_name VARCHAR(30),
    last_name VARCHAR(30),
    role_id INTEGER,
    manager_id INTEGER,
	FOREIGN KEY (role_id) REFERENCES role(id),
    FOREIGN KEY (manager_id) REFERENCES employee(id)
);

CREATE TABLE department (
	id INTEGER NOT NULL auto_increment PRIMARY KEY,
    name VARCHAR(30)
);

CREATE TABLE role (
	id INTEGER NOT NULL auto_increment PRIMARY KEY,
    title VARCHAR(30),
    salary DECIMAL(9,2) NOT NULL,
    department_id INTEGER,
    FOREIGN KEY (department_id) REFERENCES department(id)
);

SELECT * FROM employee;

