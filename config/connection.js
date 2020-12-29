// Set up mysql connection
const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  port: process.env.PORT || 3000,
  user: "root",
  password: "pathword",
  database: "burger_db",
});

// make connection
connection.connect((err) => {
  if (err) {
    console.log(`error connecting: ${err.stack}`);
    return;
  }
  console.log(`connected as id: ${connection.threadId}`);
});

// export connection for ORM to use
module.exports = connection;
