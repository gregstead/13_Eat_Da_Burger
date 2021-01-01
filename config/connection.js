// Set up mysql connection
const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "pathword",
  database: "burgers_db",
});

// make connection
connection.connect((err) => {
  if (err) throw err;
  console.log(`connected as id: ${connection.threadId}`);
});

// export connection for ORM to use
module.exports = connection;
