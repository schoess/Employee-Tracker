const inquirer = require("inquirer");
const util = require("util");
const mysql = require("mysql");
const cTable = require("console.table");
const { darkcyan } = require("color-name");

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "skianddestroy",
    database: "work_db"
});

const query = util.promisify(connection.query).bind(connection);

connection.connect(function (err) {
    if (err) throw err;
    console.log("\nYou are now connected as " + connection.threadId + "\n");
    console.log("Welcome to the easiest way to spy on your employees.\n");
    start();
});


    const optionsPrompt = 
    {
        type: "list",
        message: "Would you like to view or add?",
        name: "option",
        choices: [
            {
                name: "View Departments, Employees and Roles",
                value: "view",
                short: "viewPrompt"
            },

            {
                name: "Add Departments, Employees and Roles",
                value: "add",
                short: "Add Prompt"
            },

            {
                name: "Update the Employee roles",
                value: "update",
                short: "Update Employee Roles"
            },
            {
                name: "Exit Application",
                value: "exit",
                short: "Exit App"
            }
        ]
    };

    const viewOptionsPrompt = 
    {
        type: "list",
        message: "What would you like to view?",
        name: "viewOption",
        choices: [
            {
                name: "View Departments",
                value: "vDepartments",
                short: "ViewDepartment"
            },

            {
                name: "View Employees",
                value: "vEmployees",
                short: "ViewEmployees"
            },

            {
                name: "View Roles",
                value: "vRoles",
                short: "ViewRoles"
            },
            {
                name: "Exit Application",
                value: "exit",
                short: "Exit App"
            }
        ]
    };

    const addOptionsPrompt = 
    {
        type: "list",
        message: "What would you like to Add?",
        name: "addOption",
        choices: [
            {
                name: "Add Departments",
                value: "aDepartments",
                short: "AddDepartment"
            },

            {
                name: "Add Employees",
                value: "aEmployees",
                short: "AddEmployees"
            },

            {
                name: "Add Roles",
                value: "aRoles",
                short: "AddRoles"
            },
            {
                name: "Exit Application",
                value: "exit",
                short: "Exit App"
            }
        ]
    };


function start() {
        inquirer.prompt(optionsPrompt)
        .then(answer => {
            console.log(answer.option);
            switch (answer.option) {
                case "view":
                    return runView();

                case "add":
                    return runAdd();

                case "update":
                    return updateEmployeeRole();

                case "exit":
                    console.log("Maybe we'll see you again soon...");
                    connection.end();
                    break;

                default:
                    return console.log("Something went wrong...");
            }
        }).catch(function(err) {
            console.log(err);
        })
    };

    function runView() {
        inquirer.prompt(viewOptionsPrompt)
        .then(answer => {
            console.log(answer.viewOption);
            switch (answer.viewOption) {
                case "vDepartments":
                    return view("department", "Departments");
                case "vEmployees":
                    return view("employee", "Employees");
                case "vRoles":
                    return view("role", "Roles");
                case "exit":
                    console.log("Maybe we'll see you again soon...");
                    connection.end();
                    break;
                default:
                    return console.log("Something went wrong...");
            }
        }).catch(function(err) {
            console.log(err);
        })
    };

    function runAdd() {
        inquirer.prompt(addOptionsPrompt)
        .then(answer => {
            console.log(answer.addOption);
            switch (answer.addOption) {
                case "aDepartments":
                    return addDept();
                case "aEmployees":
                    return addEmployee();
                case "aRoles":
                    return addRole();
                case "exit":
                    console.log("Maybe we'll see you again soon...\n");
                    connection.end();
                    break;
                default:
                    return console.log("Something went wrong...\n");
            }
        }).catch(function(err) {
            console.log(err);
        })
    };


    function addDept(){
        inquirer.prompt([
            {
                name: "deptID",
                type: "input",
                message: "What is the Department ID number?:"
            },
            {
                name: "deptName",
                type: "input",
                message: "What is the Department name?:"
            }
        ]).then(answer => {
            connection.query(
                "INSERT INTO department SET ?",
                {
                    id: answer.deptID,
                    name: answer.deptName
                },
                function (err) {
                    if (err) throw err;
                    console.log("Department " + answer.deptName + " has been successfully added to the database!\n");
                    start();
                }
            )
        })
    };

    function addEmployee(){
        inquirer.prompt([
            {
                name: "employeeID",
                type: "input",
                message: "Enter the Employee's ID number:"
            },
            {
                name: "employeeFirstName",
                type: "input",
                message: "Enter the Employee's First Name:"
            },
            {
                name: "employeeLastName",
                type: "input",
                message: "Enter the Employee's Last Name:"
            },
            {
                name: "employeeRoleID",
                type: "input",
                message: "Enter the Employee's Role ID:"
            },
            {
                name: "employeeManagerID",
                type: "input",
                message: "Enter the Employee's Manager's ID:"
            },
        ]).then(answer => {
            connection.query(
                "INSERT INTO employee SET ?",
                {
                    id: answer.employeeID,
                    first_name: answer.employeeFirstName,
                    last_name: answer.employeeLastName,
                    role_id: answer.employeeRoleID,
                    manager_id: answer.employeeManagerID
                },
                function (err) {
                    if (err) throw err;
                    console.log("The Employee " + answer.employeeFirstName + answer.employeeLastName + " has been successfully added to the database!\n");
                    start();
                }
            )
        })
    };

    function addRole(){
        inquirer.prompt([
            {
                name: "roleID",
                type: "input",
                message: "Enter the Role ID number:"
            },
            {
                name: "roleTitle",
                type: "input",
                message: "Enter the title for Role:"
            },
            {
                name: "salary",
                type: "input",
                message: "Enter salary:"
            },
            {
                name: "roledeptID",
                type: "input",
                message: "Enter the department ID for Role:"
            }
        ]).then(answer => {
            connection.query(
                "INSERT INTO role SET ?",
                {
                    id: answer.roleID,
                    title: answer.roleTitle,
                    salary: answer.salary,
                    department_id: answer.roledeptID
                },
                function (err) {
                    if (err) throw err;
                    console.log("Role " + answer.roleTitle + " added\n");
                    start();
                }
            )
        })
    };

    function updateEmployeeRole() {
        inquirer.prompt([
            {
                name: "UpdateEmployeeRoleID",
                type: "input",
                message: "Please enter the ID of the employee that you would like to update."
            },
            {
                type: "input",
                name: "UpdateEmployeeNewRole",
                message: "Please enter a new Role for Employee."
            }
        ]).then(answer =>{ 
            let first = answer.UpdateEmployeeRoleID;
            let second = answer.UpdateEmployeeNewRole;
            connection.query(
                `UPDATE employee SET role_id = ${second} WHERE id = ${first}`,
                function (err) {
                    if (err) throw err;
                    console.log("Employee #" + answer.UpdateEmployeeRoleID + " role updated to " + answer.UpdateEmployeeNewRole + "\n");
                    start();
                }
            )
        })
    }

    function view(tableName, displayName) {
        connection.query(`SELECT * FROM ${tableName}`, function (err, data) {
          if (err) throw err;
          console.table(`\n ${displayName}`, data);
          start();
        });
      }
