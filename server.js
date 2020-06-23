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
                    return runView();

                case "vEmployees":
                    return runAdd();

                case "vRoles":
                    return runAdd();

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
        console.log("I got add to work!");
    };
