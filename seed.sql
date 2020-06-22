USE work_db;

INSERT INTO department (name)
VALUES ("Marketing"),("Sales"),("Human Resources"),("Engineering");

INSERT INTO role (title, salary, department_id)
VALUES ("Marketing Manager", 90000, 1),("Market Analyist", 50000, 1),("Lead Salesperson", 110000, 2),("Sales Associate", 56000, 2),("HR Director", 118000, 3),("PR Analyst", 72000, 3),("Senior Engineer", 140000, 4),("Engineering Intern", 50000, 4);

INSERT INTO employee (first_name, last_name, role_id)
VALUES ("Joseph", "Johnson", "1"),("John","Doe","2"),("Jane", "Doe","3"),("Sam","Smith","4");

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Jimothy", "Westbrook", 1, 1), ("Erasmo","Sanchez",2,1),("Taylor","Smith",2,2),("Hellen","Degenerous",3,2),("Nick","Schoess",1,4),("Rhett","Williams",5,2),("Jeff","White",3,3),("Bill","Cosby",5,2),("Val","Weekes",3,4);
