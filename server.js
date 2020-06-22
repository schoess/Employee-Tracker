const inquirer = require("inquirer");
const util = require("util");
const mysql = require("mysql");
const cTable = require("console.table");

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
    console.log("You are no connected as " + connection.threadId + "\n");
    console.log(`Welcome to the easiest way to spy on your employees.\n`);
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
                short: "View"
            },

            {
                name: "Add Departments, Employees and Roles",
                value: "add",
                short: "Add"
            },

            {
                name: "Update the employee roles",
                value: "update",
                short: "Update"
            },
            {
                name: "Exit Application",
                value: "exit",
                short: "Exit"
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
                value: "vDepartment",
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
                short: "Exit"
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
                value: "aDepartment",
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
                short: "Exit"
            }
        ]
    };

