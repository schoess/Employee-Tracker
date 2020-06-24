# Employee-Tracker

  > The Employee Tracker is an application connected to a database to help a company keep track of its employees, departments, salaries, roles and managers.
  
  [![NPM Version][npm-image]][npm-url]
  ## Table of Contents
    * Installation
    * Usage
    * License
    * Contributing
  
  ## Installation
  
  OS X & Linux:
  
  ```sh
  node server.js
  ```
  
  Windows Bash Terminal:
  
  ```sh
  node server.js
  ```
  
  ## Usage example
  
  AS a user
  WHEN I do "node server.js"
  THEN I am prompted to select a range of options including VIEW, ADD, EDIT or EXIT
  
  WHEN I select VIEW
  THEN I am prompted to choose what I want to VIEW. (Departments, Employees, Roles)
  WHEN I choose one
  THEN I see a table in the console of the cooresponding data
  
  WHEN I choose ADD
  THEN I am prompted to choose what I want to ADD. (Departments, Employees, Roles)
  WHEN I choose one
  THEN I am prompted to enter specific info about the chosen list item
  WHEN I confirm the information
  THEN I see a confirmation message saying that it has been added to the database
  
  WHEN I choose EDIT
  THEN I am allowed to select a role to edit
  WHEN I choose a role to edit
  THEN I am prompted to choose what number to change it to
  
  WHEN I choose EXIT
  THEN the program stops running and gives me a nice little message...

  ## License
  
  License: MIT
  
  ## Contributing
  
  1. Fork it (<https://github.com/schoess/Employee-Tracker/fork>)
  2. Create your feature branch (`git checkout -b feature/fooBar`)
  3. Commit your changes (`git commit -am 'Add some fooBar'`)
  4. Push to the branch (`git push origin feature/fooBar`)
  5. Create a new Pull Request
