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
